import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import markdownItAttrs from "markdown-it-attrs";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/microelectronic-device-modeling-sim/",
  lang: "zh-CN",
  title: "微电子器件建模与仿真",
  description: "研究生选修课：微电子器件建模与仿真",
  pagePatterns: [
    "**/*.md",
    "!presentation/[0-9][0-9]-*.md",
    "!.vuepress",
    "!node_modules",
  ],
  bundler: viteBundler({
    viteOptions: {
      server: {
        watch: {
          ignored: ["**/.*.tmpdir/**", "**/*.tmp", "**/.vuepress/dist/**"],
        },
      },
    },
  }),
  theme,
  extendsMarkdown: (md) => {
    md.use(markdownItAttrs);
  },
});
