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
      {
        text: "刘新",
        children: [
          "/notes/liu/ddd.md",
          "/notes/liu/uml.md",
          "/notes/liu/clean-architecture.md",
        ],
      },
      {
        text: "石熠",
        children: [
          "/notes/shi/ddd.md",
          "/notes/shi/uml.md",
          "/notes/shi/clean-architecture.md",
        ],
      },
      {
        text: "王增辉",
        children: [
          "/notes/wang/ddd.md",
          "/notes/wang/uml.md",
          "/notes/wang/clean-architecture.md",
        ],
      },
      {
        text: "赵园旭",
        children: [
          "/notes/zhao/ddd.md",
          "/notes/zhao/uml.md",
          "/notes/zhao/clean-architecture.md",
        ],
      },
    ],
  },
];
