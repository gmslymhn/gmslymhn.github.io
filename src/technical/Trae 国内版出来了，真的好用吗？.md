---
# 🏷️ 基础信息
title: "Trae 国内版出来了，真的好用吗？"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "AI 工具已经这么多了，该不该造新的轮子？" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2025-02-28              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
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
cover: "https://cdn.beekka.com/blogimg/asset/202503/bg2025030302.webp"  # 文章卡片封面图（建议尺寸：1200×600）

---
AI 工具已经这么多了，该不该造新的轮子？
<!-- more -->
年初一月份，我就看到新闻，字节面向海外发布了一款 AI IDE，叫做 [Trae](https://sourl.cn/g3vtkm)。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030302.webp)

我心想，现在的 IDE 都有 AI 插件，功能完备，字节自己也有 [MarsCode 插件](https://www.marscode.cn/workbench)，有必要再做一款单独的 IDE 吗？

我就没有特别关注这个工具。

上周，我遇到字节的同学，得知 Trae 国内版就在本周发布，我还提前拿到了内测版，这可是国内市场的首个 AI 原生 IDE。

今天，就来说说我的使用心得，顺便也探讨一个更大的问题：**AI 工具已经这么多了，该不该造新的轮子？**

先透露一下结论：Trae 国内版值得用。它作为一个 AI IDE，整体比插件好用，而且内置的大模型----豆包 1.5 pro、DeepSeek 满血版----无限量免费使用。

## 一、国外版与国内版

介绍使用体会之前，我先解释一下，两个版本的区别，主要是模型的差异。

Trae 国外版使用国外的模型，对于国内用户来说，存在连接不上、等待时间长、网速较慢等问题。

Trae 国内版使用国内的模型，连接可以保证稳定快速，界面也根据国内用户的习惯进行了定制。

我也问了字节的同学，Trae 国内版和 MarsCode 是什么关系。回答是，**它们是同一个团队的作品，适用于不同场景**。

如果你想保留原来使用的 IDE，只增加 AI 编程相关功能，那就用 MarsCode 插件。如果想体验一个全新的围绕 AI 设计的原生 IDE，那就试试 Trae。

这两个产品后续都会长期开发，可以根据自己的需要选择。

## 二、安装

Trae 国内版需要去官网 [trae.com.cn](https://sourl.cn/g3vtkm)下载。

目前，有三个版本：Windows 版、macOS Intel 芯片版、macOS M 系列芯片版。

安装启动后，会出现下面的画面。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030202.webp)

接着，让你选择亮色/暗色主题，以及语言（简体中文）。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030203.webp)

它还会问你，要不要导入原来 IDE（VS Code/Cursor）的配置，算是很贴心的设计了。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030204.webp)

最后，问你要不要登录。不登录也可以用，只是某些功能会受到限制。登录的话，就跳转到 Trae 官网，用你的手机号登录。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030205.webp)

一切完毕，就会进入使用界面。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030206.webp)

## 三、使用界面

Trae 的使用界面，相当简洁。左侧就是 VS Code 的界面，熟悉的话，上手没有任何难度。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030207.webp)

界面的右侧是 AI 区域。可以看到，它分成两个模式：Chat 和 Builder。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030208.webp)

Chat 模式是默认模式，也就是问答模式。AI 回答问题，也可以生成代码，但不会生成项目，需要自己手动把代码复制过去。

Builder 模式是项目模式，你给出文字描述，让 AI 一键生成项目。

下面，就来试试这两个模式。

## 四、Chat 模式

Chat 模式的主体就是一个对话框，右下角按钮可以选择底层模型。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030209.webp)

国内版目前有三个模型可供选择。

> - 豆包 1.5 pro
> - DeepSeek R1
> - DeepSeek V3

这三个模型都是**免费无限量使用，DeepSeek 系列模型都是满血版**。我实测，速度令人满意，能够较快地给出回答，没有遇到"服务器繁忙"的提示，包括最耗时的 DeepSeek R1 模型都是如此。

至于，回答问题的质量，老实说，现阶段领先的大模型，这方面已经没有太多可挑剔的了。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030210.webp)

任何问题都可以问，包括非技术类的问题。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030211.webp)

我直接让它生成代码，回答的格式非常友好。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030212.webp)

