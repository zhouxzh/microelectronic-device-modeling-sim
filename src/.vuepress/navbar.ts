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
    text: "教学计划",
    link: "/plan/",
    icon: "calendar",
    activeMatch: "^/plan/",
  },
  {
    text: "考核说明",
    link: "/#assessment",
  },
  {
    text: "课程章节",
    link: "/#chapters",
    icon: "presentation",
  },
  {
    text: "课程资料",
    link: "/#resources",
  },
]);
