---
layout: post
category : 读书笔记
tagline: "Supporting tagline"
tags : [Ajax, jsonp, serialize, jquery]
---

{% include JB/setup %}

今天，在项目中需要把表单域中大量的字段提交给后台，表单域内字段包括`text`,`password`和`radio`等，也由于表单域数据量较大，因此`form`使用了`post`方法，并使用了`jquery`中`serlalize()`方法对表单值进行序列化，创建 URL 编码文本字符串，序列化按我的理解就是在每个表单域中，把各个表单元素值，其中需要包含“`name`”属性，按前后的顺序，通过`&`连接符进行链接起来，如下代码：

<!--break-->

{% highlight html %}

http://gmpa.globalmarket.com/online/exhibitionApplyCallback.gm?callback=jQu…02&webSite=123456&passWord=123456&PasswordAgain=123456&compNameCN=%E6%82%A8%E5%A5%BD&compNameEN=&compSite=&cate=%E5%8A%9E%E5%85%AC%E6%96%87%E6%95%99%E7%94%A8%E5%93%81&address=%E6%82%A8%E5%A5%BD&mainProduct=%E6%82%A8%E5%A5%BD&applyName=%E6%82%A8%E5%A5%BD&applyPhone=%2B86+12345678902&applyEmail=474957860%40qq.com&standards=Y,N,Y,N,Y,N,Y,N&_=1380297237471

{% endhighlight %}


对数据进行序列化，方便对数据进行传输，同时便于后台调用；按一定方式组织起来，可以很方便地保存为文件，利于数据的保存甚至恢复。

## 如何使用serlalize() ？ ##

一般来说，对某表单form进行序列化，使用很简单，一句代码：

{% highlight html %}

var data = $("#applyForm").serialize(); //其中#applyForm是某form的id

{% endhighlight %}

不知道读者有没有留意到有这么一串数据`standards=Y,N,Y,N,Y,N,Y,N`，这里想说的是，上面所看到的`post`数据，其实是两个form的表单域组合成的，我对其中的一个主要是`radio`元素的值进行了字符串的`split()`,再提取其中的`Y`或者`N`值，最后整个form表单值通过`&`和另外一个链接起来……换句话说，序列化的表单域就是一个字符串，完全可以对其进行一系列字符串的操作，再使用Ajax异步请求出去。

## 接下来说jsonp ##

json和jsonp之间一个字符之差，两者之间还是挺大区别的，通常使用`json`此数据格式来传递数据，这里强调的是`数据格式`；靠`jsonp`来`跨域`传值，这里强调的是跨域交换数据的`协议`，一种非官方的跨域交换数据的协议。跨域可以理解为：不同后台，不同领域之间的传递数据。

使用也蛮方便的，关键是使用`dataType:'jsonp'`来声明这种协议。

{% highlight html %}

   $.ajax({
          url:"http://gmpa.globalmarket.com/online/exhibitionApplyCallback.gm",
          dataType:'jsonp',         //使用jsonp
          data: data+"&standards="+standards, //上面所说的拼接
          success:function(json){
             // To do something      
          }
    });

{% endhighlight %}

## 简单总结 ##

没有去实践，净是看，记忆不会加深，到了使用过，才会对`jsonp`、`serlalize`有形象的体会，我也只是简单地介绍，以便记录我的学习积累，若需要更深入学习，还需要自行查阅更多的资料、文献，同时，欢迎讨论。
