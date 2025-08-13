---
# 🏷️ 基础信息
title: "unity连招动画切换方式"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "制作游戏的小伙伴们如果遇到连招不顺的看这里呦~" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2025-06-22              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["转载"]         # 支持字符串或数组
tag: ["Unity"]      # 多个标签用数组表示

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
cover: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/fc6b149365c05ae0bd8f614ae163b8b6f78407dfd0cad2702ebe7139a50d796bef4dcdbbf6fa548743dfa5024a3f7cc0?pictype=scale&from=30013&version=3.3.3.3&fname=2025-06-22WRM6Y.jpg&size=750"  # 文章卡片封面图（建议尺寸：1200×600）

---
制作游戏的小伙伴们如果遇到连招不顺的看这里呦~
<!-- more -->
## 连招动画切换方式

此方法可以实现的连击效果：
通过连续点击鼠标左键
攻击1 接 攻击2 接 攻击3 结束
在任意攻击动作中停止点击鼠标左键，则连击中断

![](http://picabstract.preview.ftn.qq.com/ftn_pic_abs_v3/38383741f4333302ebf805acff500ede601f2ad3e714e8cfa576d2f6297ff7ab9d1ed44c5a75fab7101fa674b3264fd6?pictype=scale&from=30013&version=3.3.3.3&fname=2025-06-22KS3oF.png&size=750)

![](http://picabstract.preview.ftn.qq.com/ftn_pic_abs_v3/561b02612fb1d3bf19fa9c4287b319b0702ce0003c7b23ea3b36077d17cc3236d34e42bfc8d7d4162e73e30795582821?pictype=scale&from=30013&version=3.3.3.3&fname=2025-06-22WbCYh.png&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/ddabf1916544775d5de0bc0e19af9793f8062a8795547e62d10bc17e564864bd97dbbe853858b32bae56fe71bbe37d00?pictype=scale&from=30013&version=3.3.3.3&fname=2025-06-22xw3Zm.png&size=750)
分别为三个攻击动画设置进入条件

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0c06483e1ffbf65873318dc18786c12408a257d27a8f16ae1bc4e88b30caf7c13d42ff0594537bf6397bb931616d5692?pictype=scale&from=30013&version=3.3.3.3&fname=2025-06-22Y6lW4.png&size=750)

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/a31ca0635a0cfc29b532bcf5d430ed6f4d9a73c2dbb364fce7bb850a5389c3088050f492e4f4d857f033955c60069215?pictype=scale&from=30013&version=3.3.3.3&fname=2025-06-22VZZQY.png&size=750)
将动画Attack1 Attack2 Attack3 的进入条件分别设置为
Combo Equals 1
Combo Equals 2
Combo Equals 3

### 二、代码部分

为角色挂上这个脚本

```
using UnityEngine;

public class ComboTest : MonoBehaviour
{
    //获取动画组件
    private Animator anim;
    //是否开始连击
    private bool startCombo;
    //当前连击次数
    private int combo;

    private void Start()
    {
        //获取动画组件
        anim = GetComponent<Animator>();
    }

    private void Update()
    {
        //如果按下鼠标左键
        if (Input.GetMouseButtonDown(0))
        {
            //如果Combo值为0
            if (anim.GetInteger("Combo") == 0)
            {
                //将Combo值增加1
                combo++;
                //播放Attack1
                anim.SetInteger("Combo", combo);
            }

            //如果在可以连击的时间范围中
            if (startCombo)
            {
                //将Combo值增加1
                combo++;
                //如果combo值大于3
                if (combo > 3)
                {
                    ResetCombo();
                }
                //播放后续的攻击动画
                anim.SetInteger("Combo", combo);
                startCombo = false;
            }

            Debug.Log("当前连击次数：" + combo);
        }
    }

    //动画事件中 StartComboState() 和 EndComboState() 之间的时间段里可以进行连击
    private void StartComboState()
    {
        startCombo = true;
    }

    private void EndComboState()
    {
        startCombo = false;
    }

    /// <summary>
    /// 重置连击
    /// </summary>
    private void ResetCombo()
    {
        combo = 0;
        anim.SetInteger("Combo", combo);
        EndComboState();
    }
}
```
### 三、Aniamtion中的设置

在每个动画中合适的时间点添加事件
StartComboState() 和 EndComboState() 之间是可以进行连击的时间
每个动画的最后添加 ResetCombo()

![](http://picabstract.preview.ftn.qq.com/ftn_pic_abs_v3/e1d27e0e2a8f6e6a23874d2c2d66171d37e641e6fbaebab4b7835208e37326d53bd667c80505d717f485d61d759afd28?pictype=scale&from=30013&version=3.3.3.3&fname=2025-06-22hVnHr.png&size=750)
### 四、总结

这是笔者在看[Siki学院](https://www.sikiedu.com/)Unity动画教程时，突然想到的一种设置连击动画的方法；
方法本身可能不太成熟，但能为各位带来一丝灵感就好；
后续或许会更新更多关于连招动画的分享；
欢迎大家提出建议，指出问题；
感谢观看！
