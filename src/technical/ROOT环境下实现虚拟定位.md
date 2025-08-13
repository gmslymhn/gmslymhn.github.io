---
# 🏷️ 基础信息
title: "ROOT环境下实现虚拟定位"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "Fake Location是一款专为Android平台设计的应用，允许用户在不修改系统设置的情况下模拟地理位置。它适用于开发者测试、游戏玩家或任何需要虚拟定位功能的用户。通过此项目，你可以轻松改变你的设备上的GPS位置，仿佛置身于世界的任何角落。" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2024-07-27              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["技术分享"]         # 支持字符串或数组
tag: ["ROOT","虚拟定位"]      # 多个标签用数组表示

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
cover: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/e21a6940aa031fa2e737c81e996f319b32f54e3209f608c7df65774c740a38d683ec8eb451d1959f3099a3bd304fc521?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-27AOGsJ.jpg&size=750"  # 文章卡片封面图（建议尺寸：1200×600）

---
Fake Location是一款专为Android平台设计的应用，允许用户在不修改系统设置的情况下模拟地理位置。它适用于开发者测试、游戏玩家或任何需要虚拟定位功能的用户。通过此项目，你可以轻松改变你的设备上的GPS位置，仿佛置身于世界的任何角落。
<!-- more -->
## 概述😀

Fake Location是一款专为Android平台设计的应用，允许用户在不修改系统设置的情况下模拟地理位置。它适用于开发者测试、游戏玩家或任何需要虚拟定位功能的用户。通过此项目，你可以轻松改变你的设备上的GPS位置，仿佛置身于世界的任何角落。

本教程需要手机带有ROOT权限（必须），非ROOT环境下解析会有极大阻碍，不在本次教程范围。

同时，使用本教程需要一定的逆向思维 ，思路与分析永远比方法更重要。

ps：Fake Location必须要root权限，不然你拿这软件也没啥用

## 准备工作😁

带有ROOT权限的安卓环境

软件Fake Location（虚拟定位软件）

软件SimpleHook（hook工具，嘎嘎强）

软件DITOR（脱壳软件）

软件MT管理器（管理手机文件）

## 脱壳🍠

先使用MT管理器看一下软件安装包，居然用的是360加固（太难了，溜了溜了），那么使用DITOR工具对软件安装包进行脱壳，360模式。

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/b7b2de0945588ddbcd18bc27785a4b9133577205d20e543ce6330a74abd1378af90a4ddb233506bdb28bf359c0e966dc?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-27Mk4mV.jpg&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/8aee1568bc45355369b102a3346535934f998342bd5a7a1b47267b5bd15bdb601441030e237446e17c4a955d21222d15?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-273xnLp.jpg&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/febaa9dc812798ff4995fe3525e03094ab7202e0cb0bd60f94bb9a5ecc8760bb5e407ea8d53e5260232dcefd42e9a366?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-271HOUQ.jpg&size=750)

如上图，完整的dex文件会有3个（实际可能因软件版本不同不是三个），拿到这几个dex文件就算完成第一步。

## 解析🍉

我们打开软件看了一下，很可惜，并没有看到什么有用的关键词或者是其他的，同时我们也看了一眼拖出来的dex文件，高度混淆，看不懂，根本看不懂 🙀 🙀（丸辣，呜呜呜~~）

这就没办法了吗？ 😫不急，注意看下图，每个新注册的账号它都可以免费领取24小时的会员时间，我们从时间入手【Time】但这个不是关键

我举一个例子:【登录时间-结束时间=会员时间（在线时长）】

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/aefc1c34c6156a8def5fa71913bd91a68b13c9468473c9699c9d480b599b1a8151cb8036f351b7ca75cc4e2c071af493?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28YtovC.jpg&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cc06c61f4111f5803c74c9f8d0d021abb5b36d0cf81e2ddfeda4b0158a5b535c071bdef4d53ee2f963821b007f02036c?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28uGoWE.jpg&size=750)

所以我们想要从时间入手，就要先定位到他的登录时间，这是我们的关键词就出来了，它就是【getLoginTime】获取登录时间

选择脱出来的dex文件，使用编辑器++，我们搜索方法名getLoginTime

我们可以看到他所用的是iget-wide取值，那关我什么事？🤡 我们可是hook，有结论了就好，不用管其他的

到这里我们已经定位到了关键地方，可以看一下图中方法，有【getLoginTime】【getLoginType】【getProindate】，一个是登录时间，一个是登录类型，一个是结果，都是用的iget-wide取值，那我们直接hook结果就好了

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/a083e75fd563529b73bb9908ef92dbe28ab6a78b9bda1695f9838b21ffd6233515fa5ecdfc69afcec5401c2cc5719383?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28kxN4k.jpg&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/819c242306b9ebed9a59275c6f7800597725a33c249818942e8d64667df72051333d84d0d5dae778952ab778fb0ff63f?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28swyP3.jpg&size=750)

类型是返回值，方法名就是【getProindate】修改值这里，我们要的是时间戳，随便找个网址获取一下就好了，不然跟着图中的改也行，这个随意

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/f83a23e46d2fa4cefd619083167e22e4e3d5b520c3016cfddb97beeef12c8869f4c3ad6d2124dba38eeff66a49457260?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28cwAmM.jpg&size=750)

然后可以看到在【getProindate】前还有个【getLoginType】类型，可以理解为判定是否为会员，那这里的话，我们可以看一下图中的方法，也是同一个类，往下滑就看到了，叫【getType】类型。这个我们同样hook，如下图所示

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/93e508f328dbe9ff4c3bb783955e13e7358f3515bf1cb0ec338694ca59f402de9b4bf11b7002dc28d4c6664c170d3307?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-286eMF1.jpg&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cf404340764dd058edd266931fd1ddbc66276dff51a8652c4b91f50d75a20eb6492f76d64fbaaa48a9b755de3b9dfb0b?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28tCs1a.jpg&size=750)

到这里专业版解析已经实现了，最后就是模拟线路问题，通过定位是在【ށ.ރ.ؠ.ؠ.֏】类的【ޅ】方法下，把这里给它hook上，就没问题了

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/b9f538ecb93d5cc1164d7c88610e603af5e83e33f21ce7602ffdfed00f1c10af16cca8cdd957b31ef8dc685d27f13f1c?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28Hx0KZ.jpg&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/15f01efc27ee94758a1bbff8c947923233464a2b0ebcd75d667ecacc866863a3864822878eeac9a89837c1e14d1e0682?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28SsowW.jpg&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/95a9637b79ac91a33ba8923be805d020f75b93e31f230a446cf7c343927e4d57edc3b7db8589599d147820ec29e1dba0?pictype=scale&from=30013&version=3.3.3.3&fname=2024-07-28zzv4G.jpg&size=750)

至此，教程就算结束了，我们可以通过Fake Location的专业版本去实现虚拟定位，路线模拟等等操作。

## 最终效果
<video width="100%" controls> <source src="https://vercel-lz.tyut.tech/api/lz?fid=iuR0D25qf4ra&pwd=6xh7&isNewd=https://innlab.lanzn.com" type="video/mp4"> 您的浏览器不支持MP3播放 </video>
