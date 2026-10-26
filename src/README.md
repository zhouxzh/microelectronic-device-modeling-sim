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
  <img class="course-hero__image" :src="$withBase('/images/hero-optoelectronic-simulation.png')" alt="光电器件仿真中的光生载流子产生率分布">
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
  <span class="course-hero__source">课程组整理：光电器件仿真结果</span>
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

<section class="course-chapter">
  <div class="course-chapter__inner">
    <div>
      <p class="course-eyebrow">Chapter 01</p>
      <h2>Silvaco 器件仿真软件功能介绍</h2>
      <p>从 TCAD 在半导体开发中的位置出发，依次理解工艺仿真、器件结构、光学模型和 SiC JBS 结果分析。</p>
      <ul class="course-chapter__list">
        <li>TCAD 与实验、SPICE 模型之间的关系</li>
        <li>结构、网格、材料和工艺历史如何形成仿真输入</li>
        <li>光学模型与多物理场仿真的选择原则</li>
        <li>SiC JBS 的电场、电势、电流密度和击穿曲线</li>
      </ul>
      <div class="course-actions">
        <a class="primary" href="/microelectronic-device-modeling-sim/presentation/01-silvaco-introduction.html">打开第 1 章课件</a>
      </div>
    </div>
    <figure class="course-chapter__figure">
      <img :src="$withBase('/images/chapter-sic-jbs.png')" alt="不同保护环数量下 SiC JBS 的反向电流电压仿真曲线">
      <figcaption>课程案例：SiC JBS 保护环与击穿电压仿真</figcaption>
    </figure>
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
    <a href="/microelectronic-device-modeling-sim/presentation/">
      <strong>教学演示</strong>
      <span>课堂 PPT、软件功能介绍和仿真案例</span>
      <i>打开目录</i>
    </a>
    <a href="/microelectronic-device-modeling-sim/presentation/01-silvaco-introduction.html">
      <strong>第 1 章</strong>
      <span>Silvaco 器件仿真软件功能介绍</span>
      <i>开始学习</i>
    </a>
    <a href="https://github.com/zhouxzh/microelectronic-device-modeling-sim">
      <strong>课程仓库</strong>
      <span>课件源文件、课程配置与更新记录</span>
      <i>查看仓库</i>
    </a>
  </div>
</section>
