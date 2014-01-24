---
layout: post
category : 初学者学习Foundation
tagline: "Supporting tagline"
tags : [Foundation入门]
---

原文标题：[Foundation’s Sassy Styles Explained](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundations-sassy-styles-explained/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-10-24

在本教程我们将学习包含在Foundation前端框架中的[灵活的Sass样式](http://foundation.zurb.com/docs/sass.html)以及能够用来做些什么。Sass比CSS版本提供更多自定义特性集合，再加上有快捷方式可以简单又快速地运用在样式项目上，例如顶部工具栏。

<!--break-->

如果你需要搭建起Sass的Foundation开发环境，可以参考文章“[使用Sass和Compass配置Foundation](http://dev.tutsplus.com/tutorials/setting-up-foundation-with-sass-and-compass--webdesign-15288)”（参见上篇译文：[初学者学习foundation：使用sass和compass来搭建foundation开发环境](http://pigerla.com/%E5%88%9D%E5%AD%A6%E8%80%85%E5%AD%A6%E4%B9%A0foundation/2014/01/13/%5B%E8%AF%91%5D%E5%88%9D%E5%AD%A6%E8%80%85%E5%AD%A6%E4%B9%A0Foundation%EF%BC%9A%E4%BD%BF%E7%94%A8Sass%E5%92%8CCompass%E6%9D%A5%E6%90%AD%E5%BB%BAFoundation%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)）或者是[Zurb官方文档](http://foundation.zurb.com/docs/sass.html)。你可以通过在控制台输入命令行方式来搭建环境，然后使用Compass和[Bourbon](http://bourbon.io/)（一个简单却轻量级混合Sass库），或者只是[从Github上下载单独Sass文件](https://github.com/zurb/foundation/tree/scss-standalone)，然后放置这些文件在你的工程上，然后通过“import”来引用需要的文件。

![zurb-mixins](http://pigerla.com/assets/images/20140115/zurb-mixins.png )

## 栅格系统 ##

我们先从Foundation的基础 —— 栅格开始，这是一个很好的组件将会向你展示`scss/sass`究竟有多灵活。

![foundationgrid](http://pigerla.com/assets/images/20140115/foundationgrid.png )

举个例子，当在栅格中使用混合（混合，就是使用一些已经写好代码）时，你可以创建自己的类，甚至通过一些简单变量来创建你自己的栅格。我们来看看Foundation提供给你的第一个例子：

    /* 混合创建行的选项 */
	@include grid-row($behavior);
	/* 默认值是false,采用默认行样式 */
	$behavior: false
	/* 如果你在创建例如一个包含其他元素的嵌套式行 */
	/* 你需要添加适当的嵌套样式 */
	$behavior: nest
	/* 你还可以使用collapse效果 */
	/* 当在栅格中使用Form表单时，是很方便的 */
	$behavior: collapse
	/* 如果你创建一个嵌套式的行，又想实现倒塌的效果，可以添加如下代码 */
	$behavior: nest-collapse

从上面代码可以看到，我们从使用混合`@include grid-row`开始，用指定变量包含着括号里。

当你使用混合时，可以编写好类似函数那样，通过传递不同参数，就可以重复使用该混合。如font，是一个描述字体大小，字体粗细，字体颜色等性质。当每次使用它的时候，只是颜色变化而已，而其它的都不变，因此只需要用一个变量代替颜色值，通过参数传递进来即可。

如下代码示例，这里需要注意的是，在Sass中，参数是以“$”开头的：

    /* 这里创建一个混合（函数） */
    @mixin font($color) {
    font-family: 'Arial';
    font-size: 14px;
    font-weight: 500;
    color: $color;
    }
	/* 定义变量 */
	$blue = #0099cc;
	/* 使用混合（参数传递） */
	@include font($blue);

回到上个代码示例，会发现变量`$behaviour`使用多次，看起来有点奇怪，就好像被每一次都重新赋值了。实际上，你给每种类型都赋上对应的值，就正如数组那样，每一次使用变量`$behaviour`，将会根据不同的赋值产生对应的输出。

你还可以传递多个参数：

    @include grid-column($columns, $last-column);
    /* 最常用的是使用参数列 */
     /* 设置列的宽度属性，使用一个数字来表示 */
     $columns: #
     /* 如果你列不加起来12，然后使用这个选项 */
     /* 最后一列默认设置float:right，使得布局美观 */
     /* 如果不想要默认，则设置为flase*/
     $last-column: false
    
为了更好的理解，我们将使用基本的HTML来创建一个栅格工程，由于Sass源码里设置了很多类，因此可以直接使用。如下代码示例：

    <header>
		<aside></aside>
	    <section>
	       <article>
	          <header></header>
	          <div></div>
	       </article>
	    </section>
	</header>

	$row-width: em-calc(600);
	$column-gutter: em-calc(30);
	$total-columns: 12 !default;
	header { @include grid-row; @include panel;
	    aside { @include grid-column(3); }
	    section { @include grid-column(9);
	       article { @include grid-row;
	          header { @include grid-column(2); }
	          div { @include grid-column(10); }
	       }
	    }
	}

![ header1](http://pigerla.com/assets/images/20140115/header1.png )

可以看出html是很简洁的，sass完美地计算与嵌套，我设置了最大的宽度，列与列之间的宽度和列的条数。从一个HTML的角度来看，这节省了大量的时间,但背后的布局可能会让人有些迷惑。我们看看在Sass中如何使用按钮。

## 按钮 ##

使用Sass的好处之一就是你能很快地编写你的样式，并且不用编写重复的代码，从而能节省不少的时间。


![foundationbuttons ](http://pigerla.com/assets/images/20140115/foundationbuttons.png )

你可以很快捷地使用按钮样式，就如：

    .your-class-name { @include button; }

只需添加几个选项,你复制的样式只用一行代码,大概编写六、七行CSS代码就可以实现大工作量,很节省时间吧!

你应该还会注意到,有大量的选项在CSS版本不存在,这是适用于所有Sass元素。这会在CSS版本增加一个额外的自由层。下面例子将演示,一个按钮使用变量,和使用直接值一样,所以理解一下这些是如何工作的。

    .your-class-name {
	    @include button($padding, $bg, $radius, $full-width, $disabled, $is-input);
	    @include inset-shadow($active);
	}
	.your-class-name {
	    @include button(1em, #ca2727, 2px, false, false, false);
	    @include inset-shadow(true);
	}


![button.png ](http://pigerla.com/assets/images/20140115/button.png )

这只是一个简单的例子,你可能会频繁地使用。最终编译成CSS，可以想象，编写一样的CSS代码比Sass需要更多的时间：

    .link {
		border-style: solid;
		border-width: 1px;
		cursor: pointer;
		font-family: inherit;
		font-weight: bold;
		line-height: normal;
		margin: 0 0 1.25em;
		position: relative;
		text-decoration: none;
		text-align: center;
		display: inline-block;
		padding-top: 1em;
		padding-right: 2em;
		padding-bottom: 1.0625em;
		padding-left: 2em;
		font-size: 1.25em;
		background-color: #ca2727;
		border-color: #9f1f1f;
		color: white;
		-webkit-border-radius: 2px;
		border-radius: 2px;
		-webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
		box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
	}

虽然你会看到Sass很多似乎是种超前语言,它实际上是能够正确地编译尽管只是写了几行的代码。结构比CSS有稍微增强。如果你被感到迷惑，你在需要时，可以使用SCSS。

## 单位计算器 ##

最后,Sass少写的功能之一就是能够添加函数到样式表中。这些不是动态页面函数(运行时编译Sass代码)却节省更多的时间。

例如，在Foundation中有个整洁的函数是用来将px转换为em。这对响应式网站来说是很有趣的，通过如下简单的设置em默认值：

    $em-base: 16px!default;

然后，每当你想使用em值,你通常需要计算px（像素）转化为em值。示例如下：

    height:em-calc(46);

“46”是像素，“em-cal”是函数，在你的Sass代码都可以使用这个函数。

## 有用的工具 ##

在上一篇文章中，我推荐了Sass编译器，对手动编译有巨大的好处。这次我将推荐一个几乎对所有的项目都是很有用的工具。

当谈到Foundation，你可能关注Sass，CSS，HTML和JavaScript。但是我们不能忘记一个重要的Web设计解决方案就是图片，特别是png和jpg格式文件。优化图片在web开发中是非常重要的，因此可以使用[ imageOptim](http://imageoptim.com/)(OS X系统)或者是[File Optimizer](http://www.softpedia.com/get/PORTABLE-SOFTWARE/System/File-management/File-Optimizer.shtml)(Windows系统)。

这个工具可以无损地压缩图片，是非常高效且压缩率是很高的，可高达70%，就好比，原来需要加载100k的图片，现在只需要加载30k即可，这对合并在一起的图片压缩更加高效。
！[ image-compress](http://pigerla.com/assets/images/20140115/image-compress.png )

## 下一篇预告 ##

我们已经初步接触与学习Sass基础知识，包括如何搭建，能用它干些什么和如何加快开发进度。接下来，我们将学习一些更加有趣的东西：基于Rails的Foundation，这将允许你直接使用HTML,CSS和JavaScript就可以创建出很酷动态的功能出来。

