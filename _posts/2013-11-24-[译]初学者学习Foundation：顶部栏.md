---
layout: post
category : 初学者学习Foundation
tagline: "Supporting tagline"
tags : [Foundation入门]
---

原文标题：[Foundation for Beginners: The Top Bar](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-the-top-bar/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-06-07

先看一下[Foundation](http://foundation.zurb.com/)首页的顶部栏，顶部栏包含很多内容，我们将进行内容分解来理解。

![foundation-4-1](http://pigerla.com/assets/images/20131124/foundation-4-1.jpg)

<!--break-->

## 顶部栏，或者不用顶部栏 ##

Foundation的顶部栏是一个非常小巧有用的组件，但不是意味着在你的工程中就一定要使用它。我估计，在使用Foundation来开发过的项目中，大概占40%的项目使用了顶部栏。你该认真分析项目需求来决定是否应该使用顶部栏；顶部栏组件是很容易改变样式的，但是交互功能就比较固定了。

## 基本架构 ##

为了实现顶部栏，我们需要一个`<nav>`标签，这标签包含一个必须的class为“top-bar”。

![foundation-4-2](http://pigerla.com/assets/images/20131124/foundation-4-2.jpg)

接着在`<nav class="top-bar">`里面添加一个`<ul>`和两个`<li>`，其中一个`<li>`来显示这个菜单的标题或者`logo`。

**备注：**如果你只想显示“MENU”或者“三横”（见上图），就可以去掉`menu-icon`，或者是标签内容“Menu”。

    <nav class="top-bar">
	    <ul class="title-area">
	        <li class="name">
	             <h1><a href="#">Top Bar Title </a></h1>
	        </li>
	        <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a>
	        </li>
	    </ul>
	</nav>

## 添加父链接 ##

添加父链接（li项）是我们接下来要做的，关闭`</nav>`之前需要添加一个`<section class="top-bar-section">`标签，在这个section中需要添加一个无序列表。

![foundation-4-3](http://pigerla.com/assets/images/20131124/foundation-4-3.jpg)

在这里，依然允许你使用“divider”来区分列表，可参考下面的代码示例：

    <section class="top-bar-section">
    <ul class="left">
    <li class="divider"></li>
    <li class="active"><a href="#">Main Item 1</a></li>
    <li class="divider"></li>
    <li><a href="#">Main Item 2</a></li>
    <li class="divider"></li>
    </ul>
    </section>

从代码中注意到，`<ul class="left">`中有个class为left，用来控制在左侧显示导航内容。甚至可以添加两个菜单链接，左右（`class="right"`）显示导航内容。

到目前为止，我们所添加的代码可以水平地显示在顶部栏上，在小屏幕的设备上，将会变成一个下来菜单，点一下“MENU”或者“三横”按钮就可以显示出来。

## 添加子菜单 ##

![foundation-4-4](http://pigerla.com/assets/images/20131124/foundation-4-4.jpg)

每个li项可以内嵌一个无序列表作为子菜单。为了实现这个功能，父链接（li项）必须添加一个class为`has-dropdown`，内嵌的ul必须添加class为`dropdown`:

    <li class="has-dropdown"><a href="#">Main Item 3</a>
	    <ul class="dropdown">
		    <li><label>Dropdown Level 3 Label</label></li>
		    <li><a href="#">Dropdown Level 3a</a></li>
		    <li><a href="#">Dropdown Level 3b</a></li>
		    <li class="divider"></li>
		    <li><a href="#">Dropdown Level 3c</a></li>
	    </ul>
	    </li>
    <li class="divider"></li>

**备注：**为了标记当前链接处于激活状态，可以添加`active`。

子菜单在大屏幕下显示为标准的下拉菜单，而在小屏幕则显示为“滑动块”（整块向左或向右滑动）。

![foundation-top-bar](http://pigerla.com/assets/images/20131124/foundation-top-bar.png)

## 附加设置 ##

尽管被叫为“顶部”栏，其实你可以放置在你的布局任何地方。如果你想固定住这“顶部”栏，就需要添加一个`div`，并添加class为“fixed”，来包含顶部栏。再或者，你可以添加class“contain-to-grid”在主容器中来控制顶部栏的宽度，更方便的是，可以同时使用两者。

假设你想顶部栏居于布局中间，当用户向下滚动的时候，并固定在页面的顶部，这时可同时使用class“contain-to-grid”和“sticky”。

    <div class="contain-to-grid sticky">
    <nav class="top-bar">
    <!--nav content-->
    </nav>
    </div>

## 添加一个搜索输入框 ##

![foundation-4-5](http://pigerla.com/assets/images/20131124/foundation-4-5.jpg)

如果这些功能还不能满足你，你可能还需要一个输入框来作为搜索功能、邮箱注册功能、或者其他内容。我们需要在菜单列表项中添加一个带有class“has-form”的li。见下面的代码，我们在顶部栏中运用了网格功能。这使得很容易去布局元素——当然也能响应式，因为网格的列在小屏幕上发生转变。
    
    <li class="has-form">
	    <form>
	    	<div class="row collapse">
			    <div class="small-8 columns">
			    <input type="text">
			    </div>
			    <div class="small-4 columns">
			    <a href="#" class="alert button">Search</a>
			    </div>
		    </div>
	    </form>
    </li>

## 面包屑导航 ##

![foundation-4-6](http://pigerla.com/assets/images/20131124/foundation-4-6.jpg)

面包屑导航在CMS系统页面中是很常见的，例如WordPress，其中一些多层次的页面在使用起来有点复杂。在任何一个基于Foundation的项目中使用面包屑导航是很容易的，在`<ul>`或者`<nav>`标签中添加class“breadcrumbs”。当在使用无序列表时，所有的链接都需要变成li项，而内部的链接导航元素需要锚标记。

另外，添加额外class只有“unavailable”和“current”，见如下代码：
    
    <ul class="breadcrumbs">
	    <li><a href="#">Home</a></li>
	    <li><a href="#">Features</a></li>
	    <li class="unavailable"><a href="#">Gene Splicing</a></li>
	    <li class="current"><a href="#">Cloning</a></li>
    </ul>
    
## 下一篇预告 ##

顶部栏是非常灵活使用的，和你基于Foundation的项目合并起来是非常简单的，在下一篇中，我们将学习button、dropdown和清理插件。

    








