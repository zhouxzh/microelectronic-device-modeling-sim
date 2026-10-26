"""Extract PPTX slide text and embedded media for a Marp conversion."""
from __future__ import annotations

import argparse
import posixpath
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

REL_NS = "http://schemas.openxmlformats.org/package/2006/relationships"
P_NS = "http://schemas.openxmlformats.org/presentationml/2006/main"
A_NS = "http://schemas.openxmlformats.org/drawingml/2006/main"


def slide_number(name: str) -> int:
    return int(re.search(r"slide(\d+)\.xml$", name).group(1))


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pptx", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(args.pptx) as archive:
        media = {name: archive.read(name) for name in archive.namelist() if name.startswith("ppt/media/")}
        for name, content in media.items():
            target = args.output / Path(name).name
            target.write_bytes(content)

        slides = sorted(
            (name for name in archive.namelist() if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)),
            key=slide_number,
        )
        for slide in slides:
            number = slide_number(slide)
            root = ET.fromstring(archive.read(slide))
            texts = [node.text or "" for node in root.findall(f".//{{{A_NS}}}t")]
            rel_name = f"ppt/slides/_rels/slide{number}.xml.rels"
            targets: list[str] = []
            if rel_name in archive.namelist():
                rel_root = ET.fromstring(archive.read(rel_name))
                for rel in rel_root.findall(f"{{{REL_NS}}}Relationship"):
                    target = rel.attrib.get("Target", "")
                    if target.startswith("../media/"):
                        targets.append(Path(posixpath.normpath(posixpath.join("ppt/slides", target))).name)
            print(f"{number:02d}: {', '.join(targets) or '(no embedded image)'}")
            (args.output / f"slide-{number:02d}.txt").write_text("\n".join(texts), encoding="utf-8")


if __name__ == "__main__":
    main()
