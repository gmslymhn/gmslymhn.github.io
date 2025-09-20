import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";
// import PdfPreview from "./PdfPreview/index.vue";
// 只在客户端导入和注册组件
let PdfPreview: any = null
export default defineClientConfig({
    layouts: {
        Blog, // 覆盖默认的 Blog 布局
    },
    enhance({ app }) {
        // 只在客户端环境下注册组件
        if (typeof window !== 'undefined') {
            import('./PdfPreview/index.vue').then((module) => {
                PdfPreview = module.default
                app.component('PdfPreview', PdfPreview)
            })
        }
    },
});
