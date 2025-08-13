---
# 🏷️ 基础信息
title: "Spring Boot3(二)：整合数据库连接池Druid"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "本篇文章主要介绍如何在springboot3中整合Druid数据库连接池，列举基本的CRUD操作。" # 【SEO优化】用于搜索引擎显示的描述
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
tag: ["SpringBoot","Druid"]      # 多个标签用数组表示

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
本篇文章主要介绍如何在springboot3中整合Druid数据库连接池，列举基本的CRUD操作。
<!-- more -->
## Druid介绍
Druid是一个开源的高性能数据库连接池，由阿里巴巴集团开发并开源，主要用于Java应用程序中与数据库的连接管理和资源池化。它提供了一系列功能和配置选项，旨在提供高效、可靠的数据库连接管理。
git地址：[https://github.com/alibaba/druid](https://github.com/alibaba/druid)
### 特性和功能：
1.高性能：Druid连接池通过一些优化策略实现高性能的数据库连接获取和释放。其中包括使用预创建连接来减少连接获取的开销，以及通过连接池扩展机制来快速处理并发请求。此外，Druid还提供了连接的闲置检测和定时回收机制，以避免连接长时间占用资源。
2.监控统计：Druid连接池内置了强大的监控统计功能，可以实时监控连接池的状态、活跃连接数、请求频率、SQL执行情况等。它提供了一个内置的Web界面，可以方便地查看连接池的监控数据，并进行性能分析和故障排查。
3.防止泄露：Druid连接池可以检测和关闭泄露的连接，防止长时间占用数据库连接资源。它提供了一套完善的连接泄露检测和回收机制，以保证连接资源的有效利用。
4.数据库访问优化：Druid连接池支持连接的预处理、批量更新等优化操作，可以提高数据库的访问效率。它还提供了SQL执行的慢查询日志功能，可以帮助开发人员找出慢查询语句，并进行性能优化。
5.安全防护：Druid连接池提供了一些安全防护机制，如SQL防火墙、黑白名单过滤等。这些机制可以保护数据库免受恶意SQL注入等攻击。
6.配置灵活：Druid连接池的配置选项非常灵活，可以根据应用程序的需求进行定制。您可以设置连接池大小、最大连接数、连接超时时间、验证方式等参数，以满足不同场景的需求。
## 整合Druid
## 工程代码
### 引入pom依赖
``` xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot3-starter</artifactId>
    <version>3.5.3.1</version>
</dependency>
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-3-starter</artifactId>
    <version>1.2.20</version>
</dependency>
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
```
### 配置文件
#### 数据库配置：
``` yaml

spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/hexadecimal_demo
    username: root
    password: 123456
    # druid 连接池管理
    druid:
      filter:
        config:
          #开启密钥加密
          enabled: true
        stat:
          enabled: true
      # 配置默认的监控统计拦截的Filter
      # 不配置则监控页面中的SQL无法统计
      # stat - SQL监控配置
      # wall - SQL防火墙配置
      # slf4j - Druid日志配置
      filters: stat,wall,slf4j
      # 初始化连接池大小
      initial-size: 5
      # 连接池最大连接数
      max-active: 20
      # 每个连接上PSCache的最大值
      # 如果大于0，pool-prepared-statements自动开启
      max-pool-prepared-statement-per-connection-size: -1
      # 连接时最大等待时间（单位：毫秒）
      max-wait: 60000
      # 保持空闲连接不被关闭的最小生存时间（单位：毫秒）
      min-evictable-idle-time-millis: 300000
      # 连接池最小空闲数
      min-idle: 5
      # 是否开启PSCache，即是否缓存preparedStatement（提升写入、查询效率）
      # 建议在支持游标的数据库开启，例如：Oracle
      pool-prepared-statements: false
      # 检测获取连接时的有效性
      # 开启后会影响性能
      test-on-borrow: false
      # 检测归还连接时的有效性
      # 开启后会影响性能
      test-on-return: false
      # 检测空闲连接
      # 不影响性能，建议开启
      test-while-idle: true
      # 检测关闭空闲连接的时间间隔（单位：毫秒）
      time-between-eviction-runs-millis: 60000
      # 检测连接有效的SQL
      # 为空则test-while-idle、test-on-borrow、test-on-return配置失效
      validation-query: SELECT 1
      # 检测连接是否有效的超时时间
      validation-query-timeout: 1
      stat-view-servlet:
        # 访问白名单
        allow: 127.0.0.1
        # 配置统计页面
        enabled: true
        # 访问密码
        login-password: 123456
        # 访问用户名
        login-username: root
        # 允许重置监控数据
        reset-enable: true
      web-stat-filter:
        # 配置统计页面过滤
        enabled: true
        # 排除路径
        exclusions: .js,*.gif,*.jpg,*.bmp,*.png,*.css,*.ico,/druid/*
        # 开启session统计
        session-stat-enable: true
        # session统计的最大个数
        session-stat-max-count: 100
        # 过滤路径
        url-pattern: /*

mybatis-plus:
  global-config:
    db-config:
      # 主键类型：自增
      id-type: auto
  # mapper xml文件路径
  mapper-locations: classpath:mapper/*.xml

# Logger Config
logging:
  level:
    com.hexadecimal: debug
```
1.加载数据库驱动，springboot3.0开始mysql驱动改为com.mysql.cj.jdbc.Driver，而非com.mysql.jdbc.Driver。
2.启动服务后，打开Druid监控地址:http://127.0.0.1:8080/druid/login
3.同时，由于springboot3.0使用Jakarta EE 10，从 Java EE 变更为 Jakarta EE，包名以 javax开头的需要相应地变更为jakarta，如javax.servlet.*，修改为jakarta.servlet.*。目前Druid最新版本1.2.18仍使用javax的旧包，故无法使用，需要等Druid官方升级后方可使用。
### 创建DataSourceConfig类，用于创建数据源
``` java
  @Configuration
public class DataSourceConfig {
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.druid")
    public DataSource getDataSource() {
        return DruidDataSourceBuilder.create().build();
    }
}
```
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
```## 总结
本文主要介绍了springboot3如何整合Druid以及使用它做一些CRUD操作。Druid连接池具有高性能、监控统计、连接泄露防护、数据库访问优化、安全防护、灵活配置、易集成和活跃的社区等优点，使其成为国内最常用的几款Java数据库连接池工具之一。有关Druid的一些参数配置和调优将会在后续章节阐述，敬请期待。
