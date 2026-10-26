import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "课程介绍",
    link: "/",
    icon: "book",
    activeMatch: "^/$",
  },
  {
    text: "教学演示",
    link: "/presentation/",
    icon: "presentation",
    activeMatch: "^/presentation/",
  },
]);
