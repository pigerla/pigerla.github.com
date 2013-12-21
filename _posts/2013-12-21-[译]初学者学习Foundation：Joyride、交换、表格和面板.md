---
layout: post
category : 初学者学习Foundation
tagline: "Supporting tagline"
tags : [Foundation入门]
---

原文标题：[Foundation for Beginners: Joyride, Interchange, Tables and Panels](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-joyride-interchange-tables-and-panels/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-07-04

[点击可下载示例源码](http://source.tutsplus.com/webdesign/tutorials/042_foundation/Archive%202.zip)

让我们继续为基于Foundation的项目添加更多的功能，如将学习Joyride插件，该插件帮助引导用户来使用你的站点；还会学习价格表格、标准表格和交换功能：一种新奇响应式图片工具。我们通过一些模版示例，你还可以[下载源码](http://source.tutsplus.com/webdesign/tutorials/042_foundation/Archive%202.zip)来学习如何实现这些特性的。

<!--break-->

我们将从最简单的特性（面板）开始讲解。

## 面板 ##

在任意元素中添加一个类“panel”，就会形成一个简单颜色块。这种“块”显示的盒模型是“[border-box](http://hub.tutsplus.com/tutorials/quick-tip-did-internet-explorer-get-the-box-model-right--net-12328)”，因此添加padding的话，不会添加元素的宽高，只会向内扩展。这样就很方便来控制元素的大小了。

    <div class="large-6 columns">
	    <div class="panel">
	    	<p id="firstStop">We have a simple selection of hosting packages for you to choose from, these will work fantastically for any company. With ultra fast mySQL database connections, content management systems really fly. Add to this 24/7 customer support and 99.9% uptime and you've got a great hosting package.</p>
	    </div>
    </div>

为了更好地说明，我添加两列，宽度都为“large-6”，一列是图片，一列是面板，这样就可以很好地对齐了。

![1](http://pigerla.com/assets/images/2013121/1.png )

## 价格表格 ##

有时候，创建一个网站的一个比较重要的理由就是卖东西，因此，价格表格经常出现在网站上，另外，Foundation也覆盖了这个功能，但和传统表格不一样的是，这些表格实际上就是一个无序列表，搭配指定的类形成的。

	<ul class="pricing-table">
	    <li class="title">Startup</li>
	    <li class="price">$9.95</li>
	    <li class="description">An awesome package to get any company onto their feet. With instant setup and magic money making plugins.</li>
	    <li class="bullet-item">1 Database</li>
	    <li class="bullet-item">5GB Storage</li>
	    <li class="bullet-item">20 Users</li>
	    <li class="cta-button"><a class="button round" href="#">Buy Now</a></li>
	</ul>

从代码示例中可以看到，ul元素有一个类“pricing-table”，然后在li元素中倒使用很多类，包括“title”，“price”,“description”,“bullet-item”和“cta-button”。而你只要做的是，定制你的内容。你应该还会添加多个价格表格来起对比的作用。

![2](http://pigerla.com/assets/images/2013121/2.png )

## 标准表格 ##

价格表格作用很大吧，接下来你可以需要一个真的的表格来展示数据，在Foundation中使用表格也是很简单的，首先创建一个table，包含其他元素，而你只要做的只是为每一列设置宽度即可。

	<table>
	  <thead>
	    <tr>
	      <th width="200">Startup</th>
	      <th width="200">Enterprise</th>
	      <th width="200">Global Corporation</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	        <td>1 Database</td>
	        <td>5 Database</td>
	        <td>10 Database</td>
	    </tr>
	    <!--more rows-->
	    <tr>
	        <td>No Backups</td>
	        <td>50GB Backups</td>
	        <td>100GB Backups</td>
	    </tr>
	  </tbody>
	</table>

![3](http://pigerla.com/assets/images/2013121/3.png )

## 交换插件 ##

虽然在Foundation中所有图片默认都是流式布局的，而有时候你却改变一下：图片能够响应式。
    
    	“And let me add, I think it's cray-cray that anyone in our industry can talk about *only images* for over an hour. #RWD ”
    	“— Dave Rupert (@davatron5000) [May 14, 2013](https://twitter.com/davatron5000/statuses/334357491473326080)”

现在有一个问题就是在图片中有文本。最近Zurb增加了一个插件叫“交换”；实现原理也是很简单的，当屏幕大小为指定时，就使用不同的图片来替换你选择的图片。实现过程就是通过添加特定属性，为“data-interchange”。这是用来选择图片源改变的选择。

    <img src="small.jpg" data-interchange="[smallest.jpg, (default)], [smallest.jpg, (screen and (max-width: 568px))], [small.jpg, (small)], [med.jpg, (medium)], [large.jpg, (large)]">

如上看出，我添加很多选择性的属性值，里面有很多参数，这样你就选择性地设置定制的点来交换不同的图片。

这并不是一个高性能的插件，因为交换是需要一到两秒的时间，Zurb有希望在将来会解决这个问题。这个插件的主要好处之一就是它减少在移动设备上的加载时间，因为会下载更小优化过的相同图片，使得更好地加载网页其他部分。

## Joyride插件 ##

在前面的每一节教程中，都会涉及学习一个插件，但这次，我们将学习两个。

在某情况下，引导用户来熟悉你的网站对用户来说一种很好帮助。例如，Google在推出新的特性时候，就会这样做。通过一步一步地指引你的用户，并且解释每一部分都是怎么使用的。Joyride插件实现过程就是添加一个列表（ol或者ul），并且包含每一条项目（li），来表示每一步指引。这列表可以是有序列表或者无序列表，但是都必须添加类“joyride-list”和属性“data-joyride”。

	<ol class="joyride-list" data-joyride>
	    <li data-id="firstStop" data-text="Go">
	        <p>Let's get started, here we have an intro.</p>
	    </li>
	    <li data-id="numero1" data-class="custom so-awesome" data-text="Next">
	        <h4>First Stop</h4>
	        <p>Here we use the new interchange function to change images based on screen size.</p>
	    </li>
	    <li data-id="numero2" data-button="Next" data-options="tipLocation:top;tipAnimation:fade">
	        <h4>Second Stop</h4>
	        <p>We are using pricing tables here to display a list of services from a hosting company.</p>
	    </li>
	    <li data-id="numero3" data-button="Next" data-options="tipLocation:top;tipAnimation:fade">
	        <h4>Third Stop</h4>
	    <p>This is just a link but it opens a modal with a standard table inside, exciting eh?</p>
	        </li>
	    <li data-button="End">
	        <h4>End Of The Line</h4>
	        <p>Our tour ends here, please remember to take all your belongings with you on your way to the exit.</p>
	    </li>
	</ol>

![5](http://pigerla.com/assets/images/2013121/5.png ) 

每一个li项目都必须添加“data-id”，如果fist stop是一个h2标签，那么你的data-id就是“data-id="title"”了。然后h2元素就要添加一个id为“title”。

接下来你将要添加一个“next”的按钮告诉用户如何操作进入下一步。这里就需要添加一个新的属性“data-text”到每一个li上去，在上面的代码中可以看出，使用了值“Go”来开始，使用值“Next”来进入下一步。

还有其他一些选择可以直接添加到li项目的，比如data-options="tipLocation:top;tipAnimation:fade" ，你可能猜出作用就是显示内容的位置和淡入进来。还有很多参数可以使用在JavaScript初始化中，你还可以使用cookies插件，如果用户登录时保存一个选择就是只是显示一次。

## 有用的工具 ##

有点不足的是，Foundation没有包含一个证明插件或者特性，如果实现这些那就非常方便了，[Quovolver](http://sandbox.sebnitu.com/jquery/quovolver/)可以弥补通过设置一个简单的设置和灵活的标记。在你的页脚中添加脚本,去掉一些标记。

![ 4](http://pigerla.com/assets/images/2013121/4.png )  

## 下一篇预告 ##

接下来我们将学习[Magellan](http://foundation.zurb.com/docs/components/magellan.html)， 用来创建一个粘性的导航栏。还学习可视化类，支持右到左，键盘响应，缩略图，flex视频和[zepto](http://foundation.zurb.com/docs/javascript.html)的细节。我都将一一解释这些特性，并且学习如何更好地在自己的项目中实现出来。