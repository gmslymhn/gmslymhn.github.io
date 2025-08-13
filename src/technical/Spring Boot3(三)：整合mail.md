---
# 🏷️ 基础信息
title: "Spring Boot3(三)：整合mail"   # 【可选】用于导航栏/侧边栏显示的简短标题
description: "本篇文章主要介绍如何在springboot3中整合mail，列举几个发送邮件的功能。" # 【SEO优化】用于搜索引擎显示的描述
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
tag: ["SpringBoot"]      # 多个标签用数组表示

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
cover: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0262f924df42b03dd9c2ca06181a8d9e1d47513a46f1aa04ee3687d9af01096206ef844b58c9608ee74b0e38f3f29ca6?pictype=scale&from=30013&version=3.3.3.3&fname=2024-08-23trVib.png&size=750"  # 文章卡片封面图（建议尺寸：1200×600）

---
本篇文章主要介绍如何在springboot3中整合mail，列举几个发送邮件的功能。
<!-- more -->
## 整合mail
## 工程代码
### 引入pom依赖
``` xml
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```
### 配置文件
#### 邮件配置：
``` yaml
spring:
  mail:
    # 你的邮箱，发邮件的邮箱
    username: 123456789@163.com
    # 你的授权码，邮箱里面设置->POP3/SMTP/IMAP
    password: -----------------
    host: smtp.163.com

# Logger Config
logging:
  level:
    com.hexadecimal: debug
```
1.uername填写你的发件人邮箱。
2.password设置你的邮箱授权码，路径：设置->POP3/SMTP/IMAP。
3.host填写邮件服务器配置，每个邮箱品牌的配置都不一样，在邮箱设置中可以找到。
4.配置项目的日志级别为debug。
## 创建邮件模板
在resources/templates目录下创建邮件模板文件mail_template.ftl，内容如下：
``` html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="email code">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div style="background-color:#ECECEC; padding: 35px;">
      <table>
        <tbody>
          <tr>
            <td style="word-break:break-all">
              <div style="width:100%;margin:0 auto;">
                <div>
                  <p>测试模板邮件</p>
                  <p>{0}</p>
                  <p>{1}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
```
## 创建工具类MailUtil
``` java
@Component
@Slf4j
public class MailUtil {
    @Value(value = "${spring.mail.username}")
    private String from;

    @Autowired
    private JavaMailSender mailSender;

    public void sendSampleMail(String to, String subject, String context) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(context);
        mailSender.send(message);
    }

    public void sendAttachmentMail(String to, String subject, String context, String attachmentName, String filePath) throws Exception {
        //创建一个复杂的消息邮件
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        helper.setFrom(from);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(context);

        //上传文件
        helper.addAttachment(attachmentName, new File(filePath));
        mailSender.send(mimeMessage);
    }

    public void sendTemplateMail(String to, String subject, String templatePath, String... arguments) throws Exception {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        helper.setFrom(from);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(this.buildTemplateContext(templatePath, arguments), true);
        mailSender.send(mimeMessage);
    }

    private String buildTemplateContext(String templatePath, String... arguments) {
        //加载邮件html模板
        Resource resource = new ClassPathResource(templatePath);
        InputStream inputStream = null;
        BufferedReader fileReader = null;
        StringBuffer buffer = new StringBuffer();
        String line = "";
        try {
            inputStream = resource.getInputStream();
            fileReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
            while ((line = fileReader.readLine()) != null) {
                buffer.append(line);
            }
        } catch (Exception e) {
            log.info("读取模板失败:", e);
        } finally {
            if (fileReader != null) {
                try {
                    fileReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        //替换html模板中的参数
        return MessageFormat.format(buffer.toString(), arguments);
    }
```
1.sendSampleMail方法实现简单发送邮件。
2.sendAttachmentMail方法实现带附件发送邮件。
3.sendTemplateMail方法实现按模板发送邮件。
## 创建单元测试类MailUtilTest
``` java
@RunWith(SpringRunner.class)
@SpringBootTest
public class MailUtilTest {
    @Resource
    private MailUtil mailUtil;

    /**
     * 测试简单邮件发送
     */
    @Test
    public void testSendSampleMail() {
        mailUtil.sendSampleMail("676981627@qq.com", "测试发送简单邮件", "hello world.");
        System.out.println("******执行发送简单邮件成功******");
    }

    /**
     * 测试带附件邮件发送
     */
    @Test
    public void testSendAttachmentMail() throws Exception {
        mailUtil.sendAttachmentMail("676981627@qq.com", "测试发送附件邮件", "hello world.", "preview.jpg", "/Users/jed/preview-test.jpg");
        System.out.println("******执行发送附件邮件成功******");
    }

    /**
     * 测试模板邮件发送
     */
    @Test
    public void testSendTemplateMail() throws Exception {
        mailUtil.sendTemplateMail("676981627@qq.com", "测试发送模板邮件",  "templates/mail_template.ftl", "展示效果1", "展示效果2");
        System.out.println("******执行发送模板邮件成功******");
    }

}
```
## 总结
本文主要介绍了springboot3如何整合邮件mail，举例展示了它的一些发送邮件的功能，更多功能实现可自行参考spring官网。