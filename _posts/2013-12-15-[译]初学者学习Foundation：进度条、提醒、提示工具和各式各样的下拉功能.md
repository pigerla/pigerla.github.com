---
layout: post
category : 初学者学习Foundation
tagline: "Supporting tagline"
tags : [Foundation入门]
---

**译者注：**本文章是教程**第八篇**，欲学习**第七篇**，请点击[初学Foundation之自定义表单和开关](http://www.w3cplus.com/css/foundation-for-beginners-custom-forms-and-switches.html)。

原文标题：[Foundation for Beginners: Progress, Alerts, Tooltips and the Elusive Mega Drop](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-progress-alerts-tooltips-and-the-elusive-mega-drop/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-07-02

[点击可下载示例源码](http://pigerla.com/assets/src/20131215/Archive.zip)

让我们继续学习如何使用其他Foundation技术集合，如进度条、提醒框、提示工具和mega下拉功能，也看看Zurb如何应用在网站上的。我们将添加所有这些组件到[上一篇教程](http://www.w3cplus.com/css/foundation-for-beginners-custom-forms-and-switches.html)的“联系表单”演示代码中，并且使用一个定制的jQuery，因此你会更加理解这些元素怎样才能运行在自己的工程上的，让我们开始吧！

<!--break-->

## 提示工具 ##

首先，我们将为“Send me spam”单选框添加一个提示工具，如果他们选中单选框时，用来告诉用户更多关于我们将发送邮件的提示信息。

![foundation-tooltip](http://pigerla.com/assets/images/20131202/foundation-tooltip.jpg)

    <label class="has-tip">
	    <span class="has-tip" title="Don't worry we won't really send you any spam this is just to display a checkbox." data-tooltip="" data-width="300">Send me spam</span>
	    <input style="display: none;" type="checkbox" checked="checked" />
    </label>

在添加一个功能或者组件过程中，例如上面提示工具的代码，都会使用一个类名来声明，在上面的代码示例就使用了类名“has-tip”。

我们可以注意到在label内包含了一个标签span，span需要添加一个Foundation定制元素属性：`data-tooltip`。有了这个属性才能使用这个提示工具，然后你应该还会在里面添加文本信息或者设置span的宽度。这些都是可以通过添加更多的属性来实现的，如“title”和“data-width”。如果没有设置“data-width”，那么这个提示工具将会占满父元素容器。

添加类名“has-tip”和有选择性地添加上面提到的属性（值）可以使你更加容易地把提示工具添加任意元素中去。

## 添加交互功能 ##

在[上一篇教程](http://www.w3cplus.com/css/foundation-for-beginners-custom-forms-and-switches.html)中，我们创建了一个简单的响应式联系表单，演示了如何使用Foundation的表单元素。现在我们继续来实现更多的元素，在表单中添加一个新层。我们将在提交按钮中添加更多动态有趣的东西；我们将使用发送信息按钮的标准点击操作，添加一个进度条，一个提交成功的文本和当email被发送出去的时候，清除输入框的内容。

当我正在展示更多Foundation的特性时，并不表示这是功能性的表单，尽管你可以添加`php`的脚本和使用`ajax`来避免把表单内容提交到哪个页面上去。对这原理不是很熟悉的朋友可以看看文章[使用jQuery来提交表单而不会重刷页面](http://hub.tutsplus.com/tutorials/submit-a-form-without-page-refresh-using-jquery--net-59)。

在提交按钮下面我们可以添加进度条，还将会使用和按钮一样的类名，这里演示使用了类名`round`。

[![foundation-progress](http://pigerla.com/assets/images/20131215/foundation-progress.jpg )](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-progress-alerts-tooltips-and-the-elusive-mega-drop/attachment/foundation-progress/)

    <div class="progress round" id="progress" style="display: none;"></div>

使用一个含有类名“progress”的div作为一个容器，同时在里面添加span（使用类型“meter”）来设置进度条的颜色。

**备注：**span还用来表示进度条开始的宽度，我们将使用jQuery来实现动态效果。

让我们添加一条提示成功的文本信息来告诉用户表单内容已经发送出去了，在例子中，我们将关注到成功提醒框（success alert）上，但实际上可能还要添加考虑错误提醒框（error alert）。你可以实现这些通过使用提交处理器和[jQuery validate验证插件](https://github.com/jzaefferer/jquery-validation)。

[![foundation-success-alert](http://pigerla.com/assets/images/20131215/foundation-success-alert.jpg ) ](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-progress-alerts-tooltips-and-the-elusive-mega-drop/attachment/foundation-success-alert/)

    <div class="alert-box success" style="display: none;" data-alert="">Success! Your message has been sent.
     <a class="close" href="#">×</a></div>

创建一个div,添加“data-alert”的属性和一些类，如“alert-box”和“success”。还可以添加关闭按钮，当用户读完成功信息之后就可以关闭它。回头看所写的代码，可能有点混乱，但是当我们添加一些jQuery代码来创建所需要功能的时候，就会更好地理解了。

    var submitButton = $('#submitme');  // Variable to cache button element
    var progressBar = $('#progress');   // Variable to cache progress bar element
    var progressBarMeter = $('#progress .meter');   // Variable to cache meter element
    var alertBox = $('.alert-box'); // Variable to cache meter element
    var closeButton = $('.close');  // Variable to cache close button element
    $(submitButton).click(function() { // Initiates the send interaction
	    $(this).fadeOut(500); // Fades out submit button when it's clicked
	    setTimeout(function() { // Delays the next effect
		    $(progressBar).fadeIn(500); // Fades in the progress bar
		    $(progressBarMeter).animate({width : '100%'},2000); // Animates the progress bar
			    setTimeout(function() { // Delays the next effect
			    $(progressBar).fadeOut(500); // Fades out progress bar when animation completes
				    setTimeout(function() { // Delays the next effect
				     $(alertBox).fadeIn(500); // Fades in success alert
				    }, 500);
		    }, 2500);
	    }, 500);
    });

我在每行都添加注释来帮助理解这些代码，这是一个简单队列式效果，创建了所需的交互。虽然这都是模拟的，却能够很简单地、适应性地添加真正的反馈和验证功能，还可以添加一个关闭提醒框来重置表单，这对将来使用是很有帮助的。

**备注：**我们已经保存变量来引用这些元素，你可以进一步了解为什么这么做，通过阅读文章[快速提示——jQuery Newbs:停止在池中跳](http://hub.tutsplus.com/tutorials/quick-tip-jquery-newbs-stop-jumping-in-the-pool--net-22142)。

## 重置表单 ##

    $(closeButton).click(function() { // Initiates the reset function
	    $(alertBox).fadeOut(500); // Fades out success message
	    $(progressBarMeter).css({width : '0%'}); // Resets progress bar
	    setTimeout(function() { // Delays the next effect
	        $('input, textarea').not('input[type=submit]').val(''); // Resets the input fields
	        $(submitButton).fadeIn(500); // Fades back in the submit button
	    }, 500);
	        return false; // This stops the success alert from being removed as we just want to hide it
	});

这里我又为每行注释了，这些代码包含更多的更新，这些特性是非常灵活的，可以在自己工程任何地方使用，使用CSS来定制。

## 神奇的Mega下拉功能 ##

我已经在[Foundation 谷歌组](https://groups.google.com/forum/#!forum/foundation-framework-)花费很多时间，而且很多学习者在Foundation网站上询问很多关于mega下拉功能。我觉得在这里涉及到了这些，也似乎没人真正地涉及这块知识。


![foundation-megadrop](http://pigerla.com/assets/images/20131215/foundation-megadrop.jpg ) 

添加标签`section`，在里面添加你想要的内容，然后添加一个样式属性`display:none`，接下来就编写jQuery代码如下：

    var megaDrop = $('#megaDrop');  // Variable to cache megaDrop element
    var megaContainer = $('#megaContainer');// Variable to cache megaContainer element
    $(megaDrop).click(function() {
	    $(megaContainer).slideToggle(300,function(){
		    if ($(this).is(":hidden")) $(megaDrop).html("+");
		    else $(megaDrop).html("×");
	    });
    });

所有Mega下拉都是一个下滑开关，可以滑动式地展示或者隐藏一个容器的内容。有很多Mega下拉的实践，不管是扩展在导航栏上，还是一个隐藏的画廊，或者是一个宣传视频。

## 有用的工具 ##

有很多工程项目，尤其是一些仪表板界面，需要用表格来展示数据，[chartjs.org](http://www.chartjs.org/)是一个很好途径来添加在你的Foundation项目中去，为什么不去尝试一下呢，通过不同方式来可视化你的数据，做成动态效果和自我定制呢？这些表格在Foundation框架下完美显示，甚至在retina显示屏上。


![foundation-charts](http://pigerla.com/assets/images/20131215/foundation-charts.jpg ) 

chartjs 用到了html5 canvas元素，在所以现代浏览器上是支持的，同时还支持IE7或8，这个插件是独立的、免费的、轻量级的和提供了很多可选的功能。

下一篇预告

接下来教程中，我们将学习Joyride插件（引导用户使用你的网站），面板，价格表格，正轨表格和交换；都是可以给你选择地设置不同的图片来适应不同大小的屏幕尺寸，还很多知识点会涉及到！


 

