---
title: 教学演示
---

# 教学演示

本目录保存课程课堂 PPT 的 Markdown 源文件，使用 [Marp](https://marp.app/) 构建为可直接在 GitHub Pages 打开的 HTML 演示文稿。

## 课件目录

- [课程导论](01-course-introduction.html)：课程目标、内容组织与考核方式

新增课件时，文件名使用两位数字前缀（例如 `02-device-models.md`），并保留以下 frontmatter：

```yaml
---
marp: true
theme: microelectronics
paginate: true
size: 16:9
---
```

源文件不会作为普通 VuePress 页面渲染；GitHub Actions 会先执行 `pnpm run docs:slides`，再构建整个站点。