大家注意，上图中，第一个代码块是终端代码，右上角有三个按钮（下图）。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030213.webp)

上图右上角的三个按钮，分别是"复制"、"添加到终端"和"运行"。如果点击后两个按钮，会直接把代码传入 Trae 内置的终端，就像下面这样。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030301.webp)

这部分，我感觉用起来比插件版流畅，整体感更强，这大概就是把 AI 做成 IDE 的好处了。

## 五、Builder 模式

再看 Builder 模式，它可以一键生成项目。

点击上方的标签页，切换到该模式。可以看到，第一次进入，会有一个"启动 Builder"按钮（下图）。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030219.webp)

系统会提示你（下图），这里可以从零到一完成项目构建，并且所有修改会自动保存，并显示两个示例项目：贪吃蛇和 Todo List。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030220.webp)

为了测试正常的流程，我就直接在下方的对话框输入："请用 React 生成一个 Todo List 应用。"

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030230.webp)

系统会提示你指定一个目录，作为项目目录。然后，它不断给出操作步骤（下图）。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030231.webp)

上图中，需要执行具体的命令时，它会附有"运行"按钮，要你点击确认。

点击后，Trae 会自动打开内置的终端，执行该命令（下图）。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030232.webp)

然后，它会一个个生成所需的文件，要求你审查。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030228.webp)

所有文件生成完毕，就出现了启动本地预览服务器的命令。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030233.webp)

运行后，Trae 会启动一个内置的 webview 页面，展示渲染效果，实时更新。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030235.webp)

这个很赞，任何修改都可以马上看到结果。

但是我必须说，不知道是不是内测版的缘故，Builder 模式目前还不完善，只适合为项目生成架构，做不到一步到位，离理想状态有些差距。我试了多次，如果需求复杂一点，生成的代码很难一次就跑起来，需要多次修改。大家对它要抱有合理期待，这个模式后续还需要不断完善。

## 六、其他功能

除了两大模式，Trae 的其他功能也可圈可点。

**（1）代码智能补全。**

这是 AI 编程助手的基本功能，就不多说了。只要按回车键换行，Trae 会阅读并理解当前代码，然后自动补全后续代码。

如果有注释，它会根据注释，生成缺少的代码。

**（2）指定上下文。**

Trae 允许指定对话的范围（上下文）。具体方法是在对话框输入`#`号。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030218.webp)

上图中，在对话框输入`#`后，系统就会自动弹出一个菜单，让你选择上下文（context），一共有四种。

> - Code（代码）
> - File（文件）
> - Folder（文件夹）
> - Workspace（工作区）

默认的上下文是当前工作区（Workspace，即目前打开的项目），也可以指定为某个函数或类（Code）、某个文件（File）、某个文件夹（Folder）。

一旦指定了上下文，AI 的回答会更有针对性。比如生成代码时，就会结合上下文的场景。

**（3）一键转对话。**

为了方便地将代码编辑框的内容，传送给 AI，Trae 提供"一键转对话"按钮，省去了复制粘贴的麻烦。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030236.webp)

上图中，选中某段代码，系统就会弹出"添加到对话"的浮动菜单，一键复制到 AI 对话框，便于提问。

终端窗口的报错信息，也有这个功能（下图），这就很方便让 AI 来 debug。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030223.webp)

**（4）模型自定义功能。**

我听字节的同学说，Trae 后面会支持模型自定义功能，用户可根据自己的喜好，接入对应的模型API。

## 七、总结

我试用 Trae 国内版后，感到它有几个显著优点。

（1）产品设计周全，最常用的场景都考虑到了，用户体验比较流畅。

（2）界面友好，交互设计良好，开发者容易上手。

（3）AI 模型（包括满血版 DeepSeek）无限量免费使用，响应始终稳定快速。

不足之处是 Builder 模式还不够强，生成的程序有 bug，第一次生成往往跑不起来，需要不断调整，耗时较多。

总结就是，**一个完整的 AI IDE 还是比 AI 插件，用起来更容易**，有"一体感"，达到了更大的定制程度。

随着 AI 的能力进一步发展，AI IDE 的想象空间会更大，也许会成为未来 IDE 发展的主要方向。

Trae 国内版刚刚上线，开发团队希望大家[下载试用](https://sourl.cn/g3vtkm)，多提宝贵意见。