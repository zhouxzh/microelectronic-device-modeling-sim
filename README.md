# 微电子器件建模与仿真

研究生选修课 **微电子器件建模与仿真** 课程主页与教学资料仓库。

本仓库参考 [Ascend310](https://github.com/zhouxzh/Ascend310) 的 VuePress + Marp 组织方式：课程介绍、教学资料和可公开的课堂课件统一发布到 GitHub Pages。

## 课程信息

| 项目 | 内容 |
| --- | --- |
| 课程名称 | 微电子器件建模与仿真 |
| 课程性质 | 研究生选修课 |
| 总学时 | 32 学时 |
| 平时成绩 | 40%，由课堂参与、阶段任务和学习过程构成 |
| 考试成绩 | 60%，无笔试；每位学生完成一次 PPT 讲解并提交配套报告 |

课程的具体教学进度、讲授主题、报告要求和评分细则以后续课程通知为准。

## 内容导航

- [课程介绍](src/README.md)
- [教学计划](src/plan/README.md)
- [教学演示（PPT）](src/presentation/README.md)

## 本地开发

环境要求：Node.js 20+、pnpm 10+。

```bash
pnpm install
pnpm docs:dev
```

打开终端提示的本地地址即可预览课程主页。构建静态站点和全部课件：

```bash
pnpm docs:build
```

只构建 Marp 课件：

```bash
pnpm docs:slides
```

Marp 源文件位于 `src/presentation/`，生成的 HTML 位于 `src/.vuepress/public/presentation/`，生成目录不提交版本库。新增课件时，在该目录添加带有 `marp: true` 的 Markdown 文件即可被构建脚本发现。

## GitHub Pages

`.github/workflows/deploy-pages.yml` 会在 `main` 分支 push 或手动触发时执行：安装 pnpm 依赖、构建 VuePress 与 Marp 课件、上传 Pages artifact，并通过 GitHub Pages 发布。

仓库当前按 `zhouxzh/microelectronic-device-modeling-sim` 配置，预期站点地址为：

<https://zhouxzh.github.io/microelectronic-device-modeling-sim/>

首次启用时，请在 GitHub 仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。

## 目录结构

```text
.
├── .github/workflows/deploy-pages.yml  # GitHub Pages 构建与发布
├── scripts/build_presentation.mjs      # Marp 课件构建脚本
├── src/
│   ├── README.md                       # 课程主页正文
│   ├── .vuepress/                      # VuePress 配置与主题
│   └── presentation/                   # PPT Markdown 源文件
└── package.json
```

## 许可证

课程资料的版权和许可范围以仓库后续声明为准。未经授课教师许可，请勿将学生作业、个人信息或未公开实验数据提交到仓库。
