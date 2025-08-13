---
# 🏷️ 基础信息
title: "Spring Boot3(五)：整合Redis"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "本篇文章主要介绍如何在springboot3中整合redis，以及它的简单使用。" # 【SEO优化】用于搜索引擎显示的描述
icon: "" # 【可选】标题旁显示的图标（支持iconfont/图片路径）

# 👤 作者信息
author: 
  - name: "GM"    # 支持字符串或对象形式
    url: "https://github.com/gmslymhn" 
    email: "gmslymhn@163.com"
# 或简写: author: "你的名字" 
# 关闭作者显示: author: false

# 🕒 时间与原创
date: 2024-08-24              # 【推荐】格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
isOriginal:               # 【可选】标记为原创文章（默认false）

# 🏷️ 分类标签
category: ["技术分享"]         # 支持字符串或数组
tag: ["SpringBoot","Redis"]      # 多个标签用数组表示

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
cover: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0262f924df42b03dd9c2ca06181a8d9e1d47513a46f1aa04ee3687d9af01096206ef844b58c9608ee74b0e38f3f29ca6?pictype=scale&from=30013&version=3.3.3.3&fname=2024-08-24Czv0B.png&size=1000"  # 文章卡片封面图（建议尺寸：1200×600）

---
本篇文章主要介绍如何在springboot3中整合redis，以及它的简单使用。
<!-- more -->
## 什么是Redis

Redis是一个开源的高性能键值数据库。它具有以下几个主要特征：

数据存储在内存中，读取速度非常快，可以达到10万+ QPS。
支持多种数据结构，如字符串、哈希、列表、集合、有序集合等，满足不同场景的存储需求。
支持主从复制，可以提供数据冗余和故障恢复。
支持持久化，可以将内存中的数据持久化到磁盘上。
支持事务，可以一次执行多个命令。
丰富的特性，如发布/订阅、LUA脚本、流水线、事务等，可以实现更复杂的应用场景。
简单稳定，社区活跃，用于缓存、消息队列、排行榜、计数器等场景。
Redis的高性能和丰富数据结构使其在缓存、消息队列、排行榜、计数器等场景下都有出色表现。它用C语言实现，支持多种语言的客户端，是目前非常流行的键值数据库之一。

Redis支持多种语言的客户端，主要有：

Java: Jedis, Lettuce等是常用的Java客户端。
Python: redis-py等。
PHP: phpredis扩展。
Go: redigo等。
C#: StackExchange.Redis等。
Node.js: node_redis等。
C/C++: hiredis客户端。
Ruby: redis-rb等。
Rust: redis-rs等。
Scala: scala-redis等。
Erlang: erlang-redis-client等。
Perl: PerlRedis等。
R: RRedis等。

## 整合Redis
## 工程代码
### 引入pom依赖
``` xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```
### 配置文件
#### Redis配置：
``` yarm
spring:
  application:
    name: springboot3-redis
  data:
    redis:
      host: 127.0.0.1
      port: 6379
      database: 1
      #    password: 123456 #默认为空
      timeout: 3000ms
      lettuce:
        pool:
          max-active: 20  # 最大连接数，负值表示没有限制，默认8
          max-wait: -1    # 最大阻塞等待时间，负值表示没限制，默认-1
          max-idle: 8     # 最大空闲连接，默认8
          min-idle: 0     # 最小空闲连接，默认0

# Logger Config
logging:
  level:
    com.hexadecimal: debug
```
1.上述配置文件展示的是redis单节点的配置。
2.配置项目的日志级别为debug。
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
### 定义RedisConfig配置
``` java
@Configuration
public class RedisConfig {

    @Bean
    public RedisTemplate<String, Object> redisTemplate(LettuceConnectionFactory lettuceConnectionFactory) {
        RedisTemplate<String,Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(lettuceConnectionFactory);
        // 设置key序列化方式string，RedisSerializer.string() 等价于 new StringRedisSerializer()
        redisTemplate.setKeySerializer(RedisSerializer.string());
        // 设置value的序列化方式json，使用GenericJackson2JsonRedisSerializer替换默认序列化，RedisSerializer.json() 等价于 new GenericJackson2JsonRedisSerializer()
        redisTemplate.setValueSerializer(RedisSerializer.json());
        // 设置hash的key的序列化方式
        redisTemplate.setHashKeySerializer(RedisSerializer.string());
        // 设置hash的value的序列化方式
        redisTemplate.setHashValueSerializer(RedisSerializer.json());
        // 使配置生效
        redisTemplate.afterPropertiesSet();
        return redisTemplate;
    }
    
}
```
该类主要用于配置key-value序列化和反序列化。
### 创建单元测试类RedisTest
``` java
@RunWith(SpringRunner.class)
@SpringBootTest
public class RedisTest {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Test
    public void test() {
        UserDO userDO = new UserDO();
        userDO.setId(1L);
        userDO.setName("cici");
        userDO.setAge(18);
        userDO.setEmail("cici@qq.com");
        redisTemplate.boundValueOps("userKey").set(userDO);

        UserDO rs = (UserDO) redisTemplate.boundValueOps("userKey").get();
        System.out.println("rs = " + rs.toString());

        UserDO rs2 = (UserDO) redisTemplate.opsForValue().get("userKey");
        System.out.println("rs2 = " + rs2.toString());
    }
}
```
## 总结
本文主要介绍了springboot3如何整合Redis以及使用它的简单使用。Redis一些常见的应用场景如下：

缓存
利用Redis快速的读写速度，可以将热点数据放入Redis中，应用从Redis中读取数据，可以大幅提高访问速度和性能。

消息队列
Redis的List结构可以作为消息队列使用，生产者向List尾部推送消息，消费者从List头部弹出消息。

计数器
Redis的字符串和哈希都可以用作计数器，对数字型数据进行自增自减操作。

排行榜
Redis的有序集合可以实现排行榜功能，插入元素时指定评分，就可以获得评分排序后的结果。

会话缓存
可以将会话信息放入Redis中，当需要会话数据时直接从Redis读取，无需去数据库查找。

分布式锁
利用Redis的SETNX命令可以实现分布式锁。

其它
Redis还可以实现发布/订阅、原子增量、地理空间索引等更复杂的模式。