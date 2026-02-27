import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
export default defineUserConfig({

  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  base: "/",
  lang: "zh-CN",
  title: "GM",
  description: "",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
