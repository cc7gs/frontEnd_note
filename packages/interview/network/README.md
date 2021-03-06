---
title: 网络相关知识
order: 1
nav:
  title: 面试汇总
  path: /interview
group:
  title: 网络 
  path: /network
---

## 基础知识
1. 关于五层模型

应用层 -> 传输层 --> 网络层 --> 数据链路层 --> 物理层

2. http三次握手

client          server
SYN=1,Seq=x      SYN=1,ACK=x+1,Seq=Y
ACK=Y+1,Seq=Z

解决网络延迟，服务器无用的等待。

3. cors
   1. 首先跨越请求是发送出去了，是在浏览器将响应拦截了。
   2. 在服务端配置 Access-Control-Allow-Origin 可以解决跨越问题
   3. 何时触发预请求？
      1. 请求不为：post、get、head
      2. 请求包含 header
      3. Content-type值不是以下几种：text/plain、mutipart/form-data、application/x-www-form-urlencoded
      4. 不携带cookie

```javascript
  res.writeHead(200,{
        "Access-Control-Allow-Origin":"http://localhost:8888",
        "Access-Control-Allow-Headers":"*",
        "Access-Control-Allow-Methods":"PUT、Delete"
    })
```

4.  内容安全策略(csp)
    1.  作用    
        1.  限制网页资源获取
        2.  报告资源获取越权
    2. 类型
   content-security-policy有如下类型：
    - connect-src
    - font-src
    - frame-src
    - style-src
    - script-src
    - manifest-src
    - img-src
5. https 四次握手
client                   server
 客户端随机数       -->    接受随机数
 接受服务端随机数    <--    服务端证书
 服务端证书

 生成预密钥     --->        加密的预密钥通过私钥解密

 生成主密钥     <---加密数据传输-->      生成主密钥





