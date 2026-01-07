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

            // 设置全局图片 referrerpolicy
            setupImageReferrerPolicy();
        }
    },
});

function setupImageReferrerPolicy() {
    // 处理图片的函数
    function processImages() {
        document.querySelectorAll('img:not([referrerpolicy])').forEach(img => {
            img.setAttribute('referrerpolicy', 'no-referrer');
        });
    }

    // 初始处理
    processImages();

    // 监听 DOM 变化
    const observer = new MutationObserver(() => {
        processImages();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 路由变化后处理
    if (window.__VUEPRESS_ROUTER__) {
        window.__VUEPRESS_ROUTER__.afterEach(() => {
            setTimeout(processImages, 100);
        });
    }

    // 定时检查（备用方案）
    setInterval(processImages, 2000);

    return observer;
}
