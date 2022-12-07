import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarZh: SidebarConfig = {
  "/notes/": [
    {
      text: "团队",
      children: [
        "/notes/team/README.md",
        "/notes/team/ddd.md",
        "/notes/team/uml.md",
        "/notes/team/clean-architecture.md",
      ],
    },
  ],
  "/notes/fan/": [
    {
      text: "吴小宝",
      children: [
        "/notes/wu/README.md",
        "/notes/wu/ddd.md",
        "/notes/wu/uml.md",
        "/notes/wu/clean-architecture.md",
      ],
    },
    {
      text: "范轶洁",
      children: [
        "/notes/fan/README.md",
        "/notes/fan/ddd.md",
        "/notes/fan/uml.md",
        "/notes/fan/clean-architecture.md",
      ],
    },
  ],
};
