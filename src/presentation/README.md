---
title: 教学演示
---

# 教学演示

本目录保存课程课堂 PPT 的 Markdown 源文件，使用 [Marp](https://marp.app/) 构建为可直接在 GitHub Pages 打开的 HTML 演示文稿。

## 课件目录

- [第1章：Silvaco器件仿真软件功能介绍](01-silvaco-introduction.html)：TCAD、工艺仿真和 SiC JBS 结果分析
- [第2章：TCAD基础](02-tcad-basics.html)：数值计算、网格、仿真流程和功率器件输入输出
- [第3章：框架、交互工具与语法规则](03-workflow-and-syntax.html)：DeckBuild、TonyPlot、仿真流程和文件类型
- [第4章：工艺仿真模块与流程](04-process-simulation.html)：ATHENA 模块、网格、初始化、氧化和结构提取
- [第5章：关键工艺步骤与参数校准](05-process-steps-and-calibration.html)：注入、扩散、淀积、刻蚀、外延、光刻、优化与校准
- [第6章：器件仿真模块与流程](06-device-simulation.html)：ATLAS 模块、器件流程、二极管示例和特性提取
- [第7章：器件结构、模型与结果分析](07-device-structure-models-results.html)：结构生成、材料参数、物理模型、DC/AC/瞬态和结果分析
- [第8章：功率器件仿真](08-power-device-simulation.html)：PiN、SiC JBS、肖特基、IGBT 和保护环案例

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
