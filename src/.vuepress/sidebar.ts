import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "课程资料",
      icon: "book",
      collapsible: false,
      children: [""],
    },
  ],
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
          text: "课程导论",
          link: "/presentation/01-course-introduction.html",
        },
      ],
    },
  ],
});
