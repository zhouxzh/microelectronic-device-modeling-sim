# 课件源文件说明

`src/presentation` 保存课程课件的 Markdown 源文件，使用 [Marp](https://marp.app/) 构建为可直接在 GitHub Pages 打开的 HTML 演示文稿。公开入口统一位于课程首页的“课程章节”区域。

## 课件源文件

- [第1章：Silvaco器件仿真软件功能介绍](src/presentation/01-silvaco-introduction.md)
- [第2章：TCAD基础](src/presentation/02-tcad-basics.md)
- [第3章：框架、交互工具与语法规则](src/presentation/03-workflow-and-syntax.md)
- [第4章：工艺仿真模块与流程](src/presentation/04-process-simulation.md)
- [第5章：关键工艺步骤与参数校准](src/presentation/05-process-steps-and-calibration.md)
- [第6章：器件仿真模块与流程](src/presentation/06-device-simulation.md)
- [第7章：器件结构、物理模型与结果分析](src/presentation/07-device-structure-models-results.md)
- [第8章：功率器件仿真](src/presentation/08-power-device-simulation.md)

新增课件时，文件名使用两位数字前缀（例如 `02-device-models.md`），并保留以下 frontmatter：

```yaml
---
marp: true
theme: microelectronics
paginate: true
size: 16:9
---
```

`pnpm run docs:slides` 会生成课件 HTML，并将 `src/presentation/assets` 同步到发布目录。VuePress 不再为 `src/presentation/README.md` 或课件 Markdown 生成普通页面。
