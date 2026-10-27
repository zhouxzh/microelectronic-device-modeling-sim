---
title: 教学计划
description: 基于 Silvaco TCAD 培训资料的八章教学计划
containerClass: course-plan
sidebar: false
pageInfo: false
toc: false
---

# 教学计划

<section class="plan-hero">
  <p class="plan-eyebrow">Teaching Plan · Silvaco TCAD</p>
  <h1>八个晚上，完成一条<br><span>功率器件仿真课件主线</span></h1>
  <p class="plan-hero__lead">第 1 章使用课程组编写的课件。第 2–7 章依据 Silvaco TCAD 培训资料展开，第 8 章综合完成功率器件仿真。软件界面、流程图、结构图、仿真结果图和正式参考文献都直接进入课件。</p>
  <div class="plan-stats">
    <span><strong>8</strong> 章</span>
    <span><strong>8</strong> 个晚上</span>
    <span><strong>3 × 45</strong> 分钟 / 晚</span>
    <span><strong>32</strong> 总学时</span>
  </div>
</section>

<section class="plan-notice">
  <strong>学时口径</strong>
  <p>八次课堂为 <strong>8 × 3 × 45 分钟 = 24 学时</strong>。每次另配 45 分钟课后仿真任务与线上指导，共 <strong>8 学时</strong>，合计 32 学时。课件不设置补充阅读任务；其他资料只用于提炼课堂页面、示例、界面截图和仿真结果。</p>
</section>

## 八章总览

| 章 | 章节名称 | 内容依据 |
| --- | --- | --- |
| 第 1 章 | Silvaco 器件仿真软件功能介绍 | 课程组编写的第 1 章课件 |
| 第 2 章 | TCAD 基础 | TCAD 基础培训资料 |
| 第 3 章 | Silvaco TCAD 框架、交互式工具界面及基本操作；Silvaco TCAD 仿真流程及语法规则 | 交互工具、流程与语法培训资料 |
| 第 4 章 | Silvaco TCAD 工艺仿真模块及工艺仿真流程 | 工艺仿真模块与流程资料 |
| 第 5 章 | 工艺仿真离子注入、扩散、淀积和刻蚀；工艺仿真外延、抛光和光刻；工艺优化及工艺参数校准 | 工艺步骤、优化与校准资料 |
| 第 6 章 | 器件仿真模块、器件仿真流程 | 器件仿真模块与流程资料 |
| 第 7 章 | 器件仿真结构、材料参数和物理模型、特性获取及结果分析 | 结构、物理模型与结果分析资料 |
| 第 8 章 | 功率器件仿真 | 功率器件技术与综合案例资料 |

## 第 1 章：Silvaco 器件仿真软件功能介绍

**课件定位：** 使用课程组编写的第 1 章课件。

| 节次 | 45 分钟内容 | 课件页面重点 |
| --- | --- | --- |
| 第 1 节 | TCAD 的作用、Silvaco 软件组成、工艺/器件仿真分工 | Silvaco 框架图、应用领域图、仿真与实验关系图 |
| 第 2 节 | 工艺仿真、结构、网格、材料和器件分析的基本流程 | 工艺历史、器件结构、网格和仿真输入关系图 |
| 第 3 节 | PiN 和 SiC JBS 结果分析；2024 年 IGBT 流片的版图、封装、实测指标与 TCAD 校准任务 | 软件界面、结构图、I–V 曲线、电场分布、IGBT 版图、封装和实测指标表 |

**课件任务：** 把本章案例整理成“条件—图—指标—结论”四段式页面，并说明 IGBT 流片实测值要补充哪些测试条件后才能用于模型校准。

**课件依据：** 课程组《Silvaco 器件仿真软件功能介绍》课件。

## 第 2 章：TCAD 基础

| 节次 | 45 分钟内容 | 课件页面重点 |
| --- | --- | --- |
| 第 1 节 | TCAD 的概念、意义、数值计算、网格计算和基于物理的计算 | TCAD 概念图、网格与数值计算示意图 |
| 第 2 节 | Silvaco TCAD 框架；工艺仿真、器件仿真和示例概览 | 软件模块关系图、工艺/器件输入输出关系图 |
| 第 3 节 | 从器件问题形成仿真输入；用功率器件说明结构、参数和输出 | 器件结构示意、仿真流程图和基础结果图 |

