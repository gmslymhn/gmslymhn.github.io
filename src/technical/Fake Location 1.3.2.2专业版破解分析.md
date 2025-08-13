---
# 🏷️ 基础信息
title: "Fake Location 1.3.2.2专业版破解分析"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "工具：jadx、burp、frida、pycharm、ida、雷电模拟器、算法助手
方法：hook相关代码
难点：加壳、代码混淆、双向证书校验、so层加解密" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2024-09-28              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["技术分享"]         # 支持字符串或数组
tag: ["安卓逆向"]      # 多个标签用数组表示

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
cover: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/8cbdadfe2f96677496c58c95dedbf0eb49a3f92bada13b776ea83cd2992b715fe7a9c1631c57261006b97e78c6c52ff0?pictype=scale&from=30013&version=3.3.3.3&fname=2024-09-28fxzne.png&size=1000"  # 文章卡片封面图（建议尺寸：1200×600）

---
工具：jadx、burp、frida、pycharm、ida、雷电模拟器、算法助手
方法：hook相关代码
难点：加壳、代码混淆、双向证书校验、so层加解密
<!-- more -->
## 前言
接续教程 ROOT环境下实现虚拟定位 
app ：Fake Location 1.3.2.2（[http://fakeloc.cc/app](http://fakeloc.cc/app)）
工具：jadx、burp、frida、pycharm、ida、雷电模拟器、算法助手
方法：hook相关代码
难点：加壳、代码混淆、双向证书校验、so层加解密

ps:文章原文[https://www.52pojie.cn/thread-1955462-1-1.html](https://www.52pojie.cn/thread-1955462-1-1.html) 受益匪浅

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/567bb1238e73b6823346045fbe77ded75b0dd6b4640999eb53083f770705670bce6cb10b923a7a81e24a01c4a38ab087?pictype=scale&from=30013&version=3.3.3.3&fname=2024-09-28hnvSd.png&size=1000)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/424060bdb16ce2eb7bba193c5bbb5803c5e3a5df45cec9b3bddd20c391aed85a21ee43d7c4a7bac6278d347725a9473e?pictype=scale&from=30013&version=3.3.3.3&fname=2024-09-28xbCc2.png&size=1000)

[](https://netlify-lz.tyut.tech/?fid=iFMmz2du2uxg&pwd=i7g2&isNewd=https://innlab.lanzn.com)
