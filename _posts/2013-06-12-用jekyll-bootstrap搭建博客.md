---
layout: post
category : 教程
permalink : learn-note/2013-06-12/create-a-blog-with-jekyll-bootstrap/
tagline: "Supporting tagline"
tags : [Github_blog, 初学者, jekyll]
---

RT，借助[Github Pages](https://pages.github.com/)搭建个人博客。这里强调"个人"，是因为Github Pages既包括**[User/Organization Pages](https://help.github.com/articles/user-organization-and-project-pages "点击可查看官方文档说明")**
(可以理解为“个人主页”)和**[Project Pages](https://help.github.com/articles/user-organization-and-project-pages "点击可查看官方文档说明")**(项目主页)，这里围绕“个人主页”而展开。

<!--break-->

- 在这里默认你懂得使用github的基本操作，如commit、add、push和pull等，懂得如何创建repositories（仓库，也即是一个项目工程），Github Pages不是新技术，而是你要按照特定的repositories（仓库）命名规则才能得到个人主页，命名规则如下：

- 创建一个repository，并命名为 xxxx.github.com，其中xxxx表示你的github帐号名 ，如我的：pigerla.github.com,其他默认即可。


![例图create_repository](http://pigerla.com/assets/images/20130612/create_repository.jpg)

- 创建成功之后，在该repository的根目录下新建一个“index.html”文件，此文件就是你托管在Github上的个人网站的主页。可以用编辑器打开index.html，并编写测试代码，并保存。例如：

	<h1>Hello World</h1>

至此，你的个人的Github Pages就创建成功了，如何验证？打开你的浏览器，并输入xxxx.github.com,就可以看到网页输入"Hello World",说明搭建成功了。

- 有了上面的“基础知识”之后，接下来部署本文章的主题“用jekyll-bootstrap搭建个人github_blog”就比较容易、轻松了。

## 要理解2个概念：

1. [jekyll](http://jekyllrb.com/docs/home/ "点击可查看此Blog中官方文档说明文章")-[bootstrap](http://jekyllbootstrap.com/ "点击可查看官方文档说明")中的jekyll不是一个博客软件，只是一个（博客）解析引擎，会把已经编写好的页面模版解析出来，呈现一个个可访问的页面，详细可看[jekyll官方文档](http://jekyllrb.com/docs/home/ "点击可查看此Blog中官方文档说明文章")。而bootstrap可以理解为：别人已经写好，具有blog雏形的简易blog开源系统框架，拿来即可使用。

2. 搭建个人blog实际上就是上面所说的，把托管在Github上的jekyll-bootstrap框架clone下来，然后替换上面搭建个人主页的repository根目录下所有的文件。

## 搭建步骤：

- 先将repository根目录下所有文件删除，再使用Git命令：git clone [https://github.com/plusjade/jekyll-bootstrap.git](https://github.com/plusjade/jekyll-bootstrap "Github上源代码")将jekyll-bootstrap下载到本地xxxx.github.com文件上，打开jekyll-bootstrap文件夹，并将里面所有的文件拷贝出来放在根目录下，并把jekyll-bootstrap文件夹删除。如截图：

![例图 : use_jekyll-bootstrap](http://pigerla.com/assets/images/20130612/use_jekyll-bootstrap.jpg)

- 再重新push到Github上去，很快地，在浏览器输入xxxx.github.com，就可以看到你的个人Blog了，当然显示的是别人写的样式与内容。想把自己的blog弄出特色，个性。建议你好好阅读一下[jekyll官方文档](http://jekyllrb.com/docs/home/ "点击可查看官方文档")。

至此，用jekyll-bootstrap搭建个人github_blog已经完成了，换句话说，你已经有了一个完整的、简单的个人blog了。