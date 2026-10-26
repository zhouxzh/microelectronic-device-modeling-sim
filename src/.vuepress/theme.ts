import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://zhouxzh.github.io",
  author: {
    name: "周贤中",
    email: "zhouxzh@gdut.edu.cn",
    url: "https://github.com/zhouxzh",
  },
  repo: "zhouxzh/microelectronic-device-modeling-sim",
  docsDir: "src",
  navbar,
  sidebar,
  footer: "微电子器件建模与仿真",
  displayFooter: true,
  lastUpdated: false,
  contributors: false,
  editLink: false,
  navbarSocialInclude: ["github"],
  plugins: {
    git: {
      createdTime: false,
      updatedTime: false,
      contributors: false,
      changelog: false,
    },
  },
  markdown: {
    attrs: true,
    codeTabs: true,
    tasklist: true,
    mark: true,
    sub: true,
    sup: true,
  },
});
