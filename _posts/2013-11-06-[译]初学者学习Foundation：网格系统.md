---
layout: post
category : 初学者学习Foundation
tagline: "Supporting tagline"
tags : [Foundation入门]
---


原文标题：[Foundation for Beginners: The Grid System](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/foundation-for-beginners-the-grid-system/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-06-05

在学习Foundation系列文章中的[上一篇:初学者学习Foundation：入门篇](http://pigerla.com/%E5%88%9D%E5%AD%A6%E8%80%85%E5%AD%A6%E4%B9%A0foundation/2013/10/30/[%E8%AF%91]%E5%88%9D%E5%AD%A6%E8%80%85%E5%AD%A6%E4%B9%A0Foundation%EF%BC%9A%E5%85%A5%E9%97%A8%E7%AF%87/)，我们大概讲述了可以用这个框架来干什么，框架本身又可以做什么和如何自定义符合自己需求的框架。那么此文章就将深入地研究学习“网格系统”，过程中我将使用实例来演示。到最后，为了做出一些震撼的效果，我们还会学习对各种内容都可以实现滑动效果的插件：[Orbit:Javascript插件](http://zurb.com/playground/orbit-jquery-image-slider)。

<!--break-->

![foundation-2-1](http://pigerla.com/assets/images/20131106/foundation-2-1.png)

## 网格系统 ##

Foundation是一个以移动优先的流行框架。意味着将会加载最少的代码量和减少成本可致使页面渲染速度更快。与一些前端框架一样，Foundation是完全支持响应式的。但不同的是，Foundation只需要用到一个断点即可支持架构的改变。这断点定义viewport的宽度为768px宽。

实际上，这个网格系统本身有3个部分：电脑端网格，移动端网格和块网格。由于Foundation是以移动优先的前端框架，那就从移动端网格开始吧。

    “We only use one major breakpoint for the grid in Foundation to shift layouts for screens above 768px wide.”

## 小型网格 ##

![foundation-2-2](http://pigerla.com/assets/images/20131106/foundation-2-2.png)
    
    <div class="row">
	    <div class="small-12 columns">
	        <h2>This is Foundation</h2>
	    </div>
	</div>

上面代码列出了3个重要的class：第一个class为`row`（行）,是用来包含列数与列宽，就好像由许多列如细胞一般地排列在一行当中。在这个演示中，我们使用到12列网格，默认`12`是一行当中能有列数的最大值。如果你需要更多列数，Foundation允许你在自定义界面中设置最多为16列。

第二个class是`small-12`，改变里面的数字就可以定义该列的宽度。`small-12`只是定义宽度而已，还没有定义该列的存在，因此还需要第三个class为`columns`。这3个class都是网格系统的基础class。

简单地说，上面的5行代码形成一个由12列组成的，占满父窗口宽度。里面12列所展示的就是我们的内容。让我们使用更复杂的代码来进一步说明。

    <div class="row">
	    <div class="small-4 columns">
	        <h2>This is a sidebar</h2>
	    </div>
	    <div class="small-8 columns">
	        <h2>This is the content area</h2>
	    </div>
	</div>

在上面的例子当中，我们可以看到有两个`div`包含class`columns`，还有搭配另一个class(如：`small-4`)来定义该列的宽度。Foundation定义这些列在同一个父容器内来保证这些列是在同一层的，占满父容器宽度的。这两大列分别占据了4个（单位）列和8个（单位）列的宽度。刚好占满12个（单位）列，用百分比来说明就是分别占父容器宽度的33.3% 和66.6%。

这也重要地说明：这些`div`块是可以无限地内嵌套的，因此大大地提高灵活性。见下面代码例子：

    <div class="row">
	    <div class="small-4 columns">
	        <h2>This is a sidebar</h2>
	        <div class="row">
	            <div class="small-1 columns">
	                <h6>#1</h6>
	            </div>
	            <div class="small-9 columns">
	                <p>A post title</p>
	            </div>
	            <div class="small-2 columns">
	                <button>Go</button>
	            </div>
	        </div>
	    </div>
	    <div class="small-8 columns">
	        <h2>This is the content area</h2>
	    </div>
	</div>

可以看到这个sidebar例子用了`row`（行）内嵌套在`column`(列)里面，再嵌套`column`(列)，在第二个`row`里面嵌套了3列，分别宽度为`small-1`、`small-9`和`small-2`。是不是很方便实现？呵，我们是时候编写些Demo来实践体会一下，享受Foundation带来的方便。

## 大网格 ##

![foundation-2-3](http://pigerla.com/assets/images/20131106/foundation-2-3.png)

    <div class="row">
    <div class="small-4 large-3 columns">
        <h2>This is a sidebar</h2>
    </div>
    <div class="small-8 large-9 columns">
        <h2>This is the content area</h2>
    </div>
	</div>

上面的例子中给每一列额外添加一个class，分别为`large-3`和`large-9`,作用就是当网页在大屏幕上浏览时，就会把sidebar原来的33.3%宽扩展为`large-3`，也就相当于25%(3/12=0.25)父容器宽。内容空间也会随之扩展的。这是个简单方法，但对于适应不同浏览窗口来说，组织自己的内容布局是非常有帮助的。

接下来我们可以使用class为`large-centered`和`small-centered`快速地使某列内容居中，但是前提是某行中只有一列。如果有多列呢，又怎么办？我们就可以使用class`push`和`pull`来控制列的位置了。

    <div class="row">
    <div class="small-3 push-9 columns">3</div>
    <div class="small-9 pull-3 columns">9, last</div>
	</div>


在此例子中，第二个`div`本来应该显示在第一个`div`之后，但现在被`pull`（拉出到）前面显示，而第一个`div`却被`push`（推进到）后面显示。因此当在大屏幕下就可以左边显示列表，右边就显示主要内容，当屏幕变小的时候，内容就会自动地显示在列表下面。

## 块网格 ##

![foundation-2-4](http://pigerla.com/assets/images/20131106/foundation-2-4.png)

讲了以上两种网格系统，接下来要讲的是块网格，块网格是在不管屏幕的大小，使得列表元素都可以均匀的分布。特别是对块状的内容来说更为理想，并不要求正确地显示多少行或者多少列。如果你想在电脑端网页和移动端页面上显示相同的布局，你只需要使用以 `small-block-grid-`为前缀的class。
    
    <ul class="small-block-grid-2 large-block-grid-4">
	    <li><img src="../img/photo1.png"></li>
	    <li><img src="../img/photo2.png"></li>
	    <li><img src="../img/photo3.png"></li>
	    <li><img src="../img/photo4.png"></li>
	</ul>

总结来说，以上3种网格系统都是Foundation提供的，记住一点就是，从小网格到大网格只改变一次，使用小型网格目标运用在小型设备上，而大型网格则运用在电脑或者更大的屏幕。

## Orbit 插件 ##

为了更震感的效果，接下来要介绍的是Foundation的一个非常有用的插件：`Orbit`。

![foundation-2-5](http://pigerla.com/assets/images/20131106/foundation-2-5.png)

这个方便的插件可以当作滑动门来使用，
可以将图片、video甚至普通的html内容做成滑动效果。用法是使用简单的标记，很容易掌握运用，当使用得当时，效果就会变得无比震撼。

    <ul data-orbit>
	    <li>
	        <img src="../img/demos/demo1.jpg" />
	        <div class="orbit-caption">...</div>
	    </li>
	    <li>
	        <img src="../img/demos/demo2.jpg" />
	        <div class="orbit-caption">...</div>
	    </li>
	    <li>
	        <img src="../img/demos/demo3.jpg" />
	        <div class="orbit-caption">...</div>
	    </li>
	</ul>

Orbit用到一个列表架构，每个列表项目都当作为一个滑动片。上面代码中可以看到，除了`img`标签外，还有一个`div`包含一个class为`orbit-caption`，作用是可以为每张图片添加一个标题。Orbit还提供显示分页、（左右）控制器甚至（滑动间隔）时间器。

看下面你可以在Orbit中改变参数的例子：

    timer_speed: 10000,
	animation_speed: 500,
	bullets: true,
	stack_on_small: true

这些参数包含了滑动速度、分页和有选择地在小屏幕上堆栈。值得注意的是，这些参数是需要通过初始化才起作用的，因此你要使用放在body底部的` $(document).foundation() `标准使用代码：


    <script>
	  $(document).foundation();
	</script>

然后加上Orbit的选择参数：

	<script>
		$(document).foundation('orbit', {
		  timer_speed: 10000,
		  animation_speed: 500,
		  bullets: true,
		  stack_on_small: true
		});
	</script>

到目前为止，你就可以使用Orbit的效果了，还有更多的选择（参数）可以[`Foundation官方文档`](http://foundation.zurb.com/docs/components/orbit.html)上查看。

**备注**：Foundation可以分开下载选择的js文件，要记得把这些文件都放到body的底部，以加快页面渲染速度，如果你更喜欢一个压缩后的js文件的话，那也可以只引入一个js文件。

    <script src="js/foundation.min.js"></script>
	<!--
	<script src="js/foundation/foundation.js"></script>
	<script src="js/foundation/foundation.dropdown.js"></script>
	<script src="js/foundation/foundation.placeholder.js"></script>
	<script src="js/foundation/foundation.forms.js"></script>
	<script src="js/foundation/foundation.orbit.js"></script>
	-->

### 有用工具 ###

你想没有下载Foundation就可以尝试它？或者是想在一个干净的环境来测试你的想法？那就是点击[`方便的jsfiddle`](http://jsfiddle.net/matt3224/CA669/)。将可以用上最新版本的Foundation和包含所有的组件。

## 下一篇预告 ##

在本文章当中讲解了Foundation的3大基础网格系统，简单介绍了Orbit插件。那么在下一篇文章将学习导航栏和部分插件，伴随着一些有用的工具。