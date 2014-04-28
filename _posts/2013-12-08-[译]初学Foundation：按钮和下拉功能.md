---
layout: post
category : 初学Foundation
permalink : foundation-for-beginners/2013-12-08/buttons-and-dropdowns/
tagline: "Supporting tagline"
tags : [Foundation入门]
---

原文标题：[Foundation for Beginners: Buttons and Dropdowns](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-buttons-and-dropdowns/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-06-17

初学者初学Foundation程第六篇，将学习一下“按钮”、“下拉功能”和“清除”插件。

![foundation-5-1](http://pigerla.com/assets/images/20131202/foundation-5-1.jpg) 

<!--break-->

## 按钮 ##

Foundation有一系列稳定的、风格一致的按钮，并且是很容易使用的。添加一个class"button"在任意一个锚点、输入框（input）、块（div）或者按钮（button）元素，则使得该元素转化为Foundation样式的按钮，这得到的也只是标准的、默认的按钮，然而你却可以使用不同样式与种类的按钮。如下示例图：

![foundation-buttons](http://pigerla.com/assets/images/20131202/foundation-buttons.png) 
    
    <!-- Size Classes -->
    <a class="button" href="#">Default Button</a>
    <a class="tiny button" href="#">Tiny Button</a>
    <a class="small button" href="#">Small Button</a>
    <a class="large button" href="#">Large Button</a>
    <!-- Color Classes -->
    <a class="button secondary" href="#">Secondary Button</a>
    <a class="button success" href="#">Success Button</a>
    <a class="button alert" href="#">Alert Button</a>
    <!-- Radius Classes -->
    <a class="button radius" href="#">Radius Button</a>
    <a class="button round" href="#">Round Button</a>
    <!-- Disabled Class -->
    <a class="button disabled" href="#">Disabled Button</a>

上面的代码示例演示了按钮的所有预设大小、样式和状态。每一个小示例都提供强大的灵活性；这些预设都是可以被定制样式来重写，那就意味着你不用重头开始编写你的按钮。

在按钮中使用相关联的class来获得不同的样式，例如，在编写“button”的时候，就可以添加大小样式——“small”，颜色样式——“success”和圆角样式——“round”。同时，你还可以添加“disabled”来是按钮处于不可按状态（失活），样式效果就跟该class的词义是一致的。

## 按钮组 ##

实现这些基本按钮是简单的，实现按钮组也正是如此。一个简单的按钮组的结构如下：

    <ul class="button-group">
	    <li><a class="small button" href="#">Button 1</a></li>
	    <li><a class="small button" href="#">Button 2</a></li>
	    <li><a class="small button" href="#">Button 3</a></li>
    </ul>

![foundation-5-3](http://pigerla.com/assets/images/20131202/foundation-5-3.jpg )

代码实现了一组标准的按钮，你还可以添加“radius”来取得圆角，添加能够控制宽度的class“even-2”、“even-3”一直到“even-8”。里面的数字表示按钮（宽度）的大小，最好是使用按钮组中的按钮个数。举个例子，如果你要创建4个按钮，那么最好使用“even-4”。

## 按钮工具栏 ##

按钮工具栏可以理解为一组按钮组。编写一个div，然后添加`class="button-bar"`，然后往div里面放置你想要多少的按钮组。但遇到更复杂的按钮布局时，这样做是很有帮助的。如下代码示例：
    
    <div class="button-bar">
    	<ul class="button-group">
    	<li><a class="small button" href="#">Button 1</a></li>
    	<li><a class="small button" href="#">Button 2</a></li>
    	<li><a class="small button" href="#">Button 3</a></li>
    	</ul>
    	<ul class="button-group">
    		<li><a class="small button" href="#">Button 1</a></li>
    		<li><a class="small button" href="#">Button 2</a></li>
    		<li><a class="small button" href="#">Button 3</a></li>
    	</ul>
    </div>

![foundation-5-7](http://pigerla.com/assets/images/20131202/foundation-5-7.jpg)

每个按钮组在小屏幕上自动折叠,使得在任何大小的屏幕上看起来非常整洁。如果你学会使用以上所涵盖的Button使用方法，你就会体会到button的强大与便利。

## 下拉按钮 ##

在最新的Foundation版本中，添加了一个新的JavaScript插件叫[dropdowns](http://foundation.zurb.com/docs/components/dropdown.html)，这个插件放置在顶部按钮是非常方便的。当你使用它的时候，需要在button（类型）标签中添加class"dropdown"和一个自定义属性名为"data-dropdown"。

接下来就添加一个无序列表，里面包含一个id，而且id的值和上面所说的“data-dropdown”的值是相等的。如下代码示例：

    <a class="button dropdown" href="#" data-dropdown="drop1">Dropdown Button</a>
    </pre>
    <ul class="f-dropdown" id="drop1">
	    <li><a href="#">This is a link</a></li>
	    <li><a href="#">This is another</a></li>
	    <li><a href="#">Yet another</a></li>
    </ul>

注意到上面代码，“f-dropdown”是非常重要的，不要遗漏了。

**备注：**千万别忘记添加已下载来的Foundation工程包中的“foundation.dropdown.js”（或者foundation.min.js）。

![foundation-5-4](http://pigerla.com/assets/images/20131202/foundation-5-4.jpg )

### 分隔按钮 ###

值得你去学习最后的灵活布局是在按钮里添加一个分隔按钮来提供选择。分隔按钮可以用来指示可以下拉、下载等你想要的功能。使用也很简单，只需在上面代码例子中添加class“split”，如下代码示例：

    <a class="button dropdown split" href="#" data-dropdown="drop1">Dropdown Button </a>
    </pre>
	    <ul class="f-dropdown" id="drop1" data-dropdown-content="">
		    <li><a href="#">This is a link</a></li>
		    <li><a href="#">This is another</a></li>
		    <li><a href="#">Yet another</a></li>
	    </ul>
    <pre>

![foundation-5-5](http://pigerla.com/assets/images/20131202/foundation-5-5.jpg )

dropdown js是一个简单的插件，但只有一个选择来激活它：设置指定的class:

    $(document).foundation('dropdown', {
      activeClass: 'open'
    });

## 清除插件 ##

[清除](http://foundation.zurb.com/docs/components/clearing.html)是一个超级快、轻量级插件。当[orbit滑动](http://hub.tutsplus.com/tutorials/foundation-for-beginners-the-grid-system--webdesign-12438)不起作用时，使用这个插件是很简单的且有用的。

到目前为止，你应该对Foundation的列表结构运作方式比较熟悉了，同时也是这个插件的核心。创建一个无序列表，在ul标签中添加class"clearing-thumbs"和一个空值的自定义属性为“data-clearing”，接着在每个li里添加内容（如`<a><img>`）。
   
    Clearing makes it easy to create responsive lightboxes with any size image.

    </pre>
	    <ul class="clearing-thumbs" data-clearing="">
		    <li><a href="path/to/your/img"><img alt="" src="path/to/your/img-th" /></a></li>
		    <li><a href="path/to/your/img"><img alt="" src="path/to/your/img-th" /></a></li>
		    <li><a href="path/to/your/img"><img alt="" src="path/to/your/img-th" /></a></li>
	    </ul>
    <pre>

![foundation-5-6](http://pigerla.com/assets/images/20131202/foundation-5-6.jpg )   

如果你在第一个li标签中添加class"clearing-feature"，那么第一张图片就作为默认图片。清除也使用了前面文章所介绍的[初学者学习foundation：网格系统](http://pigerla.com/%E5%88%9D%E5%AD%A6%E8%80%85%E5%AD%A6%E4%B9%A0foundation/2013/11/06/[%E8%AF%91]%E5%88%9D%E5%AD%A6%E8%80%85%E5%AD%A6%E4%B9%A0Foundation%EF%BC%9A%E7%BD%91%E6%A0%BC%E7%B3%BB%E7%BB%9F/)，使得所有的缩略图搞一致，并且均匀分布。

## 总结 ##

我们完成学习按钮和下拉功能后,接下来将学习定制的表单和切换，那会见！






 