**课件任务：** 用一页说明“实验测量—仿真模型—可验证输出”的关系。


## 第 3 章：Silvaco TCAD 框架、交互式工具界面及基本操作；Silvaco TCAD 仿真流程及语法规则

| 节次 | 45 分钟内容 | 课件页面重点 |
| --- | --- | --- |
| 第 1 节 | Silvaco TCAD 框架、主要交互工具和启动方式 | 工具关系图、启动界面截图 |
| 第 2 节 | DeckBuild 界面、菜单、进度控制、输入和实时输出；TonyPlot 的 Plot、Display、Cutline、Ruler、Integrate | DeckBuild 和 TonyPlot 界面截图、菜单与操作标注图 |
| 第 3 节 | 仿真流程、输入命令、运行、输出、结果分析；通用语法、参数规则、目录结构和文件类型 | 输入文件、运行状态、输出文件和 TonyPlot 结果的连续页面 |

**课件任务：** 用课件截图展示一个输入文件从 DeckBuild 运行到 TonyPlot 查看的完整过程。


## 第 4 章：Silvaco TCAD 工艺仿真模块及工艺仿真流程

| 节次 | 45 分钟内容 | 课件页面重点 |
| --- | --- | --- |
| 第 1 节 | ATHENA、SSuprem4、MC 注入、硅化物、精英淀积/刻蚀和光刻模块 | 模块关系图、模块功能表、软件界面 |
| 第 2 节 | 网格定义、初始化、网格释放、氧化、工艺步骤、结构操作和 TonyPlot | 网格定义界面、初始化命令、氧化结构图和厚度提取页面 |
| 第 3 节 | 工艺输入输出、提取特性和功率器件基础工艺流程 | 命令示例、结构文件、输出曲线和结果截图 |

**课件任务：** 整理一个功率器件的基础工艺流程，并标出每一步生成的中间结构。


## 第 5 章：关键工艺步骤、工艺优化及参数校准

| 节次 | 45 分钟内容 | 课件页面重点 |
| --- | --- | --- |
| 第 1 节 | 离子注入和扩散：命令、参数、分析模型、Monte Carlo、RTA 和 PLS | 注入界面、能量/剂量/角度参数页、掺杂分布和退火结果图 |
| 第 2 节 | 淀积、刻蚀、外延、抛光和光刻：ELITE、MC Depo/Etch、VICTORY、Optolith | 刻蚀/淀积界面、形貌对比图、光刻流程和显影结果图 |
| 第 3 节 | 工艺优化与参数校准：Optimizer、VWF、目标函数、参数范围和薄层氧化校准 | 优化设置界面、VWF 结果页、目标曲线和校准前后对比 |

**课件任务：** 选择一个功率器件工艺参数，制作一页参数敏感性对比图和校准结论页。


## 第 6 章：器件仿真模块、器件仿真流程

| 节次 | 45 分钟内容 | 课件页面重点 |
| --- | --- | --- |
| 第 1 节 | ATLAS 的器件仿真特性、物理模型、数值方法、模块和输入输出 | ATLAS 模块图、物理模型分类页、输入输出关系图 |
| 第 2 节 | 器件仿真流程：结构、材料参数、物理模型、数值计算、特性获取和分析 | 器件仿真流程图、二极管示例和状态输出截图 |
| 第 3 节 | ATLAS 二极管示例和功率器件仿真入口 | DeckBuild 输入、结构显示、I–V 结果和 TonyPlot 页面 |

**课件任务：** 用 ATLAS 流程分析一个功率二极管，确定结构、材料、模型、数值方法和输出指标。


## 第 7 章：器件仿真结构、材料参数和物理模型、特性获取及结果分析

