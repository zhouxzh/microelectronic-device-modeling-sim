import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    link: "/",
    icon: "home",
    activeMatch: "^/$",
  },
  {
    text: "课程主线",
    link: "/#course-path",
  },
  {
    text: "考核说明",
    link: "/#assessment",
  },
  {
    text: "教学演示",
    link: "/presentation/",
    icon: "presentation",
    activeMatch: "^/presentation/",
  },
  {
    text: "课程资料",
    link: "/#resources",
  },
]);
