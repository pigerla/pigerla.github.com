---
layout: post
category : 初学Foundation
permalink : foundation-for-beginners/2013-10-30/getting-started/
tagline: "Supporting tagline"
tags : [Foundation入门]
---

原文标题：[Foundation for Beginners: Getting Started](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-getting-started/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-06-05

对于很多传统Web开发，每次从零开始开发一个工程项目都是必经之路；当每个工程项目都是不一样的时候，去创建一个可重用的代码库却是一件非常棘手的事情。许多有经验开发者可能更愿意花时间去创建一些前端框架，然而这却又是一件巨大的任务，更不用谈维持最新的框架及最佳实践。

<!--break-->

眼看每个程序员的需求，明显地，开发者是非常需要那些开源的、稳定的、可扩展性的和（最重要的）有齐全的文档说明的代码。关系到工程的大小，一个CSS网格系统可能已经满足（使用），如果你有选择地添加或者删除函数方法去满足你的需求岂不是更好吗？在本章中，我们将学习一个叫[Foundation](http://foundation.zurb.com/)可自定义的前端框架。

如果想创建一个类似Foundation的框架，是需要在细节上正确地处理。因此接下来几周时间，我将会全方面地介绍涵盖包括“开始入门”、“定制构建”等专题，讲解这么特殊的框架技术支撑来源的方方面面。更重要的是，我将举一些例子来说明Foundation前端框架是怎样能够更好地满足、适应你将来开发的web事业。


![foundation-1-hand](http://pigerla.com/assets/images/20131030/foundation-1-hand.png)

## Foundation是什么？ ##

Foundation由很多针对于响应式开发、非常有用工具的组成，以移动终端优先的一个前端开发框架。基于HTML,CSS和jQuery创建，Foundation运用上现代前端技术与最佳实践，但也只能优雅降级到IE8。虽然这是HTML和CSS开发者最常用的框架，但是你还是有选择地使用与[Sass](http://foundation.zurb.com/docs/sass.html)和[Rails](http://foundation.zurb.com/docs/rails.html)配合使用的Foundation来做一些更加深入、有趣的事情。

![foundation-1-2](http://pigerla.com/assets/images/20131030/foundation-1-2.jpg)

开发Foundation的公司叫[ZURB](http://zurb.com/)，已经为开发者和设计者创建了一套高效率的工具集。每个模块作为一个整体的框架一部分，都有其作用，但同时也可以独立完整地运行。换句话说就是，你可以在工程中混合和配合这些模块特点，或者作为一个单一功能添加到以前的工程当中。你还可以把她当作一个功能插件添加到另外一个框架当中。

总的来说，这是一个时下流行的框架适用于大部分开发者。Foundation提供一系列好的功能集合，并且完全是免费的，还有不断地发展壮大的社区，可以帮助你解决学习过程中遇到的问题。

## 为什么你应该使用Foundation？ ##

现在有很多开发者都普遍地利用框架（为什么要重造轮子呢？），这些框架在创造者手中已经变得臃肿，因为试图覆盖在一个特定环境中的每一个事件。一旦像一个平滑、轻量工具开始工作，可以增长为成百上千的`http`请求和就好比一个解散的合唱团一样，这都取决于你的需求。

`Foundation`包含一系列的方法与特征。在以百分比为基础流网格系统上创建的，使用以`jQuery`封装好的滑动条，一个轻盒子插件，还有大胆想象的`HTML`元素，而且这则切都是基于为移动终端为先的准测。你完全可以创建自定义、使用jQuery插件来增强`input`元素某些效果的`form`，下拉菜单和多选按钮，这也意味着你很容易地添加自定义样式。同时，这框架让你选择性地通过使用移动终端网格布局、添加灵活性来设置自定义移动终端布局，以致真正地使自己工程项目在移动终端和电脑上实现响应式。

![foundation-1-mobile](http://pigerla.com/assets/images/20131030/foundation-1-mobile.png)

Zurb团队在版本4中重新编写很多很多的核心函数方法来适应相当广泛地使用案例。代码保持精简和相应的地方有必须的注释。可以直接地添加、删除或者裁剪相应地函数来适应你的需求。

用户正在使用地版本3也是可以从一个[迁移文档](http://foundation.zurb.com/migration.php)来更新安装，或者，如果他们愿意的话，还可以继续使用版本3而不用跳到版本4。

## 下载一个自定义的Foundation ##

Zurb官网上有一个网页是允许你预先选填自定义的功能、样式来满足自己的需求即可，然后再把此Foundation导出下载到本地上使用。例如，你只是需要一个`CSS网格布局`，好，那你只是需要去掉勾选 `everything except “grid”`的按钮，然后填入你的其他工程需要，如标签和按钮，之后就可以得到你想要的了。再或者，你不管三七二十一，全选所有提供的功能、样式，然后只需要点击一下按钮就可以使用了。框架还允许自定义默认的CSS颜色甚至一些关键宽度值，如最大宽度。

![foundation-1-custom](http://pigerla.com/assets/images/20131030/foundation-1-custom.png)

尽管这是非常方便的，但它依然是一种形式，而且我觉得还有可以改进的地方。理想地，我希望看到可能是一些可视化的`HTML`样板的过程。同时，版本4使用`em`作为长度单位并且[em是font-size主单位](http://hub.tutsplus.com/articles/taking-the-erm-out-of-ems--webdesign-12321)它会看起来很直观,包括`像素到em`计算器，只是使得放缩更加容易而已。

点击前往[http://foundation.zurb.com]( http://foundation.zurb.com )，然后点击首页下面一个大大的`Download`按钮，然后就跳转到一个可以让你在此框架上选择自定义风格、功能，在你不需要的地方去掉勾选，填入自己想要各种颜色，还有可以设置断点宽度、最大宽度、间距甚至选择多少网格列数。

[![foundation-1-homepage](http://pigerla.com/assets/images/20131030/foundation-1-homepage.png)](http://cdn.tutsplus.com/webdesign.tutsplus.com/uploads/2013/06/foundation-1-homepage.png)

到目前为止，我们了解到Foundation所提供的关键特点与各方面便利之处，并且学习了如果下载自定义的Foundation，你现在已经有了一个下载好的Foundation，那么开始尝试更多学习与使用它，如果你在此过程中遇到困难，别担心，你可以在[文档](http://foundation.zurb.com/docs)这里找到大部分的答案，再不行就可以在此文章下面评论提出问题。

## 下一篇预告 ##

在下一篇我们将开始使用网格系统，主要讲导航栏、选项卡、按钮和一些关键UI元素。我们还会讲当你使用Foundation作为你的工程框架时，增强你自己开发的有用工具。













