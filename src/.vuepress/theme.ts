  import { hopeTheme } from "vuepress-theme-hope";

  import navbar from "./navbar.js";

  export default hopeTheme({
    hostname: "https://mister-hope.github.io",

    favicon:"/logo.png",
    author: {
      name: "GM",
      url: "https://gmslymhn.github.io",
      email: "gmslymhn@163.com"
    },

    docsDir: "src",
    // 导航栏
    navbar,
    // logo:false,
    repo:"https://github.com/gmslymhn/gmslymhn.github.io",
    // 侧边栏
    sidebar:false,
    navbarAutoHide:"none",
    // 页脚
    footer: "版权所有:不需要   | &nbsp;&nbsp;&nbsp;  备案号:备案？不可能滴   |",
    displayFooter: true,

    // 博客相关
    blog: {
      name:"GM",
      avatar:"https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/1060da23f3b113b2b5b463a79362a585073ab63910848e4cde3592cebca6e86ec9606c33bc453f781041bee899c21f71?pictype=scale&from=30013&version=3.3.3.3&fname=tx.jpg&size=750",
      description: "每一段旅行都有终点",
      intro: "https://github.com/gmslymhn",
      timeline:"我来到，我看见，我记录",
      // autoExcerpt: true
    },

    // 加密配置
    encrypt: {
      admin:"666666",
      config: {
        "/encrypt":"666666",
      },
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdown: {
      // align: true,//启用文本对齐功能（如::: center等语法）
      // attrs: true,//允许为Markdown元素添加自定义属性
      // codeTabs: true,//支持代码选项卡/分组功能
      // component: true,//允许在Markdown中使用Vue组件
      // demo: true,//支持演示代码块功能
      figure: true,//支持带标题的图片（figure标签）
      // gfm: true,//启用GitHub风格的Markdown
      imgLazyload: true,//图片懒加载
      imgSize: true,//允许指定图片尺寸
      // include: true,//支持包含外部文件
      // mark: true,//支持==高亮==语法
      // plantuml: true,//支持PlantUML图表
      // spoiler: true,//支持隐藏内容（剧透效果）
      // stylize: [//自定义样式转换（示例中将<em>Recommended</em>转换为带"tip"样式的徽章）
      //   {
      //     matcher: "Recommended",
      //     replacer: ({ tag }) => {
      //       if (tag === "em")
      //         return {
      //           tag: "Badge",
      //           attrs: { type: "tip" },
      //           content: "Recommended",
      //         };
      //     },
      //   },
      // ],
      // sub: true,//支持下标语法
      // sup: true,//支持上标语法
      // tabs: true,//支持选项卡式内容分组
      // tasklist: true,// 支持任务列表（- [x]等）
      // vPre: true,//保留Vue模板语法不进行编译
    },

    // 在这里配置主题提供的插件
    plugins: {
      blog: true,

      components: {
        components: [
            // "VidStack",
            // "VPCard"
        ],
      },
      icon: {
        prefix: "fa6-solid:",
      },
    },
  });
