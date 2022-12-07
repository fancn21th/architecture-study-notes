import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { navbarZh as navbar, sidebarZh as sidebar } from "./configs/index.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "织巢队",
  description: "织巢队",
  theme: defaultTheme({
    logo: "/images/logo-light.png",
    logoDark: "/images/logo-dark.png",
    locales: {
      "/": {
        // navbar
        navbar,
        // sidebar
        sidebar,
        // page meta
        editLinkText: "Edit this page on GitHub",
      },
    },
  }),
});
