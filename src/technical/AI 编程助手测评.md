---
# 🏷️ 基础信息
title: "AI 编程助手测评"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "AI 编程助手测评：GitHub Copilot vs 豆包 MarsCode" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2025-03-15              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["技术分享"]         # 支持字符串或数组
tag: ["AI"]      # 多个标签用数组表示

# 📜 版权信息
license: ""    # 协议类型（默认使用主题配置）
copyright: "未经许可禁止转载"  # 自定义版权文字（设为false可隐藏）

# 🔍 功能开关
pageview: false                # 是否显示浏览量（需要Waline配置）
article: true                 # 是否加入文章列表（默认true）
timeline: true                # 是否显示在时间线（默认true）

# ⭐ 内容推荐
sticky:                     # 置顶优先级（数字越大越靠前，false关闭）
star:                        # 星标优先级（数字越大越靠前）

# 🖼️ 封面图设置
cover: "https://cdn.beekka.com/blogimg/asset/202406/bg2024063029.webp"  # 文章卡片封面图（建议尺寸：1200×600）

---
AI 编程助手测评：GitHub Copilot vs 豆包 MarsCode
<!-- more -->
## 一、引言

AI 怎么用于编程？

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063029.webp)

目前有各种尝试，最激进的大概是 Vercel 公司的 [v0.dev](https://v0.dev/)。

你告诉它，想要什么网站，它就给你几张设计图。你选一张，它就生成写好的网页。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063001.webp)

这很有未来感，想要什么程序，机器帮你写。但是实际上，它只能生成网页 UI（用户界面），无法生成互动脚本，并且其他的 UI（比如手机 App 页面），它都无法生成。

这反映了 AI 的局限，**至少现阶段，AI 无法取代程序员，只能充当编程助手。**

根据我的使用体会，作为编程助手，AI 的作用非常大，能够大大节约程序员的时间，显著提高编程效率和代码质量。

今天，我就来测评两款 AI 编程助手，看看孰强孰弱，顺便也作为一个入门教程，向还没用过的同学，展示它们的用法。

大家看了以后，就能明白，为什么编程已经离不开 AI 了，它真的能让程序员如虎添翼。

## 二、GitHub Copilot 和豆包 MarsCode 简介

我要测评（或者说介绍）的两款 AI 编程助手，分别是 [GitHub Copilot](https://github.com/features/copilot) 和[豆包 MarsCode](https://sourl.cn/vKScJx)。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063002.webp)

[GitHub Copilot](https://github.com/features/copilot) 是最早出现的 AI 编程助手，也是市场占有率和知名度最高的一个。

它是微软出品，底层是 OpenAI，又依托着世界最大的程序员社区，自然是实力非凡。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063007.webp)

[豆包 MarsCode](https://sourl.cn/vKScJx) 是基于豆包大模型打造的智能开发工具。

它的背后是字节跳动，本来是内部工具，据说字节超过70%的工程师都在用，每月贡献百万行量级的代码。

6月26日，它正式在北京对外发布，外界可以免费使用，属于新鲜出炉。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063008.webp)

它们都来自大厂，有足够的代表性，而且功能相近，下面就来看看，国产 AI 能否替代国外主流产品。

## 三、使用环境

AI 编程助手一般不单独使用，而是作为 IDE（集成开发环境）的插件，在编辑器界面提供各种 AI 功能。

我选择的 IDE 是目前最流行的 VS Code。此外，豆包 MarsCode 还支持 Jetbrains IDE，Copilot 则支持更多。

大家在 VS Code 插件市场搜索 Copilot 和 MarsCode，就能找到它们。下面是安装后的页面。（上图为 Copilot，下图为豆包 MarsCode，后面都是这个顺序。）

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063009.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063010.webp)

如果你没有 VS Code，甚至也没有其他 IDE，问题也不大。豆包 MarsCode 提供[免费的云 IDE](https://www.marscode.cn/dashboard)（下图），无需下载和安装，直接在浏览器使用，并且内置数十款开发模板，还可以拉取 GitHub 仓库，用起来很方便。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070220.webp)

GitHub 也有云 IDE，就是它的 CodeSpace，里面也能用 Copilot。不过，每月使用60小时之后，就要收费，这里就不推荐了。

## 四、聊天功能

AI 编程助手的主要用户界面，就是一个聊天窗口，用户向它提出各种问题。

我首先问了一个问题"什么是 CAP 定理？"，测一下它们的聊天功能。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063011.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063012.webp)

可以看到，它们的回答都是准确的、可用的，Copilot 的格式编排稍微好一点。

第二个问题"请推荐学习 JavaScript 的书籍"，两者的回答差不多。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070101.webp)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070102.webp)

聊天的问题不限于编程，什么样的问题都可以问，比如"2025年春节是什么时候"，它们的回答也没问题。

