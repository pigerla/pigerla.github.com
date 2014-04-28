---
layout: post
category : 阅读文档笔记
permalink : learn-note/2013-06-20/improving-website-performance-with-Page-Speed/
tagline: "Supporting tagline"
tags : [web前端, 性能优化, PageSpeed]
---

说明 ：阅读了“ [Improving website performance with Page Speed](https://developers.google.com/speed/articles/identifying-page-speed-problems "进入官方文档") ”之后，按照个人理解，同时也尝试翻译文章，但不会100%的照搬翻译，会有所删减。

## 1. Page Speed是什么？

Page Speed是Firefox浏览器和Chrome浏览器中的一个插件，作用就是评估（当前）页面的性能并且能够根据评估结果，给出如何去改进、提升页面性能的建议或方法。
<!--break-->

## 2. 如何安装Page Speed？

在这里我用的测试环境是Chrome浏览器，自然安装了Chrome的Page Speed插件。如何安装此插件？打开“ Chrome网上应用店 ”，进去之后在搜索栏输入“ Page Speed ”进行搜索，并在搜索结果中找到“ PageSpeed Insights ”,点击“ 添加至Chrome ”即可自动安装,完成之后可以浏览器的标签栏右侧上方即可看到图标。

[![Page Speed的Chrome插件](http://pigerla.com/assets/images/20130620/PageSpeed.jpg)]

## 3. 为什么要用Page Speed？

在没有改变页面的表现样式和相应功能、作用的前提下，现在的网页页面都是有很大的余地被修改、完善以致页面占得流量大大减少。这样做可以使得加载网页的速度加快，换句话说，网页甚至整个网站的性能也随之提高了不少，此外，还给了访客一个很好的体验。而插件Page Speed就是可以评估你要测试的当前网页，然后会根据评估结果，首先给出一个评估总分（满分100），体现出当前网页的性能如何，分数值越高表示性能良好，可修改度、完善度不高，但是，分数值越低就要引起注意了，说明网页性能偏低，需要修改多项之处，力求性能提高起来。Page Speed比较好用也易懂，它会把评估结果，列项出来，把不同问题归为不同项去，并且标题明显、区分度很高,点击每一项都会有相应改进的建议与方法。

## 4. 为网页“减肥”的3个方法

+ **压缩图片**

嵌在页面中的图片往往给予人们更加直观形象的信息，人们还可以图片读出更多的信息。有句话说，“一图胜万句”，说的就是这么一个道理。但是，放在页面这个大背景下，图片大小相对其他方面，比如文字来说，是很大的。特别是，如JPEG格式的图片就包含一些制作此图片工具的信息，PNG可以改用其他编码格式来“瘦身”，这些图片都可以进行压缩以减小信息量。压缩之后的图片看起来的效果跟原来的一模一样，好处就是图片变小了，图片得到了优化，即从这方面提升了页面性能。

Page Speed在评估的过程中，就把有必要压缩的图片进行压缩，并在建议与方法中，提供了压缩后的图片，点开图片链接之后在另存为同名的图片即可，再用这些图片替换掉原来的图片，这样就完成这项修改、完善工作。【提醒一下 ：替换之前可以先备份原来的图片】

+ **压缩JavaScript文件**

去掉JavaScript文件中的注释和空格可以使得文件变小，但又没有改变JavaScript文件的函数、功能，这个操作成为“压缩”。同样地，Page Speed提供了一个压缩后的较小的JavaScript文件的外链，在这里需要注意的是，在保存压缩后的JavaScript文件时，建议命名格式为" XXXX.min.css ",其中 XXXX 为JavaScript文件名，而“min”有小的意思。此命名格式也是较为规范的，较为公认的，行内人一看就知道是什么意思。然后，要记得在HTML文件里面修改对应的JavaScript文件名！否则就不起作用了>_<！

其实我们还应该保存原JavaScript文件在项目工程中，因为只有这样，在你将来需要修改它的时候就可以很方便的修改，因为有注释与格式嘛，易于维护。或者你会问：更新了原文件有什么作用？要更新XXXX.min.js才有用嘛。是的，这也是我接下来要说的内容。有很多软件工具可以将JavaScript文件进行压缩的，如YUICompressor等，但是要注意的是，压缩后自动生成的格式可能有所不同。我的方法就是平时我使用Sublime Text来编写代码的，用Sublime Text的好处有很多，就说一个，就是插件多而全、也好用。压缩JavaScript文件的插件为“ JS Minifier ”,在打开Sublime Text之后按“Shift+Ctrl+p”即可打开命令面板，在输入栏输入" pi "选择" Package Control:Install Package",点击进入另外一个命名面板上搜索“ JS Minifier ”，点击可以在Sublime Text中安装成功！打开JavaScript文件之后，例如我的，快捷键“ Ctrl+Alt+M”压缩Js代码、“ Ctrl+Alt+Shift+M”压缩Js并生成压缩文件XXXX.min.js。

+ **删除没有用的CSS**

CSS文件包含了很多样式属性，从而控制页面中每个元素的样式表现。但是，如果有一个或者多个属性是没有对任何一个元素起作用的话，就可以删除掉来减小“体积”，浏览器端加载CSS文件就可以更快，页面成型也就更快。在这里需要注意、留个心的是，某个CSS文件可能不仅被当前页面所使用，还被其他页面使用着，这时候删除就要小心翼翼、瞻前顾后的了。除了删除，CSS文件还是就像JavaScript文件一样，同样可以被压缩的，去掉注释与空格。那么，如何得到压缩后的文件？跟上面一类似，除了用Page Speed
提供压缩CSS文件之外（要记得在HTML文件里面修改对应的CSS文件名！）这一方法，我也是用Sublime Text插件——YUICompressor的，接下来就不解释了，请自行安装、使用。

## 5. 还有更多使得网页更快的方法...

以上3个方法只是当例子来说明如何去优化网页，提高网页的性能。同时，Page Speed可以给我们的网页提出很好的建议与解决方法，若好好利用它，养成优化网页的习惯，相信你的网页或者是网站访问起来更快，更顺畅，给予访客很好的用户体验，踏出成功的一步！

想了解更多，请看[Page Speed - Minimize payload size](https://developers.google.com/speed/articles/identifying-page-speed-problems).
