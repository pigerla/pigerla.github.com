---
layout: post
category : 初学Foundation
permalink : foundation-for-beginners/2014-01-13/setting-up-foundation-with-sass-and-compass/
tagline: "Supporting tagline"
tags : [Foundation入门]
---

原文标题：[Setting up Foundation With Sass and Compass](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/setting-up-foundation-with-sass-and-compass/)

原文作者：[Matt Pilott](http://webdesign.tutsplus.com/author/matt-pilott/) , 2013-10-02

总的来说，使用Sass是一种很好地加速前端开发的途径，在我的每一个项目中都会使用它。Sass(跟其他预编译器一样)是允许嵌套样式、函数编程和支持混合的。Foundation到目前为止出了几个版本，之前我们都是在使用最常见的`HTML/CSS`版本，现在我们将讨论如何使用Sass来创建一个版本。

<!--break-->

Foundation开发团队不但只是使用Sass来开发更加友好和动态的样式，而且还提供更多定制样式在Sass版本上而不是把`HTML/CSS`版本上。

Sass更加适合一些这样的人，就拿我来说，设计第一，编码第二。学习HTML和CSS是很简单的，并且能够很快地实现你想要的效果，但是，要从这些学习衔接到更加高级的jQuery和JavaScript却是很困难的。前面提到，使用Sass允许你使用函数编程、支持变量和重用代码，就像使用高级的、动态语言一样。


## 开始：OS X 系统 ##

我们先从苹果OS X系统开始，首先打开控制台，然后把下面代码复制粘贴进去：

    sudo gem install zurb-foundation

安装Sass开发环境是需要一些时间的，安装成功之后就会显示如下界面：

![foundation-sass ](http://pigerla.com/assets/images/20140113/foundation-sass.png ) 

一旦你完成这步操作，基本上就安装好Foundation核心开发组件和文档了，当然也包括Sass了。这下子就可以不断地使用Foundation核心组件、文档而不用去打开Foundation官网。还有更加方便的是，可以通过简单的命令行来更新这些核心资源。命令行如下：

    sudo gem update zurb-foundation (更新为最新开发版本)
    sudo gem install zurb-foundation --pre （更新为最新发布版本）

接下来还剩下最后一步，就是安装[Compass](http://hub.tutsplus.com/tutorials/sass-and-compass-for-web-designers-introduction--webdesign-5561)，是用来构建Foundation用在我们的项目上。复制粘贴如下命令行到控制台执行：

    sudo gem install compass

安装成功之后应该显示如下界面：

![foundation-compass-.png](http://pigerla.com/assets/images/20140113/foundation-compass-.png )

现在安装好ruby gem并保持最新的版本的了，让我们开始创建一个工程来学习如何使用Foundation进行开发。

## 创建工程：OS X 系统 ##

任何时候你想创建工程，只要打开控制台，然后输入“cd”(改变目录)，再输入一个目录路径或者是一个文件夹来保存该工程。要记得“cd”与路径之间是要有空格的，接着输入下面命令行才真正创建工程：

    compass create YOUR-PROJECT-NAME -r zurb-foundation --using foundation

确保你把“YOUR-PROJECT-NAME”改为你想要的工程名然后就按回车。你就会看到会有很多选择信息，这都会指引你确认当你保存文件时，是否把Sass文件转化为CSS文件，或者是自己选择去转化。我会选择第二种，因为当我保存Sass文件时，就会自动地创建CSS文件，可以看到如下界面：

![Foundation-project-build](http://pigerla.com/assets/images/20140113/Foundation-project-build.png )

从上面界面可以看出发生了什么：成功创建了工程等。一旦你选择编译方法，可以使用“compass编译”或“compass监听”的方法,这将节省时间,因为它增加输出样式表和规范化。

现在，开始在工程上使用Sass吧。

## 开始：Windows 系统 ##

即使你在使用Windows系统，还是可以使用Sass版的Foundation，当然也要进行几步操作才行。首先，需要安装Ruby环境，才允许我们安装Sass版本的Foundation。这点就跟OS X系统不一样，Windows系统本身没有Ruby环境的，因此需要去[安装它](http://rubyinstaller.org/downloads/)

现在可能选择下载最新的版本，还要看自己的电脑是64位还是32位的，选择对应的版本下载。

下载完成之后就开始安装吧，除非你知道是什么意思，不然你都不要改变安装过程中的任何东西。安装成功之后，点击“Start Command Prompt with Ruby”来启动运行Ruby。弹出命令行窗口之后，就可以把如下命令行复制粘贴到里面执行：

    gem install zurb-foundation
你应该看到如下界面：

![foundation-cmd1](http://pigerla.com/assets/images/20140113/foundation-cmd1.png ) 

你还可以通过如下两行命令行来获取最新开发版或者最新发布版。

    gem update zurb-foundation
    gem install zurb-foundation --pre
   
跟上面一样，我们还有安装最后一部分：Compass，继续输入命令行：

    gem install compass

需要耐心等待安装，成功之后显示如下界面：

![foundation-cmd3](http://pigerla.com/assets/images/20140113/foundation-cmd3.png )

## 创建工程：Windows 系统 ##

首先需要选择工程存放的路径，例如“桌面”并执行。这点如上面OS X系统所说的一样，然后要把“YOUR-PROJECT-NAME”改成想要的工程名称。

    compass create YOUR-PROJECT-NAME -r zurb-foundation --using foundation

![foundation-cmd4](http://pigerla.com/assets/images/20140113/foundation-cmd4.png )

创建工程的所有操作都完成啦，接下来的操作都跟上面一样了。

## 有用的工具 ##

如果你是在OS X系统下开发的，推荐一个很好的开发工具为[CodeKit](http://incident57.com/codekit/)。这个应用会自动地压缩JS,CSS,SCSS-并且把SCSS转化为CSS，也意味着你可以不使用控制台了，就只使用它。CodeKit还提供在JS和SCSS,包括例如jQuery的库类上高亮显示错误信息。

![hero-window](http://pigerla.com/assets/images/20140113/hero-window.png )

如果是使用Windows呢？别担心，可以使用相类似的应用为[Prepros](http://alphapixels.com/prepros/)

![prepros](http://pigerla.com/assets/images/20140113/prepros.jpg )

## 下一篇预告 ##

下一篇我们将会详细讲解用Sass版本Foundation可以做些什么，包括定制构建过程，改变默认样式或者更多。


