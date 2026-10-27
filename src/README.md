---
title: 微电子器件建模与仿真
description: 研究生选修课“微电子器件建模与仿真”课程主页
containerClass: course-home
sidebar: false
pageInfo: false
toc: false
---

# 微电子器件建模与仿真

<section class="course-hero">
  <img class="course-hero__image" :src="$withBase('/images/chapter-sic-jbs.png')" alt="SiC JBS 保护环结构的反向电流电压仿真结果">
  <div class="course-hero__inner">
    <p class="course-kicker">研究生选修课</p>
    <h1>微电子器件<br><span>建模与仿真</span></h1>
    <p class="course-hero__lead">从器件物理出发，建立可计算的模型，用仿真解释工艺、结构与电学响应之间的关系，并把结果组织成可复核的技术报告。</p>
    <div class="course-facts">
      <span>32 学时</span>
      <span>40% 平时成绩</span>
      <span>60% PPT 与报告</span>
      <span>无笔试</span>
    </div>
    <div class="course-actions">
      <a class="primary" href="/microelectronic-device-modeling-sim/presentation/01-silvaco-introduction.html">开始第 1 章</a>
      <a class="secondary" href="/microelectronic-device-modeling-sim/plan/">查看教学计划</a>
    </div>
  </div>
  <span class="course-hero__source">课程组整理：SiC JBS 功率器件仿真结果</span>
</section>

<div class="course-band">
  <div class="course-band__inner">
    <div class="course-stat">
      <strong>32</strong>
      <span>总学时，围绕模型、求解与结果分析展开</span>
    </div>
    <div class="course-stat">
      <strong>40%</strong>
      <span>平时成绩，关注课堂参与与阶段任务</span>
    </div>
    <div class="course-stat">
      <strong>60%</strong>
      <span>PPT 讲解与配套报告，不安排笔试</span>
    </div>
  </div>
</div>

<section id="course-path" class="course-section">
  <p class="course-eyebrow">Course Path</p>
  <h2>每一个仿真结论，都从清楚的问题和假设开始</h2>
  <p class="course-section__intro">课程沿着“物理问题、模型建立、数值求解、证据表达”推进，重点不是记住软件按钮，而是能够说明结果为什么可信。</p>

  <div class="course-path">
    <article>
      <b>01 · PHYSICS</b>
      <h3>器件物理</h3>
      <p>识别结构、材料、掺杂和偏压条件，明确需要解释的物理现象。</p>
    </article>
    <article>
      <b>02 · MODEL</b>
      <h3>模型假设</h3>
      <p>把器件问题转化为可计算的方程、参数、边界条件和适用条件。</p>
    </article>
    <article>
      <b>03 · SOLVE</b>
      <h3>数值求解</h3>
      <p>理解网格、离散方法、收敛设置和计算成本对结果的影响。</p>
    </article>
    <article>
      <b>04 · EVIDENCE</b>
      <h3>结果验证</h3>
      <p>用曲线、分布图、实验对照和误差分析支撑技术结论。</p>
    </article>
  </div>
</section>

