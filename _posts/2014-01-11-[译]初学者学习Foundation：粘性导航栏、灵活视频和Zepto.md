---
layout: post
category : 初学者学习Foundation
tagline: "Supporting tagline"
tags : [Foundation入门]
---

原文标题：[Foundation for Beginners: Sticky Navigation, Flexible Video and Zepto](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-sticky-navigation-flexible-video-and-zepto/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-08-15


在这一部分我们将学习一种样式不定的插件[Magellan](http://foundation.zurb.com/docs/components/magellan.html)，这插件可以为你的网站创建出如粘性的导航栏。还会学习可见性class,从右到左的支持、按键、缩略图、灵活的视频功能和zepto的来龙去脉。我将详细解释用到的例子，并且讲解如何更好地在你的项目中实现这些特性。

<!--break-->

在此章节中，会涉及到Foundation前端框架大部分内容知识，而且我们依然还需要继续学习下去。现在，让我们来看看一些可以让你在项目快速实现的特性。先从Magellan插件开始，这个插件的主要作用就是添加、创建粘性的导航条（何为粘性？就如当你滚动网页时，一旦要抵触到导航条指定位置，该导航条就站在页面某个位置，一般在页面顶部，状态就如position：fixed。）

## Magellan ##

当用户远离标准导航栏时，是很需要导航栏固定在页面某个位置，方便导航自己，这是非常普遍的。Magellan就是为解决这个而来，当用户滚动页面到指定位置时，就会添加固定住的导航栏。


[magellan](http://pigerla.com/assets/images/20140111/magellan.png)

通过下面代码即可快速开始。

    <div data-magellan-expedition="fixed">
      <ul class="sub-nav">

	    <li data-magellan-arrival="contact"><a href="#">Contact</a></li>
	    <li data-magellan-arrival="about"><a href="#">About</a></li>
      </ul>
    </div>

创建一个div，包含一个列表结构等所有东西，这样子快速搭建并可以运行起来了。Magellan有两种指定属性：`data-magellan-expiditon`用作定位类型 和 `data-magellan-arrival`用作动态展示页面描点。

因此说，这是一个轻量级插件，你需要清除一些初始化配置。
    
    $(document).foundation('magellan',{
      // specify the class used for active sections
      activeClass: 'active',
      // how many pixels until the magellan bar sticks, 0 = auto
      threshold: 0
    });
    
上面代码演示了两个配置选项，可以设置定制magellan类和设置位置点来激活magellan效果。

## 可见性 ##

现在你可看到它，现在却不了！可以在不同尺寸屏幕中切换你所有的内容。使用Foundation可见性的类，可以在不同地断点集中简单地显示某些元素。如下面列出所以“show”类，我发现使用这个功能可以方便我正打算在智能手机与PC端页面添加或者移除元素，例如像ipad的设备。

    .show-for-small   /* Visible up to 768px */
    .show-for-medium-down /* Visible from 768px down */
    .show-for-medium  /* Visible between 768px and 1280px */
    .show-for-medium-up   /* Visible from 768px up */
    .show-for-large-down  /* Visible from 1280px down */
    .show-for-large   /* Visible between 1280px and 1440px */
    .show-for-large-up/* Visible from 1280px up */
    .show-for-xlarge  /* Visible above 1440px only */

相反地，如何隐藏掉元素呢，只需要把上面的“show”换成“hide”即可。或者你还需要基于横屏或竖屏的类，还有可触摸的设备，见如下代码示例：

    .show-for-landscape   /* Visible for landscape orientation */
    .show-for-portrait/* Visible for portrait orientation */
    .hide-for-landscape   /* Hidden for landscape orientation */
    .hide-for-portrait/* Hidden for portrait orientation */
    /* The touch detection classes */
    .show-for-touch   /* Visible for touch enabled devices */
    .hide-for-touch   /* Hidden for touch enabled devices */

这就很方便你在小屏幕中去除一些元素，相反地，在大屏幕中显示更多的元素。

## 支持RTL（从右到左） ##

由于没有人真正提到从右到左的支持，我想介绍这块知识。

[ rtl](http://pigerla.com/assets/images/20140111/rtl.png)

如果你有一个国际项目与一个(例如)阿拉伯语为中心的用户基础，这是非常有用的。波斯文是需要从右到左显示的文本，例如上图是BBC网站上显示一样，实现这样的效果可能需要一支团队支持，但在Foundation，已经都为你准备好了。

    <html class="no-js" lang="ar" dir="rtl">

如上面代码演示，如上地替换html头，等等，我知道你在想什么，你是在想:我都不需要阿拉伯文，对吧？ 别担心，一样支持中文，缩写为zh;波斯文（Fasi），缩写为fa；希伯来语（Hebrew），缩写为he/iw；日语，缩写为ja；乌尔都语（Urdu），缩写为ur；意第绪语（Yiddish），缩写为yi/ji，你只需要改变“lang”的值成你想要支持的语言就行了。

## 按键响应 ##

我猜你们很多都下载了Foundation源码，并用过按键多选框，只是你们并不知道这是什么而已，猜对了吧？好，如果你还没开始去看官方文档，那你可以在这里开始学习。

[ kbd](http://pigerla.com/assets/images/20140111/kbd.png)

按键标签包含文本并作为一个关键字来显示，因此，你可以这样显示并赋予一些含义，而不是单纯用枯燥文字说出按下control, alt 和 delete键。

    <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>del</kbd>

简洁却是高效的，尤其当你想把特定功能赋予一些按键上，如把方向按键来控制orbit滑动条。

## 缩略图 ##

缩略图一种快速途径来组织有锚点的小图片。
[thumbs](http://pigerla.com/assets/images/20140111/thumbs.png )

如何实现这种效果？ 在标签`<a class="th">`内添加<img>标签，即添加图片，如下代码演示：

    <a href="#" class="th" >
    	<img src="images/funkyTown.jpg" alt="Get down to funky town" />
    </a>

## 灵活的视频功能 ##

内嵌一个视频可能会是一种痛苦，尤其是老版基于flash视频播放器，需要设置很多属性来使得视频也变得响应式，反正是件麻烦的事。你的目标是简单的，你想要添加你最喜欢的欢笑猫猫的视频在你的网站上，有可能是很困难的，或者是每天晚上睡觉之前你想用手机观看时被关闭了，再或者是在每天早上上厕所的时候。使用灵活的视频功能，你就可以松了一口气，然后欣赏欢乐猫猫视频了。

在`<div class="flex-video">`内包含如何来自著名网站（如youtube或Vimeo）的视频，然后此功能就会保持长宽比,缩放视频和防止严重变形了。

    <div class="flex-video">
    <iframe width="420" height="315" src="//www.youtube.com/embed/RcVyl9X3gFo" frameborder="0" allowfullscreen></iframe>
    </div>

## Zepto ##

在每个Foundation框架里面都包含一个特定的javascript库，为“zepto”，就好像jQuery一样，不过较为轻量级。

[foundatioin-zepto.png](http://pigerla.com/assets/images/20140111/foundatioin-zepto.png ) 

在页面加载Foundation，看看zepto能否运行，如果能，那么是jQuery发送出这一步。现在的问题是，zepto还没有完全可以取代jQuery的，事实上，它也大概只有7100行代码而已，所以说是比jQuery轻量级的，同时，这也是为什么Foundation不使用jQuery而使用zepto.js的原因。

zepto拥有足够jQuery功能集来应付所有Foundation基础命令。在以手机优先的前端框架中使用一个轻量级的js库是一种明智的选择，好处就是便于在手机上更快加载，减少加载时间。这些额外的7100行代码并没有冗余，因为实现所有的动态效果和兼容浏览器和满足其他方面需求。

我本身就是一个依赖jQuery动画的使用者，因此我打算不使用zepto.js。但是，最近我开发一个以手机优先但不要求任何jQuery动画功能；使用zepto可以减少2.3秒加载时间。所以，从自己需求出发， zepto也是不错的代替。


## 有用的工具 ##

当用户访问你的站点出现错误时，可以给用户一些事做，如404入侵游戏！

[404](http://pigerla.com/assets/images/20140111/404.png) 

使用你的箭头键来控制枪，` <kbd>A</kbd> & <kbd>S</kbd>`来移动和`<kbd>space</kbd>`来开枪。

## 下一篇预告 ##

下一篇文章我们将学习SASS，如何获得Foundation的SASS版本并搭建起来，还有一些你将需要的工具，还会大概学习一下如何使用工具来编译出样式，在你将来的项目中使用。