import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarZh: NavbarConfig = [
  {
    text: "团队",
    link: "/notes/team/",
  },
  {
    text: "组员",
    children: [
      {
        text: "吴小宝",
        children: [
          "/notes/wu/ddd.md",
          "/notes/wu/uml.md",
          "/notes/wu/clean-architecture.md",
        ],
      },
      {
        text: "范轶洁",
        children: [
          "/notes/fan/ddd.md",
          "/notes/fan/uml.md",
          "/notes/fan/clean-architecture.md",
        ],
      },
    ],
  },
];
