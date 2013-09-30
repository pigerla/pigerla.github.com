---
layout: post
category : 读书笔记
tagline: "Supporting tagline"
tags : [HTML5, localStorage, sessionStorage]
---

{% include JB/setup %}

HTML5本地存储API中的`localStorage`和`sessionStorage`在使用方法上是相同的，区别就是使用`sessionStorage`，在关闭页面后就会被清空记录，而`localStorage`则会一直保存着。

接下来就以localStorage为例，会对此展开基本使用方法的介绍。

## localStorage.setItem(key,value) ##

个人觉得`localStorage API`的使用方法简单易懂的，首先要知道，localStorage本地保存数据是以`(key,value)`（键值对）的形式来保存的。调用`setItem(key,value)`即可保存一个键值对数据。打开`chrome`的`Console`输入如下代码：

{% highlight html %} 
 
localStorage.setItem(8 , 24);
localStorage.setItem("Spy","pigerla.com");
localStorage.setItem("array",[1,2,3,4,5]);

{% endhighlight %}

然后点击`Resources`标签栏，再点击`Local Storage`后展开，即可看到保存后的数据，例子截图如下：

<img src="http://pigerla.com/assets/images/20130930/setItem.jpg" alt="localStorage.setItem()后效果截图" title="localStorage.setItem()后效果截图" width="527" height="170" />

从上面的代码可以看到，`setItem`可以直接保存基本数据类型和引用数据类型。是不是很方便，而且从字面上理解`set`就是要设置，也即是保存；`Item`就是数据项，因此`setItem`就是保存数据的意思。

## localStorage.getItem(key) ##

取出value的值是使用`localStorage.getItem(key)`的，先观察如下代码以及输出：

{% highlight html %}

localStorage.getItem("array");
输出："1,2,3,4,5"

localStorage.getItem(8);
输出："24"

localStorage.getItem("Spy");
输出："pigerla.com"

localStorage.getItem(24);
输出：null

localStorage.getItem("pigerla.com");
输出：null

{% endhighlight %}

首先我们也很容易理解，`get`一词就是带有`拿、取出`的意思，注意的是getItem里面的参数是key,如果你输入的是value值，那只会返回`null`。

## 如何清除掉本地存储数据？ ##

清除数据分为一次性清除和个别清除。

1. **一次性清除**：使用`localStorage.clear()`，使用`clear()`方法会所有保存数据都清除掉，因此此操作是危险性的，除非你真想这么做。
2. **个别清除** ：使用`localStorage.removeItem(key)`,如何个别清除？这个要看你如何去遍历数据、设定条件，然后执行此操作。

## 遍历保存在本地的数据 ##

localStorage也是有长度的，如何知道呢？这里HTML5也提供的简单的接口：调用`length`属性即可。

{% highlight html %}

localStorage.length；    //返回本地数据的长度

{% endhighlight %}

同时， 获取第 n 个数据的 key 键值则调用key()方法：localStorage.key(n)

{% highlight html %}

localStorage.key(1);
输出："Spy"

localStorage.key(0)；   
输出："8"

{% endhighlight %}

可以看出只能拿到key的值；需要拿到value值的话，还需要借助上面所说的`getItem()`。

{% highlight html %}

localStorage.getItem(localStorage.key(0));
输出："24"

localStorage.getItem(localStorage.key(1));
输出："pigerla.com"

{% endhighlight %}

## localStorage的存储大小以及溢出检测 ##

一般来说，localStorage的存储大小为`4M`,相对cookies来说是大了很多很多，因此存储的数据量也就更多了。

溢出检测，采用`try{ } catch{ }`形式来进行捕捉：

{% highlight html %}

try{
		localStorage.setItem(key,value);
}catch(oException){
	if(oException.name == 'QuotaExceededError'){
		console.log('已经超出本地存储限定大小！');
			// 可进行超出限定大小之后的操作，如下面可以先清除记录，再次保存
		localStorage.clear();
		localStorage.setItem(key,value);
	}
}

{% endhighlight %}

## 总结 ##

当时，我使用localStorage相关API的时候，文章[HTML5 本地存储 localStorage、sessionStorage 的遍历、存储大小限制处理](http://lzw.me/a/html5-localstorage.html "HTML5 本地存储 localStorage、sessionStorage 的遍历、存储大小限制处理")对我帮助很大，我也是重新按照自己的思路整理，并编写成自己的blog，同时也可以记录自己的学习过程。
