---
title: BFC
nav:
  title: 基础篇
  path: /basic
group:
  title: css基础篇
  path: /css-basic
---



# 什么是BFC？
了解`BFC`之前需要先了解**格式化上下文**。

## 格式化上下文

它是 css2.1规范提出的概念,定义的是页面中的一块渲染区域，类似js语言中的“作用域”。格式化上下文分为两种:块级格式上下文（BFC）与内联格式化上下文(IFC).

## BFC简介

BFC(Block Formatting Context)是Web页面中盒模型布局的CSS渲染模式。它的定位体系属于常规文档流。摘自W3C：
>浮动，绝对定位元素，inline-blocks, table-cells, table-captions,和overflow的值不为visible的元素，（除了这个值已经被传到了视口的时候）将创建一个新的块级格式化上下文。

1）形成条件

一个BFC是一个HTML盒子并且至少满足下列条件中的任何一个：
- 根元素或包含根元素的元素
- 脱离普通文档流的元素
  - float的值不为none
  - position的值不为static或者relative
- 非块级元素
  - display的值为 table-cell, table-caption, inline-block, flex, 或者 inline-flex中的其中一个
- overflow的值不为visible

2）产生的影响
- 同一个BFC内的相邻块级元素的垂直外边距发生重叠,即两者外边距取决于两者双方边距的最大值。
- BFC 是页面上隔离的独立容器，内部元素不会与外部元素互相影响
- 计算BFC高度时,内部的浮动也会被计算在内

**具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。**

## BFC可以的解决问题

###  消除浮动

**清除浮动**
```html
<style>
.box {
  background-color: rgb(224, 206, 247);
  border: 5px solid rebeccapurple;
  display: flow-root; //它可以创建无副作用的BFC
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border:1px solid black;
  padding: 10px;
}  
</style>
<div className="box">
  <div className="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
  
```
### 防止文字环绕
```html
<div class="container">
  <div class="floated">Floated div</div>
  <p>Quae hic ut ab perferendis sit quod architecto,dolor debitis quam rem provident aspernatur tempora expedita.</p>
</div>
<style>
.container{
  width: 150px;
  background-color: green;
}
.container::after{
  content: ' ';
  border:1px solid red;
  visibility: hidden;
  display: block;
  clear: both;
}
.floated{
  float: left;
  background-color: red;
}
.container p{
  overflow: hidden;
  background-color: aqua;
}
</syle>
```
### 外边距塌陷
创建新的BFC避免两个相邻 <div> 之间的 外边距合并 问题

```html
<style>
  .blue, .red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden; //让其处于BFC
  background: red;
}
.red-inner{
  background: gray;
}
</style>
<div class="blue"></div>
<div class="red-outer">
  <div class="red-inner">red inner</div>
</div>
```
