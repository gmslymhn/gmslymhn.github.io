import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";

export default defineClientConfig({
    layouts: {
        Blog,
    },

    enhance({ app }) {
        if (typeof window !== 'undefined') {
            // 动态导入组件
            import('./PdfPreview/index.vue').then((module) => {
                app.component('PdfPreview', module.default);
            });

        }
    },
});