| 节次 | 45 分钟内容 | 课件页面重点 |
| --- | --- | --- |
| 第 1 节 | ATLAS 的 MESH、REGION、ELECTRODE、DOPING；DevEdit 结构生成与 3D 编辑 | 结构定义界面、网格加密示例、ATLAS 与 DevEdit 对比页 |
| 第 2 节 | 材料参数、C 解释器、ATLAS 材料系统、物理模型、推荐模型、界面态和电极接触 | 材料参数表、C 解释器示例、模型选择页、接触结构图 |
| 第 3 节 | DC、交流小信号、瞬态、Curvetrace、热学、三维特性；结构/日志导出和结果分析 | I–V、C–V、瞬态、热学、击穿曲线和结果分析页面 |

**课件任务：** 选择一种功率器件，给出“结构—材料—模型—接触—输出指标”的完整参数表。


## 第 8 章：功率器件仿真

| 节次 | 45 分钟内容 | 课件页面重点 |
| --- | --- | --- |
| 第 1 节 | 功率器件仿真问题设计：PiN、SiC JBS、功率二极管、MOSFET、IGBT | 器件结构、材料、电极、掺杂和网格方案 |
| 第 2 节 | 从工艺到结构，再到模型和特性：以 SiC JBS 和 PiN 为例 | 工艺结构图、网格、掺杂、电场、电势、电流密度和 I–V 曲线 |
| 第 3 节 | 功率器件结果分析：击穿电压、漏电流、导通电阻、温度效应和结论表达 | 多偏压结果对比、指标表和“图—数据—结论”示例页 |

**课件任务：** 完成一个功率器件仿真案例的页面组：问题、结构、网格、模型、结果和结论。


## 课件素材规则

每章 PPT 按以下顺序组织：

1. **问题页：** 本章要解决的器件建模或工艺问题。
2. **界面页：** 软件界面、模块入口或命令编辑界面。
3. **输入页：** 结构、网格、材料、模型、参数和命令示例。
4. **结果页：** 仿真结构、分布图、曲线和软件输出截图。
5. **解释页：** 坐标、图例、条件、物理量、误差和结论。
6. **参考文献页：** 使用作者、标题、文献类型、出版者和年份齐全的正式条目。

不设置补充阅读页。同类技术资料只保留一次课件引用，不在页面中显示本地文件路径或内部编号。

## 课程范围

课件围绕功率器件的工艺、结构、材料、模型和电热特性展开，所有案例都要求包含明确的仿真条件、结果证据和适用范围。

## 主要参考文献

1. SILVACO INTERNATIONAL. <em>TCAD Training Materials</em>[Z]. Santa Clara, CA: Silvaco International, n.d.
2. SILVACO INTERNATIONAL. <em>Guide to Using TCAD with Examples</em>[Z]. Santa Clara, CA: Silvaco International, 2009.
3. SILVACO INTERNATIONAL. <em>ATHENA User's Manual</em>[Z]. Santa Clara, CA: Silvaco International, n.d.
4. SILVACO INTERNATIONAL. <em>ATLAS User's Manual</em>[Z]. Santa Clara, CA: Silvaco International, n.d.
5. SILVACO INTERNATIONAL. <em>TCAD Workshop Using Silvaco TCAD Tools: Volumes I-III</em>[Z]. Santa Clara, CA: Silvaco International, n.d.
6. SILVACO INTERNATIONAL. <em>Power Device Physics Revealed: TCAD for Power Device Technologies</em>[Z]. Silvaco International, 2010.
7. PESIC I. <em>Integrated Simulation Solution for Advanced Power Devices</em>[Z]. Silvaco International, 2011.
8. COURSE TEAM. <em>Silvaco Device Simulation Software: Function Overview</em>[Z]. Course materials, 2026.

## 考核安排

| 项目 | 比例 | 计划内容 |
| --- | ---: | --- |
| 平时成绩 | 40% | 出勤与课堂参与 10%，第 1–7 章阶段任务 30% |
| 期末 PPT | 30% | 10–12 分钟讲解一个功率器件建模与仿真问题 |
| 期末报告 | 30% | 提交结构、命令、模型、结果、误差和结论完整的报告 |

第 8 章完成综合案例和期末汇报准备。正式个人汇报按选课人数另行安排考核场次。
