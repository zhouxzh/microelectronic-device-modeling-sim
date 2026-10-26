import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://zhouxzh.github.io",
  author: {
    name: "广东工业大学",
    url: "https://www.gdut.edu.cn/",
  },
  repo: "zhouxzh/microelectronic-device-modeling-sim",
  docsDir: "src",
  navbar,
  sidebar,
  footer: "广东工业大学 · 微电子器件建模与仿真",
  displayFooter: true,
  markdown: {
    attrs: true,
    codeTabs: true,
    tasklist: true,
    mark: true,
    sub: true,
    sup: true,
  },
});