不过，这个功能的日常使用场景，应该是查找软件文档，真的好用。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070103.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063013.webp)

## 五、代码生成

接下来，就来测 AI 编程助手的最主要功能：自动代码生成，让它来写代码。

使用很简单，**只要有按键输入，它就会自动建议后面的代码是什么**。

你可以将其当作参考，也可以按下 Tab 键，接受它为正式代码。如果想逐个单词确认，按下 Ctrl + 右箭头（Mac 为 Cmd + 右箭头）。

我让 AI 生成一个检验电话号码的函数。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063014.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063015.webp)

上面的代码，除了第一行"// 验证电话号码"是我输入的，后面都是 AI 生成的。

这段代码完全正确，并且还有两个地方令人很满意。（1）因为文件的后缀名是 JS，所以它们自动生成的是 JavaScript 代码；（2）它们验证的是中国的手机号码，而我并没有明确给出这一点，它们是自己推断的。

有点奇怪的是，Copilot 和豆包 MarsCode 给出的代码是一样的。莫非它们使用同样的材料训练？

我又加了一个条件，要求包括手机和座机两种情况。它们给出的代码还是（基本）一样。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063016.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063017.webp)

这个环节，它们打平。另外，如果对给出的实现不满意，Copilot 可以按下 Ctrl + Enter，会有多种实现供选择（下图）。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070221.webp)

豆包 MarsCode 则是在代码建议时，有一个浮动工具栏，可以切换多种实现（下图的箭头）。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070222.webp)

值得一提的是，**豆包 MarsCode 还有一个特色功能"代码补全 Pro"**，不需要手动给出提示，根据现有代码，自动预测下一个改动点，并给出推荐代码。

这个功能需要自己在设置里面打开（下图）。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070301.webp)

打开以后，它就会加强代码预测。首先，在期望触发代码推荐的地方，按下 Ctrl + Shift + Enter 主动触发推荐，然后你按下 Tab 采纳。

这时，它会预测下一个改动点，点击 Tab 就可以跳转到那里。这在代码修改的场景中非常有用，修改了一个地方，它帮你跳到下一个（预测的）改动点，并给出推荐代码。普通的代码补全做不到这一点。

## 六、生成注释，代码解释

除了生成代码，AI 的另一个重要作用，就是生成编程文档，也就是代码的文字说明。

文档功能主要有两种：注释和代码解释。首先，Copilot 的注释需要自己手动生成。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063018.webp)

豆包 MarsCode 则在代码上方有生成注释的快捷按钮。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063021.webp)

点击后会唤起`/doc`命令，用起来相对方便一点。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063019.webp)

至于代码解释功能，我觉得相比之下，豆包 MarsCode 更好一些，Copilot 太冗长了，有点不易读。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063022.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063023.webp)

## 七、其他功能

**（1）代码翻译**

它们都能够将一种语言的代码，翻译成另一种语言。

我试了 JS 代码翻译成 Python，没有任何问题。豆包 MarsCode 还会自动将翻译后的代码，保存成当前目录下的一个单独文件。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063025.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063024.webp)

**（2）生成单测**

单元测试写起来很麻烦，AI 能够自动生成，真是省事不少。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063026.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063027.webp)

同一段代码，Copilot 生成了4个测试用例，豆包 MarsCode 生成了5个。

并且，豆包 MarsCode 对测试用例有文字总结（下图），这很有用，可惜 Copilot 没有。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024063028.webp)

我认为，在这个环节，豆包 MarsCode 做得比较好。

**（3）修正错误**

AI 还可以自动修改报错的代码。如果测试用例或者自动构建没有通过，它会解释报错的原因，并给出修改建议。这里就不举例了。

## 八、总结

经过上面的一系列测试，两者的表现总体相差不大。我认为，**国产 AI 编程助手完全可以替代 GitHub Copilot**，而且在某些细节上做得更好。

GitHub Copilot 的优势在于[功能较多](https://github.blog/2024-01-22-10-unexpected-ways-to-use-github-copilot/)（比如调用终端命令），而且它的训练材料可能比较多，在一些小众语言上也许表现更好一点。

但是，它是收费的，每月10美元，而 **豆包 MarsCode 是免费的**，单单这一点就值得推荐后者。

目前，[豆包 MarsCode](https://sourl.cn/vKScJx) 只是一个初期的版本，后面会不断增加功能。但是，对于大多数程序员，现有功能已经完全够用了。

另外，我在使用中明显感到，豆包 MarsCode 的响应速度更快，毕竟服务器是在国内。相比 Copilot 的境外服务器，这也是一个优势。

总之，[豆包 MarsCode](https://sourl.cn/vKScJx) 值得大家试用，体验一下国产 AI 的进步。如果你从来没接触过 AI 编程助手，就更不应该错过这种提高效率的编程神器了。