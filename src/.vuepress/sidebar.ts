import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/presentation/": [
    {
      text: "教学演示",
      icon: "presentation",
      collapsible: false,
      children: [
        {
          text: "课件目录",
          link: "/presentation/",
        },
        {
          text: "第1章：Silvaco器件仿真软件功能介绍",
          link: "/presentation/01-silvaco-introduction.html",
        },
        {
          text: "第2章：TCAD基础",
          link: "/presentation/02-tcad-basics.html",
        },
        {
          text: "第3章：框架、交互工具与语法规则",
          link: "/presentation/03-workflow-and-syntax.html",
        },
        {
          text: "第4章：工艺仿真模块与流程",
          link: "/presentation/04-process-simulation.html",
        },
        {
          text: "第5章：关键工艺步骤与参数校准",
          link: "/presentation/05-process-steps-and-calibration.html",
        },
        {
          text: "第6章：器件仿真模块与流程",
          link: "/presentation/06-device-simulation.html",
        },
        {
          text: "第7章：器件结构、模型与结果分析",
          link: "/presentation/07-device-structure-models-results.html",
        },
        {
          text: "第8章：功率器件仿真",
          link: "/presentation/08-power-device-simulation.html",
        },
      ],
    },
  ],
});
