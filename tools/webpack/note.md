# webpack 是什么?
本质上webpack是一个现代javascript应用程序的静态打包工具。
其它基础概念,查看[官方文档](https://webpack.docschina.org/concepts/)
# webpack 基础篇
## loader
webpack 只能理解javascript和json文件。loader可以让它能够处理其他类型的文件，并将其转换有效模块。

### filer-loader & url-loader
两者主要功能都是对加载资源进行打包,但是 url-loader设置资源大小来对小资源进行打包js内，来减少网络带宽
```javascript
 module: {
    // rules: [
    //   { 
    //     test: /\.(png|jpg|gif)$/, 
    //     use: {
    //       loader:'file-loader',
    //       options:{
    //         name:'[name].[ext]'
    //       }
    //     }
    //    },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              limit:138228  //资源大小
            }
          }
        ]
      },
    ]
  },
```
***:**最终在浏览器端可以看到打包后得资源路径变为 'data:image/png;base64...'
### style打包
**安装**
> npm i style-loader  css-loader -D

**使用**
```javascript
{
  test:/\.css$/,
  use:[
    "style-loader",
    {
      loader:"css-loader",
      options:{
        importLoaders:2  //保证import 引入得样式会执行所有loader,
        modules:true  //样式模块化
      }
    }
    ]  //注意loader 顺序
}
```
css-loader 用户处理.css 文件，style-loader用于对样挂在标签上。
注意loader顺序， loader是从下到上 从右到左开始加载。
### 字体打包
file-loader 和 url-loader 可以接收并加载任何文件也包括字体.
```javascript
{
  test:/\.(eot|svg|ttf|woff)$/,  //打包字体
  use:["file-loader"]
 },
```
## plugin
可以在webpack 运行到某个时刻帮我们做一些事情比如:打包优化、资源管理、注入环境变量等。
- html-webpack-plugin
  -  会在打包结束后,自动生成一个html文件,并把打包生成的js自动引入到这个html文件中.
- clean-webpack-plugin
  - 在打包之前,帮助我们删除dist目录
```javascript
  plugins:[
    new cleanWebpackPlugin(), //预先清理
    new htmlWebpackPlugin({
      title:'html plugin demo',
      template:'index.html'
    })
  ],
```
## 开发环境(devtool)
**sourceMap:**
它是一个映射关系,可以找到打包后代码位置在打包前哪个位置.
**配置**
```javascript
devtool:'source-map' //production 环境默认配置
```
### 其它参数
- cheap-module-eval-source-map
  - 适合 dev环境
- cheap-module-source-map
  - 适合开发环境

 **记忆技巧**
- *-source-map
  参数中带有 source-map的则都具有映射关系,打包后会生成.map文件
- inline-*
  参数中带有 inline 的,会将.map文件和并到打包文件中.
- cheap 
  - 提示行不提示具体那一列出错,不提示module(第三方模块)里的错误
- module
  - 带有modlue 的则会提示引入模块错误信息.
- eval
  - 通过eval 生成source-map引入.  
## webpackDevServer
它帮我们启动一个简单web server,并有实时重新加载功能.
> npm i webpack-dev-server -D

```javascript
devServer:{
  port:8080, //启动端口号
  contentBase:'./dist', //从什么位置查找文件
  open:true, //自动打开默认浏览器,并访问服务
  proxy:{ //跨域代理
    '/api':'http://localhost:3000'
  }
}
```
### webpack-dev-middleware
webpack-dev-middleware 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。

> npm install wepack-dev-middleware --save-dev

**根目录新建server.js**
```javascript
/**
 * 实现类似 devServer服务,作用:1.监听文件改变
 * 1. 检测文件改变'
 * 2. 读取webpack conifg 文件
 * 3. 启动一个服务
 * */
const express=require('express');
const webpackDevMiddleware=require('webpack-dev-middleware');
const webpack=require('webpack');
const config=require('./webpack.config.js');

const complier=webpack(config);
const app=express();

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(complier,{
  publicPath:config.output.publicPath
}));
app.listen(3000,()=>{
  console.log('server at port 3000');
})
```
**package.json**
```
  script:{
    "server":"node server.js"    
  }
```
**启动server**
> npm run server
## 模块热替换(hot module replacement)
它会在应用程序运行过程中,替换、添加或删除模块，而不需要重新加载整个页面。
  - 保留在完全重新加载页面期间丢失的应用状态
  - 只更新变更内容
  - 在源码对css/js进行修改，会立即在浏览器中进行更新
 ```javascript
const webpack=require('webpack');
 devServer"{
   hot:true, //启动热替换
   hotOnly:true //当 hot不起作用时，浏览器也不会重新
 }
 plugins:[
   new webpack.hotModlueReplacementPlugin()
 ]
 ```
# webpack 提示篇