---
sidebar_position: 0
slug:  webpack知识图
title:  webpack知识图
authors: duxinyues
tags: [配置]
---

现在的前端，出现很多种可以提高开发效率的工具和框架，但是源码却不能直接运行，只有通过转换之后才能正常运行。

那么构建就是把源码转化为可以执行的JavaScript、HTML和CSS代码。

构建包含：

1. 代码转换【比如typescript编译为JavaScript，scss编译为CSS】；
2. 文件优化，比如压缩JavaScript，压缩合成图片；
3. 代码分割，提取公共代码，提取首页不需要执行的代码让它异步加载；
4. 模块合并，把模块分类合并成一个文件；
5. 自动刷新，监听本地源码的变化，自动重新构建、刷新浏览器；
6. 代码校验
7. 自动发布。

## webpack

webpack是一个打包模块化JavaScript的工具，通过loader转换文件，通过Plugin注入钩子，最后输出文件。


webpack专注于构建模块化项目。优点是：

1. 能做到开箱即用，一步到位；
2. 通过Plugin扩展，灵活
3. 使用的场景广泛
4. 社区活跃，可以找到很多场景下的开源扩展
5. 有良好的体验

webpack也有缺点，就是只能用于采用模块化开发的项目。


## webpack配置

1、 首先安装webpack和webpack-cli；
2、 创建基础的JavaScript文件盒HTML，代码如下：

index.html：

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="root"></div>
    <script src="./dist/bundle.js"></script>
</body>

</html>
```

工具函数的JavaScript文件index.js:

```
function show(content){
    window.document.getElementById("root").innerText = "Hello，" + content
}

module.exports = show;
```