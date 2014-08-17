---
layout: post
category : 响应式web设计
permalink : responsive-gilt-site/2014-08-16/block-vs-in-selector-media-queries/
tagline: "Supporting tagline"
tags : [响应式Web设计]
---

原文标题：[Responsive Gilt.com :Block vs. In-selector Media Queries](http://tech.gilt.com/post/90586369504/responsive-gilt-com-block-vs-in-selector-media)

原文作者：[GREGMAZUREK](http://gregmazurek.tumblr.com/) 2014-07-02

此系列文章主要分享我们在创造遗产应用过程中所得的经验。在[第一篇文章](/responsive-gilt-site/2014-08-17/retrospective/)中，分享了如何组织一个成功的回顾总结会议。那么在此文章中，主要讨论我们工作中所用到的技术以及如何组织媒体查询。

<!--break-->

CSS3的媒体查询可以帮助你在指定尺寸范围的设备显示页面内容而不用改变`DOM`元素。假如你有一个页面，使用媒体查询可以使得内容很好地显示在手机端、平板或者是PC端，给予用户良好的用户体验。媒体查询促使内容关注点分离也变得很容易，仅需要借助样式表，却不用改变任何DOM结构。

一条媒体查询使用大致如下：

    @media (min-width: 1024px) {
		// 对应的样式写在这里！
	}

我们曾考虑到如何使用媒体查询和大量的CSS文件。响应式设计会增加一个应用的复杂度。当你使用媒体查询时，你的CSS文件（代码）会变得更长，改变DOM会变得更具有风险性。

为了限制增加的复杂度——同时提高Gilt开发人员的满意[KPI](http://tech.gilt.com/post/44792645000/scaling-agile-at-gilt)，我们采取了两种使用媒体查询的模式。首先，预先定义好一些断点的变量，分别适应PC（和笔记本）、平板的横屏模式、平板的竖屏模式和手机横屏模式和手机竖屏模式，共4个。代码如下：

    // PC 或者 笔记本
    @viewport-wide: ~"(min-width: 1024px)";
     
    // 平板的横屏模式
    @viewport-medium: ~"(min-width: 768px) and (max-width: 1023px)";
     
    // 平板的竖屏模式和手机横屏模式
    @viewport-narrow: ~"(min-width: 480px) and (max-width: 767px)";
     
    // 手机竖屏模式
    @viewport-tiny: ~"(max-width: 479px)";
    
这样的好处就是，如果需求改变了，只要改变相应的值即可。

需要注意的是，在你定义的变量中不要包含`@media`字段，因为很有可能会在一次查询操作中一次性使用多个变量。例子如下：

    @media @viewport-wide,
		@viewport-medium {
		.unicorn {
		display: none;
		}
	}
	 
	@media @viewport-narrow,
		@viewport-tiny {
		.unicorn {
		display: block;
		}
	}

第二种模式明显就是使用大量的CSS文件，当在开发遗产应用时，我们添加了大量的媒体查询块在每个CSS文件中。所做的一切就是为了能够支持IE7（IE7是不支持媒体查询的），`.less`文件代码示例如下：

    .hero {
	    cursor: pointer;
	    background-repeat: no-repeat;
	    background-position: center;
	    background-color: #EBEBE8;
	    position: relative;
	    margin: 0 auto 0 auto;
	    height: 525px;
	    min-width: 960px;
	    max-width: 1680px;
	    overflow: hidden;
    }
     
    .anti-hero {
	    cursor: pointer;
	    background-repeat: no-repeat;
	    background-position: center;
	    background-color: #EBEBE8;
	    min-width: 960px;
	    max-width: 1680px;
	    overflow: hidden;
    }
     
    .wishes-it-was-a-hero {
	    background-color: #EBEBE8;
	    position: relative;
	    margin: 0 auto 0 auto;
	    height: 525px;
	    min-width: 960px;
	    max-width: 1680px;
	    overflow: hidden;
    }
     
    @media @viewport-tiny {
	    .hero {
	    height: auto;
	    min-width: inherit;
	    max-width: none;
	    width: 100%;
    }
     
    .anti-hero {
    	background-color: blue;
    }
     
    .wishes-it-was-a-hero {
	    max-width: 50px;
	    }
    }
     
    @media @viewport-narrow {
	    .hero {
	    height: auto;
	    min-width: inherit;
	    max-width: none;
	    width: 100%;
    }
     
    .anti-hero {
    	background-color: yellow;
    }
     
    .wishes-it-was-a-hero {
	    max-width: 150px;
	    }
    }
     
    @media @viewport-medium {
	    .hero {
	    height: 407px;
	    min-width: 767px;
    }
     
    .anti-hero {
    	background-color: green;
    }
     
    .wishes-it-was-a-hero {
	    max-width: 350px;
	    }
    }

如果你的文件是很小的，这种模式是可行的，但同时也会增加CSS的繁杂度，因为需要跨越成百上千条代码来使用媒体查询覆盖选择器。例如，在第2行有个选择器，却在第300行被查询覆盖了。这就增加出错的几率。一名开发人员不想滚动几百行代码才能修改相应的属性（代码）。

在我们开发的过程中，[Respond.js](https://github.com/scottjehl/Respond/blob/master/src/respond.js)出现了。Respond.js是一个开源项目，只要是使得IE6，IE7和IE8中支持CSS3属性，媒体查询就是其中一个。于是，我们开始在Gilt中使用它以避免在每个CSS文件后面都添加一大堆媒体查询代码。

于是乎又有了第二种媒体查询模式：我们在CSS选择器内加入媒体查询代码，而不是在媒体查询内加入选择器。例如，我们可以写成如下代码：

    .hero {
	    cursor: pointer;
	    background-repeat: no-repeat;
	    background-position: center;
	    background-color: #EBEBE8;
	    position: relative;
	    margin: 0 auto 0 auto;
	    height: 525px;
	    min-width: 960px;
	    max-width: 1680px;
	    overflow: hidden;
	     
	    @media @viewport-tiny {
		    height: auto;
		    min-width: inherit;
		    max-width: none;
		    width: 100%;
	    }
	    @media @viewport-narrow {
		    height: auto;
		    min-width: inherit;
		    max-width: none;
		    width: 100%;
	    }
	    @media @viewport-medium {
		    height: 407px;
		    min-width: 767px;
	    }
    }
     
    .anti-hero {
	    cursor: pointer;
	    background-repeat: no-repeat;
	    background-position: center;
	    background-color: #EBEBE8;
	    min-width: 960px;
	    max-width: 1680px;
	    overflow: hidden;
	     
	    @media @viewport-tiny {
	    	background-color: blue;
	    }
	    @media @viewport-narrow {
	    	background-color: yellow;
	    }
	    @media @viewport-medium {
	    	background-color: green;
	    }
    }
     
    .wishes-it-was-a-hero {
	    background-color: #EBEBE8;
	    position: relative;
	    margin: 0 auto 0 auto;
	    height: 525px;
	    min-width: 960px;
	    max-width: 1680px;
	    overflow: hidden;
	     
	    @media @viewport-tiny {
	    	max-width: 50px;
	    }
	    @media @viewport-narrow {
	    	max-width: 150px;
	    }
	    @media @viewport-medium {
	    	max-width: 350px;
	    }
    }

正如上面代码例子所示，开发人员得到的好处或许不是那么显而易见的。如果你都在每一个选择器中包含媒体查询的话，开发人员就可以很快地知道哪些属性会被覆盖。这样也就避免了不知道哪里还会用到媒体查询来覆盖原来的属性。现在我们已经依赖这种写法了，有利于样式分开管理。

现在来总结一下：极力推荐通过预先定义变量来处理媒体查询与在CSS选择器中加入媒体查询。正确使用这两种开发模式，我们相信将来会很容易地维护你现在的响应式设计开发流程的。
    

