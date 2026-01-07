---
# 🏷️ 基础信息
title: "Windows文件夹自定义背景"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "一款Windows环境下可以实现文件夹自定义背景的软件" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2024-08-11              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["软件分享"]         # 支持字符串或数组
tag: ["电脑软件"]      # 多个标签用数组表示

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
cover: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/f941a22b4e720e1c4a575889b5440cc3411a268f092d31eb86056e1d89bb2e08280fd626612eb274400120aba83dd14b?pictype=scale&from=30013&version=3.3.3.3&fname=2024-08-11gCmPG.png&size=750"  # 文章卡片封面图（建议尺寸：1200×600）

---
一款Windows环境下可以实现文件夹自定义背景的软件
<!-- more -->


## 使用方法

先把你想要的背景图片放在Image文件夹(只支持jpg、png格式)

如果你想要多个图片随机切换 请放入至少2张图片
使用记事本打开config.ini文件
修改
random=false 这行 把false改成true

**提示：**
您必须具有管理员权限
双击"注册_Register.cmd"提示注册成功后 然后重新打开文件资源管理器窗口就能看到效果
卸载双击"卸载_Uninstall.cmd" 然后删掉文件就可以了

其他参数介绍：
posType=0 打开"config.ini"找到这一行
可以把0改成 0 1 2 3 的其中一个数字
分别控制不同的显示方式

比如 
posType=0 图片显示在左上角

posType=1 图片显示在右上角

 2是左下角 3是右下角

imgAlpha=255
代表显示图片的不透明度 范围0-255 （0是全透明，255是全不透明）

修改完配置重新打开文件资源管理器窗口即可生效
![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/f941a22b4e720e1c4a575889b5440cc3411a268f092d31eb86056e1d89bb2e08280fd626612eb274400120aba83dd14b?pictype=scale&from=30013&version=3.3.3.3&fname=2024-08-11gCmPG.png&size=750)

## 下载链接

[下载链接](http://lz.tyut.tech/lz?fid=is6fr273subc&pwd=akqy&isNewd=https://innlab.lanzn.com)
