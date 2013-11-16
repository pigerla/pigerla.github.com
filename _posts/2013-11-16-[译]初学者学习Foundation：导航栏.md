---
layout: post
category : 初学者学习Foundation
tagline: "Supporting tagline"
tags : [Foundation入门]
---

原文标题：[Foundation for Beginners: Navigation](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-navigation/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-06-07

一个前端框架是否优秀，其中看该框架如何处理导航栏。初学Foundation，我们先来看几种形式用javascript工具实现效果的导航栏。我还会介绍另一种有益于你更好地成为Foundation开发者、很有用的工具。

## Section 插件 ##

Foundation提供其中一个最好的javascript插件就是[Section](http://foundation.zurb.com/docs/components/section.html)：类似于`tabs`有选择性地，在同一时间内显示一块页面内容。Section主要以几种形式的导航栏出现，如手风琴式导航，tabs, 垂直和水平导航。

<!--break-->

![foundation-3-section-1](http://pigerla.com/assets/images/20131116/foundation-3-section-1.png)

![foundation-3-section](http://pigerla.com/assets/images/20131116/foundation-3-section.png)

见如下代码:

    <div class="section-container auto" data-section>
	  	<section>
	    <p class="title" data-section-title><a href="#">Section 1</a></p>
	    <div class="content" data-section-content>
	      <p>Content of section 1.</p>
	    </div>
	  	</section>
	  	<section>
	    <p class="title" data-section-title><a href="#">Section 2</a></p>
	    <div class="content" data-section-content>
	      <p>Content of section 2.</p>
	    </div>
	  	</section>
	</div>

这段代码可能比前面章节都要复杂些，我来解释一下：

不管你打算创建哪种形式的`Section`，都要以`<div class="section-container auto" data-section>`开头，这个`data-section`属性声明我们正在使用哪种`Section`,class：auto指明使用Foundation默认的风格：`手风琴`。如果想使用上其他风格的话，可以把`auto`改为`tabs`,`accordion`,`vertical-nav`或者是`horizontal-nav`。最后给`data-section`赋上相同class值，来确认你用对特定形式的`section`。

接下来需要添加`<section>`块，里面添加一个title和该title链到内容的链接：

    <section>
    <p class="title" data-section-title><a href="#panel1">Section 1</a></p>
    <div class="content" data-section-content>
      <p>Content of section 1.</p>
    </div>
	</section>

从上面代码可以看出每个`Section`都是有`<section>`容器包含着。还有一个`<p>`标签，添加class为`title`, `<a>`链接链到相对应的内容。接着下面包含的是Section要显示内容块，需要添加class为`content`， 重复多个`<section>`内容就可以创建多个`Section`了。

备注：添加class名`vertical-nav`或者`horizontal-nav`时，在大屏幕上正常显示垂直或者水平的导航栏，但遇到小屏幕时就会自动转换成`accordin`（手风琴）风格导航。

## 深层链接 ##

假设你想默认链接到第二个`section`,但是当你打开页面时，它还是默认显示第一个section的内容。不用纠结！Foundation本身就提供了解决方案，方案就是需要添加一个新的属性值：`data-options=”deep_linking:true”`在外面的section容器。当用户浏览一个有[锚点](http://en.wikipedia.org/wiki/Fragment_identifier)的url时，例如`http://www.website.com/#section3`，其中`#section3`就是锚点，然后就会加载这个`section`显示出来。


![foundation-3-deep-link](http://pigerla.com/assets/images/20131116/foundation-3-deep-link.png)

    <div class="section-container auto" data-section data-options="deep_linking: true">
	  <section>
	    <p class="title" data-section-title><a href="#section1">Section 1</a></p>
	    <div class="content" data-slug="section1" data-section-content>
	      <p>Content of section 1.</p>
	    </div>
	  </section>
	  <section>
	    <p class="title" data-section-title><a href="#section2">Section 2</a></p>
	    <div class="content" data-slug="section2" data-section-content>
	      <p>Content of section 2.</p>
	    </div>
	  </section>
	</div>

从上面的代码，应该注意到在`<div class="content" data-slug="section1" data-section-content>`这个内容div里面添加了一个新属性为`data-slug`，是用来告诉Foundation加载页面时，先显示哪个Section。

## 侧导航  ##

Foundation的侧导航（一种类似于垂直导航）通常被包含在内容div里面。它的html架构也是非常简单的，而且可以使用`divider（分界线）`分区分。看如下代码所需要的标签：
    
    <ul class="side-nav">
      <li class="active"><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li class="divider"></li>
      <li><a href="#">Link 3</a></li>
      <li><a href="#">Link 4</a></li>
    </ul>

代码显示的是一段标准的无序列表，包含一系列内嵌链接的子项。无论你想要什么，添加关键class：`side-nav`到`ul`，然后在`li`里添加class:`active`表明当前显示的子项链接。如果你想区分子项，就可以添加一段`<li class="divider"></li>`代码来显示分界线。


![foundation-3-4](http://pigerla.com/assets/images/20131116/foundation-3-4.jpg)

## 子导航 ##

Foundation的子导航通常用来过滤、挑选特定的内容。但是子导航并不是像前面那样使用无序列表，而是使用[描述列表](http://hub.tutsplus.com/articles/community-project-style-a-description-list--webdesign-8735)。这样的好处就是有选择地使用**描述**标签来定义特定**术语**包含链接。这里就不能使用`divider`(分界线)了，但依然还是用使用class:`active`,见代码如下：

    <dl class="sub-nav">
	  <dt>Filter:</dt>
	  <dd class="active"><a href="#">All</a></dd>
	  <dd><a href="#">Photos</a></dd>
	  <dd><a href="#">Videos</a></dd>
	  <dd><a href="#">Music</a></dd>
	</dl>


![foundation-3-5](http://pigerla.com/assets/images/20131116/foundation-3-5.jpg)

## 分页功能 ##

分页功能也是导航中的一种；事实上，分页应该被包含在`<nav>`元素当中，Foundation使用哪些标记来实现分页，见如下代码：

    <ul class="pagination">
      <li class="arrow unavailable"><a href="">&laquo;</a></li>
      <li class="current"><a href="">1</a></li>
      <li><a href="">2</a></li>
      <li><a href="">3</a></li>
      <li><a href="">4</a></li>
      <li class="unavailable"><a href="">&hellip;</a></li>
      <li><a href="">12</a></li>
      <li><a href="">13</a></li>
      <li class="arrow"><a href="">&raquo;</a></li>
    </ul>

分页中左右两侧通常都用箭头表示，那就需要用到class:`arrow`,左侧内容上使用左箭头：`&laquo;`或者`&lsaquo;`，甚至`&larr`；右侧使用右箭头：`&raquo; `，或者` &rsaquo;`，甚至`&rarr;`，更多字符编码到[unicode-table.com](http://unicode-table.com/en/search/?q=arrow)来查找。

分页导航允许我们使用class:`unavailable` 和 `current`，分别表示不可用状态和当前使用状态。

上面段代码添加到如WordPress的内容管理系统中去是相当简单的。

![foundation-3-pagination](http://pigerla.com/assets/images/20131116/foundation-3-pagination.png)

**提示：**你可以给`ul`添加一个class:`pagination-centered`来居中分页导航，就好像Foundation所有元素那样，分页功能是响应式并且很容易去改变样式的。

## 有用的工具 ##

使用响应式前端框架，如Foundation，是一种快速的途径使得你的工程（页面）很好地显示在所有的设备上，但是测试页面依然是一件繁琐的任务。为了减轻测试工作，我开发了一个工具叫[` Respondr`](http://respondr.webhoard.net/)，只要输入url，就可以把内容显示在智能手机、平板电脑和普通电脑上，可以很快地发现页面上的不足。


![foundation-3-7](http://pigerla.com/assets/images/20131116/foundation-3-7.jpg)

## 下一篇预告 ##

到目前为止，我们学习了网格系统、块网格、Orbit滑动插件，Section插件和三种形式导航，下一篇我们将学习顶栏插件、面包屑导航和另外一些有用工具。