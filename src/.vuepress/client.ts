import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";
export default defineClientConfig({
    layouts: {
        Blog, // 覆盖默认的 Blog 布局
    }
});
