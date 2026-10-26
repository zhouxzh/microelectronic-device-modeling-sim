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
      ],
    },
  ],
});
