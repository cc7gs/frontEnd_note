---
title: 中间固定 两边自适应
nav:
  title: 面试汇总
  path: /interview
group:
  title: html篇
  path: /html
---

# 中间固定 两边自适应

描述：现在有三列 a、b、a;其中它们高度一定、b 宽度 200px,让 a 自适应 该如何做？

## float +负 margin

```html
<section class="layout-float">
  <style>
    .layout-float {
      min-height: 200px;
    }

    .layout-float .left,
    .layout-float .right {
      float: left;
      width: 50%;
      height: 200px;
      background-color: blue;
    }

    .layout-float .left {
      margin-left: -35px;
    }

    .layout-float .right {
      float: right;
      margin-right: -35px;
    }

    .layout-float .center {
      float: left;
      width: 70px;
      height: 200px;
      background-color: red;
    }
  </style>
  <article>
    <div class="left">left</div>
    <div class="center">center</div>
    <div class="right">right</div>
  </article>
</section>
```

## flex 布局

```html
<section class="layout-flex">
  <style>
    .layout-flex > .left-center-right {
      display: flex;
      min-height: 200px;
    }
    .layout-flex .left {
      flex: 1;
      background-color: orange;
    }
    .layout-flex .right {
      flex: 1;
      background-color: orange;
    }
    .layout-flex .center {
      width: 70px;
      background-color: blue;
    }
  </style>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">center</div>
    <div class="right"></div>
  </article>
</section>
```
