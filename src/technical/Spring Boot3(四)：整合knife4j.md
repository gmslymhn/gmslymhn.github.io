---
# 🏷️ 基础信息
title: "Spring Boot3(四)：整合knife4j"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "本篇文章主要介绍如何在springboot3中整合knife4j，并展示最基本的api使用范例。" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2024-08-23              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["技术分享"]         # 支持字符串或数组
tag: ["SpringBoot","接口文档"]      # 多个标签用数组表示

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
cover: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0262f924df42b03dd9c2ca06181a8d9e1d47513a46f1aa04ee3687d9af01096206ef844b58c9608ee74b0e38f3f29ca6?pictype=scale&from=30013&version=3.3.3.3&fname=2024-08-23n1BNH.png&size=750"  # 文章卡片封面图（建议尺寸：1200×600）

---
本篇文章主要介绍如何在springboot3中整合knife4j，并展示最基本的api使用范例。
<!-- more -->
## 什么是knife4j
knife4j是一个集Swagger2 和 OpenAPI3为一体的增强解决方案，帮助开发者快速聚合使用OpenAPI规范，快速生成API文档，并且提供一些额外的功能，比如:
1.API文档生成：可以根据Controller和方法上的注解自动生成Markdown格式的API文档
2.在线访问API：可以在knife4j的页面直接访问我们的API接口
3.Token管理：可以在knife4j中对API Token进行管理
4.比较请求与响应：可以比较同一个API的请求与响应内容的差异
5.高亮API响应：将API响应中的JSON高亮显示，方便查看
## 集成knife4j
## 工程代码
### 引入pom依赖
``` xml
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>
    <version>4.1.0</version>
</dependency>
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```
### 配置文件
``` yaml
server:
  port: 8080
# springdoc-openapi项目配置，访问地址：http://127.0.0.1:8080/doc.html
springdoc:
  swagger-ui:
    path: /swagger-ui.html
    tags-sorter: alpha
    operations-sorter: alpha
  api-docs:
    path: /v3/api-docs
  group-configs:
    - group: 'default'
      paths-to-match: '/**'
      packages-to-scan: com.hexadecimal.example

# knife4j的增强配置，不需要增强可以不配
knife4j:
  enable: true
  setting:
    language: zh_cn

# Logger Config
logging:
  level:
    com.hexadecimal: debug
```
1.springdoc.swagger-ui.path配置UI界面的访问路径。
2.knife4j.enable是否开启增强配置。
3.配置项目的日志级别为debug。
### swagger初始化配置
``` java
@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("创新实验室")
                        .description("官网API文档")
                        .version("v1")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("创新实验室官网API文档")
                        .url("http://innlab.tyut.xyz/"));
    }

}
```
配置接口文档的标题、描述、版本、license等信息。
### 创建实体对象UserDO
``` java
@Data
public class UserDO {
    private Long id;
    private String name;
    private Integer age;
    private String email;

}
```
### 用户请求Controller类
``` java
@Tag(name = "用户管理")
@RestController
@Slf4j
public class UserController {
    @Operation(summary = "查询")
    @GetMapping("query")
    public UserDO query(@Parameter(name = "name", description = "名称") String name) {
        UserDO userDO = new UserDO();
        userDO.setName(name);
        return userDO;
    }

    @Operation(summary = "列表")
    @PostMapping("list")
    public List<UserDO> list() {
        return new ArrayList<UserDO>();
    }

    @Operation(summary ="新增")
    @PostMapping("add")
    public UserDO add(UserDO userDO) {
        return new UserDO();
    }

    @Operation(summary ="修改")
    @PostMapping("update")
    public UserDO update(UserDO userDO) {
        return new UserDO();
    }

    @Operation(summary ="删除")
    @PostMapping("delete")
    public Boolean delete(Integer id) {
        return true;
    }
}
```
### 启动ExampleApplication
ExampleApplication启动成功后，在浏览器运行http://127.0.0.1:8080/doc.html，效果如下：## 总结
本文主要介绍了springboot3如何整合knife4j以及如何使用它管理我们的接口。