<section id="chapters" class="course-section course-chapters">
  <div class="course-chapters__head">
    <div>
      <p class="course-eyebrow">Courseware</p>
      <h2>八章课件，从软件概览到功率器件综合</h2>
    </div>
    <p class="course-section__intro">每章按三个 45 分钟教学节组织，包含理论讲解、软件界面、仿真结果、课堂检查点和正式参考文献。</p>
  </div>

  <div class="chapter-grid">
    <article class="chapter-card">
      <div class="chapter-card__meta">
        <img :src="$withBase('/presentation/assets/icons/circuit-board.svg')" alt="" aria-hidden="true">
        <span>Chapter 01</span>
        <span>41 页</span>
      </div>
      <h3>Silvaco 器件仿真软件功能介绍</h3>
      <p>从 TCAD 基础走到实际流片，包含 SiC JBS 仿真与 2024 年 1200 V / 50 A IGBT 版图、封装和实测结果。</p>
      <a href="/microelectronic-device-modeling-sim/presentation/01-silvaco-introduction.html">打开第 1 章课件 <span aria-hidden="true">→</span></a>
    </article>
    <article class="chapter-card">
      <div class="chapter-card__meta">
        <img :src="$withBase('/presentation/assets/icons/atom.svg')" alt="" aria-hidden="true">
        <span>Chapter 02</span>
        <span>69 页</span>
      </div>
      <h3>TCAD 基础</h3>
      <p>建立器件问题、数值离散、网格、物理模型与结果可信性之间的完整理论基础。</p>
      <a href="/microelectronic-device-modeling-sim/presentation/02-tcad-basics.html">打开第 2 章课件 <span aria-hidden="true">→</span></a>
    </article>
    <article class="chapter-card">
      <div class="chapter-card__meta">
        <img :src="$withBase('/presentation/assets/icons/monitor.svg')" alt="" aria-hidden="true">
        <span>Chapter 03</span>
        <span>69 页</span>
      </div>
      <h3>TCAD 框架、交互工具与语法规则</h3>
      <p>理解 DeckBuild、TonyPlot、运行流程、命令语义、文件类型和可追溯仿真记录。</p>
      <a href="/microelectronic-device-modeling-sim/presentation/03-workflow-and-syntax.html">打开第 3 章课件 <span aria-hidden="true">→</span></a>
    </article>
    <article class="chapter-card">
      <div class="chapter-card__meta">
        <img :src="$withBase('/presentation/assets/icons/layers-3.svg')" alt="" aria-hidden="true">
        <span>Chapter 04</span>
        <span>72 页</span>
      </div>
      <h3>工艺仿真模块与流程</h3>
      <p>从 ATHENA 模块、网格和初始化走向氧化、结构提取与功率器件工艺链设计。</p>
      <a href="/microelectronic-device-modeling-sim/presentation/04-process-simulation.html">打开第 4 章课件 <span aria-hidden="true">→</span></a>
    </article>
    <article class="chapter-card">
      <div class="chapter-card__meta">
        <img :src="$withBase('/presentation/assets/icons/settings-2.svg')" alt="" aria-hidden="true">
        <span>Chapter 05</span>
        <span>72 页</span>
      </div>
      <h3>关键工艺步骤与参数校准</h3>
      <p>系统讲解注入、扩散、薄膜、刻蚀、外延、光刻、优化实验与参数校准。</p>
      <a href="/microelectronic-device-modeling-sim/presentation/05-process-steps-and-calibration.html">打开第 5 章课件 <span aria-hidden="true">→</span></a>
    </article>
    <article class="chapter-card">
      <div class="chapter-card__meta">
        <img :src="$withBase('/presentation/assets/icons/cpu.svg')" alt="" aria-hidden="true">
        <span>Chapter 06</span>
        <span>69 页</span>
      </div>
      <h3>器件仿真模块与流程</h3>
      <p>建立 ATLAS 器件仿真的结构、材料、模型、数值求解、特性提取和结果证据链。</p>
      <a href="/microelectronic-device-modeling-sim/presentation/06-device-simulation.html">打开第 6 章课件 <span aria-hidden="true">→</span></a>
    </article>
    <article class="chapter-card">
      <div class="chapter-card__meta">
        <img :src="$withBase('/presentation/assets/icons/sliders-horizontal.svg')" alt="" aria-hidden="true">
        <span>Chapter 07</span>
        <span>69 页</span>
      </div>
      <h3>器件结构、物理模型与结果分析</h3>
      <p>深入结构编辑、材料参数、物理模型、DC/AC、瞬态、热学与结果解释。</p>
      <a href="/microelectronic-device-modeling-sim/presentation/07-device-structure-models-results.html">打开第 7 章课件 <span aria-hidden="true">→</span></a>
    </article>
    <article class="chapter-card">
      <div class="chapter-card__meta">
        <img :src="$withBase('/presentation/assets/icons/zap.svg')" alt="" aria-hidden="true">
        <span>Chapter 08</span>
        <span>69 页</span>
      </div>
      <h3>功率器件仿真</h3>
      <p>围绕 PiN、SiC JBS、肖特基二极管、MOSFET、IGBT 和保护环建立综合案例。</p>
      <a href="/microelectronic-device-modeling-sim/presentation/08-power-device-simulation.html">打开第 8 章课件 <span aria-hidden="true">→</span></a>
    </article>
  </div>
</section>

<section id="assessment" class="course-section course-assessment">
  <div class="course-assessment__grid">
    <div>
      <p class="course-eyebrow">Assessment</p>
      <h2>考核关注你能否解释一次完整的仿真</h2>
      <p class="course-section__intro">考试不安排笔试。每位学生完成一次 PPT 讲解并提交配套报告，用一条完整证据链说明问题、方法、结果和局限。</p>
    </div>
    <ol class="assessment-list">
      <li>
        <strong>40%</strong>
        <div>
          <h3>平时成绩</h3>
          <p>课堂参与、阶段任务和学习过程。重点是持续完成建模与结果分析练习。</p>
        </div>
      </li>
      <li>
        <strong>60%</strong>
        <div>
          <h3>PPT 与报告</h3>
          <p>报告应包含问题背景、模型假设、仿真设置、结果分析、误差来源和结论边界。</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section id="resources" class="course-section course-resources">
  <p class="course-eyebrow">Resources</p>
  <h2>课程资料</h2>
  <div class="course-resource-list">
    <a href="/microelectronic-device-modeling-sim/plan/">
      <strong>教学计划</strong>
      <span>八章安排、每次三节、考核节点与阶段任务</span>
      <i>查看计划</i>
    </a>
    <a href="/microelectronic-device-modeling-sim/#chapters">
      <strong>课程章节</strong>
      <span>八章课件简介与直接入口</span>
      <i>选择章节</i>
    </a>
    <a href="https://github.com/zhouxzh/microelectronic-device-modeling-sim">
      <strong>课程仓库</strong>
      <span>课件源文件、课程配置与更新记录</span>
      <i>查看仓库</i>
    </a>
  </div>
</section>
