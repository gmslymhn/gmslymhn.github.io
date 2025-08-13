---
# 🏷️ 基础信息
title: "雷池：国产免费 Web 安全网关"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: 'Web 网站防护项目，中文名为"雷池"。' # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2025-01-10              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["技术分享"]         # 支持字符串或数组
tag: ["雷池"]      # 多个标签用数组表示

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
cover: "https://cdn.beekka.com/blogimg/asset/202310/bg2023102604.webp"  # 文章卡片封面图（建议尺寸：1200×600）

---
 Web 网站防护项目，中文名为"雷池"。
<!-- more -->
服务器一直被攻击，怎么办？我的体会是，这种事情很难预防，只能用防火墙去挡。

它可以灵活地设定各种规则，过滤网络请求，防止黑客攻击你的网站，相当于一层自定义的软件防火墙。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023102604.webp)

它基于 Nginx，以反向代理的形式，架设在网站前面，自带图形操作界面，简单好用。

自从半年前在 [GitHub 开源](https://github.com/chaitin/SafeLine)，它已经收获了5000 star，目前是全球排名第二的开源 WAF 项目。

它的最大特点，就是采用智能语义分析算法，判断可疑请求，不让黑客越雷池半步，很适合个人和小企业使用。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010805.webp)

它有一个好用的图形管理后台（上图），可以配置各种拦截规则，高效过滤恶意请求。

即使不配置规则，它自带的语义引擎，也会通过机器学习，**自动识别和拦截恶意请求**。

本周，雷池 WAF 进行了[重大升级](https://mp.weixin.qq.com/s/WbNDrl9K7z7kKGoXpHcVyg)，发布了**语义引擎3.0版**，加强了 AI 语义分析能力。只要2～8小时的自动训练，识别准确率就能达到99.99%，还能用自然语言解释，遇到了什么攻击。

如果你有线上服务器，不妨试试它的拦截效果。个人网站使用[开源版](https://github.com/chaitin/safeline)就够了，企业可以考虑[商业版](https://waf-ce.chaitin.cn/)，本次升级引入的 AI，主要就是强化商业版的企业级服务。