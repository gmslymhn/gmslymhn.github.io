import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "技术分享",        // 显示文本
    link: "/category/技术分享/",          // 链接路径
    icon: "laptop-code",       // 图标（可选）
  },
  {
    text: "资料分享",        // 显示文本
    link: "/category/资料分享/",          // 链接路径
    icon: "bars",       // 图标（可选）
  },
  {
    text: "标签",        // 显示文本
    link: "/tag/音乐分享/",          // 链接路径
    icon: "code-branch",       // 图标（可选）
  },
  "/link/",
]);
