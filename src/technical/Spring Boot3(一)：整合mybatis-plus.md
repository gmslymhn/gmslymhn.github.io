---
# 🏷️ 基础信息
title: "Spring Boot3(一)：整合mybatis-plus"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "本篇文章主要介绍如何在springboot3中整合mybatis-plus，列举基本的CRUD操作。" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2024-08-22              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["技术分享"]         # 支持字符串或数组
tag: ["SpringBoot","Mybatis-plus"]      # 多个标签用数组表示

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
cover: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/4ee368b361355d97767ce1a107332174ac07fe7221c6513f98520e9dab6fc477f1a3463b97dc83673b9167414278199a?pictype=scale&from=30013&version=3.3.3.3&fname=2024-08-22VFxF4.jpg&size=750"  # 文章卡片封面图（建议尺寸：1200×600）

---
本篇文章主要介绍如何在springboot3中整合mybatis-plus，列举基本的CRUD操作。
<!-- more -->
## MyBatis-Plus介绍
MyBatis-Plus（简称 MP）是一个MyBatis的增强工具，在MyBatis的基础上只做增强不做改变，为简化开发、提高效率而生。
### 特性介绍：
* 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑
* 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作
* 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求
* 支持 Lambda 形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错
* 支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题
* 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作
* 支持自定义全局通用操作：支持全局通用方法注入（ Write once, use anywhere ）
* 内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用
* 内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询
* 分页插件支持多种数据库：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库
* 内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询
* 内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操
## 整合MyBatis-Plus
### 工程代码
### 引入pom依赖
``` xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
    </dependency>
    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot3-starter</artifactId>
        <version>3.5.3.1</version>
    </dependency>
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```
其中lombok插件，利用注解方式自动生成 java bean 中 getter、setter、equals 等方法。
### 配置文件
#### 数据库配置：
``` xml
spring:
  datasource:
    #数据库驱动完整类名
    driver-class-name: com.mysql.cj.jdbc.Driver
    #数据库连接url
    url: jdbc:mysql://127.0.0.1:3306/hexadecimal_demo
    #数据库用户名
    username: root
    #数据库密码
    password: 123456
```
#### 日志配置：
``` xml
# Logger Config
logging:
  level:
    com.hexadecimal: debug
```
加载数据库驱动，mysql数据库配置。配置项目的日志级别为debug### 创建MybatisPlusConfig类，用于初始化配置MybatisPlus参数
``` java
@Configuration
@MapperScan("com.hexadecimal.example.mapper")
public class MybatisPlusConfig {

    /**
     * 分页插件
     */
    @Bean
    public PaginationInnerInterceptor paginationInterceptor() {
        return new PaginationInnerInterceptor();
    }
}
```
@MapperScan用于扫描Mapper地址，启用分页功能。
### 创建实体对象UserDO
``` java
@Data
@TableName("user")
public class UserDO {
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
```
@TableName用于标识数据库的表名，如果对象名为User，可忽略该注解。
### 创建实体对象UserDO对应的mapper
``` java
public interface UserMapper extends BaseMapper<UserDO> {
}
```
### 创建单元测试类UserMapperTest
``` java
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserMapperTest {
    @Resource
    private UserMapper userMapper;

    /**
     * 测试单条查询
     */
    @Test
    public void testSelectOne() {
        UserDO user = userMapper.selectById(1L);
        System.out.println(user);
    }

    /**
     * 测试新增
     */
    @Test
    public void testInsert() {
        UserDO user = new UserDO();
        user.setName("kk");
        user.setAge(3);
        user.setEmail("kk@qq.com");
        assertThat(userMapper.insert(user)).isGreaterThan(0);
        assertThat(user.getId()).isNotNull();
    }

    /**
     * 测试删除
     */
    @Test
    public void testDelete() {
        assertThat(userMapper.deleteById(3L)).isGreaterThan(0);
        assertThat(userMapper.delete(new QueryWrapper<UserDO>()
                .lambda().eq(UserDO::getName, "kk"))).isGreaterThan(0);
    }

    /**
     * 测试更新
     */
    @Test
    public void testUpdate() {
        UserDO user = userMapper.selectById(2);
        assertThat(user.getAge()).isEqualTo(20);
        assertThat(user.getName()).isEqualTo("Jack");

        userMapper.update(
                null,
                Wrappers.<UserDO>lambdaUpdate().set(UserDO::getEmail, "zz@qq.com").eq(UserDO::getId, 1)
        );
        assertThat(userMapper.selectById(2).getEmail()).isEqualTo("11@qq.com");
    }

    /**
     * 测试查询列表
     */
    @Test
    public void testSelect() {
        List<UserDO> userList = userMapper.selectList(null);
        Assert.assertEquals(5, userList.size());
    }

    /**
     * 测试分页查询
     */
    @Test
    public void testPage() {
        Page<UserDO> page = new Page<>(1, 2);
        IPage<UserDO> userIPage = userMapper.selectPage(page, new QueryWrapper<UserDO>()
                .gt("age", 1));
        assertThat(page).isSameAs(userIPage);
        System.out.println("总条数: " + userIPage.getTotal());
        System.out.println("当前页数: " + userIPage.getCurrent());
        System.out.println("当前每页显示数: " + userIPage.getSize());
        System.out.println("记录列表: " + userIPage.getRecords());
    }

}
```
## 总结
本文主要介绍了springboot如何整合MybatisPlus以及使用它做一些CRUD操作，利用该工具可以减少我们的代码量，使代码风格简洁明了。MybatisPlus虽简化我们的sql操作，一旦涉及复杂到sql，仍需手动编写。实际使用中，MybatisPlus也存在一些坑需要注意，将会在后续章节阐述，敬请期待。