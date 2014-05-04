---
layout: post
category : Node应用
permalink: node-application/2014-05-04/getting-started/
tagline: "Supporting tagline"
tags : [Node应用]
---

想实践Node?学习搭一下Node架构如何？还想部署云端？来吧，看看如何梦想成真。

## 准备工作 ##

<!--break-->

1. **注册云端帐号** —— 想部署到云端，又想免费的，总得要注册一个帐号吧。

	- [Nodejitsu](https://www.nodejitsu.com/ "注册Nodejitsu帐号") — 推荐使用，需要注意的是，注册时，填写`Username`字段，建议简短易用，原因一是登录时，是使用`Username`+`Password`来登录的；二是当你`deploy`Node应用时，默认访问域名是：`Username-Node应用名称.jit.su`组合。例如[pigerla-helloworld.jis.su](https://www.nodejitsu.com/ "点击看效果")。登录成功之后，Nodejitsu会引导你部署第一个Node应用的，其实也就是来到[github jitsu](https://github.com/nodejitsu/jitsu)，阅读README，只要运行一个命令行`npm install jitsu -g`，把jitsu应用安装到全局，在哪个文件下都可以运行就可以了。当然，还有其他云平台，Paas类型的还有：
	- [heroku](https://id.heroku.com/signup "注册heroku")
	- [openshift](https://www.openshift.com/)
- [**注册Github帐号**](https://github.com/ "注册Github帐号") —— 点击链接过去注册即可，在用着Github?跳过这步骤吧。
- 创建一个Node应用。

## 3个准备工作之间的联系 ##

3者联系可以列为以下3种：

1. **Node应用 —> Nodejitsu** — 在本地，使用`jitsu deploy`命令行（如何安装jitsu? 参考“准备工作 1.注册云端帐号”）将可以部署到你的Nodejitsu帐号下，这个过程会提示你输入`yes`或`no`，或者其他信息，按指引输入即可。
2. **Node应用 —> github** — 其实就是使用github托管Node应用项目，分享自己的项目也行。跟第1条是并列的。
3. **Node应用 —> github —> Nodejitsu** — 如果第1，第2都是并列的操作，会增加deploy的成本，相当于一份本地源码，向两个分支提交代码。所以这联系链的意思是：像平常那样`push`本地代码到Github，然后代码也会同步到Nodejitsu，并自动重启该Node应用，而且是每次`push`都会重启。[codeship.io](www.codeship.io "注册或者登录codeship.io")就是连接Github与其他云端平台的中间平台，可以使用Github帐号登录。如何完成Github上Node应用到Nodejitsu之间的连接，请看介绍视频[How to deploy a node.js app from GitHub to Nodejitsu on Vimeo](http://vimeo.com/76988907 "Click and see the video").视频讲得比较详细、清晰。

这3种联系的部署，不需要都要有，如果你又想push到Github，又要deploy到Nodejitsu，那我建议你部署第3种吧，有了第3种，前2种也就存在了。

## 创建Node应用 ##

其实，一个有简单且内容 **xxx.js** 文件就是一个Node应用，只是这个Node应用功能很简单，能够做的东西十分有限，因此，需要安装相对应的Node模块、构建整个项目架构来拓展自己的Node应用。这也是我们会看到Node项目复杂目录结构，很多时候只是知道需要这些结构或者文件，而不知道为什么？

我就以自己的创建的**helloworld**的Node web应用来说一下目录结构或者文件。项目是以MVC框架为导向的，正如你现在看到的项目结构，只有`view`层，但接下来还会有`controller`和`model`层，然后使用可以app.js来联合3层起来，这里说的是“可以”，因为发现这样子app.js会变得越来越庞大，可能导致后面难维护，解决方法可以是使用多一个，如combine.js来做联合逻辑。
### app.js ###

下面是一些必要的配置：

    // Application setups（配置）
	app.configure('all' , function(){
	    app.set('port' , process.env.PORT || 8080); //建议是8080端口，因为需要在Nodejistu部署
	    app.set('views' , __dirname + '/views'); //设置视图文件在根目录的views文件夹下
	    app.set('view engine' ,'jade'); // 模版引擎设置为jade ,因此需要安装jade模块
	    app.set('view options' , {layout : true}); //设置layout为可用。
	    app.use(express.favicon());
	    app.use(express.logger('dev'));
	    app.use(express.cookieParser()); // 使用cookie解析器
	    app.use(express.session({    
	        secret:"helloworld",
	        cookie:{  //设置cookie有效时间
	            maxAge : 24 * 60 * 60 * 1000
	        }
	    }));
	    app.use(express.bodyParser());
	    app.use(express.methodOverride());
	    app.use(express.static(path.join(__dirname , 'public'))); //设置静态文件的路径，在根目录的public文件下
	});

### package.json文件 ###

正如我在README.md里写在前面，添加**package.json**文件，这个文件作用可以理解为1.配置该项目所用到的Node模块名称以及（具体）版本号；2.配置该项目的相关信息，类似小小的说明书。在Node的环境下,当我们在项目的根目录下，运行`npm install`时，Node包管理器就会自动读取根目录下package.json文件，找到`dependencies`，并安装对应版本的模块。为了让Nodejistu知道默认启动哪个文件，还要添加一个字段代码如下：

    "scripts": {
        "start": "node app"
    }

意思就是默认启动根目录下的app.js，当然，你也可以命名为start.js等

npm把模块安装到根目录的**node_modules**，Node通过require的方式就可以使用相对应的模块

### views文件夹 ###

项目里使用html模版 —— **jade**，想补充关于**jade**的知识？请参考下面给出README中的jade链接，或者其他途径自行补充。

因此，主要在里面编写jade文件，如我先写了**layout.jade**布局文件，其他jade可以通过`extends`来使用。

### public文件夹 ###

静态文件所在文件夹，例如我分为**icon**/**images**/**stylesheets**/**javascripts**等，当要引入相应框架、插件等文件时，并创建对应的名称文件夹，里面才创建对应的版本号，最后再放上压缩文件和未压缩文件。当然，这是我个人建议做法。

### 让应用跑起来 ###

回到app.js文件，编写实现首页的路由以及响应，代码如下：

	//“/”表示首页，resData表示响应后返回到jade模版的数据
	app.get('/' , function(req ,res){
	    resData = {
	        title :"Hello World | Node App",
	        author : "Spy"
	    };
		//“index”即是使用index.jade来结合数据后渲染出html，要去掉后缀
	    res.render('index' , resData);
	}); 

如果，在本地启动话，浏览器中打开`localhost:8080`看看效果，或者你可以push代码到Github上，稍等几分钟，打开相对应的Nodejistu域名，看看效果。

### 总结 ###

我的项目还不完整，后面还会不断地补充，到这里为止，你应该会使用github或者Nodejistu，打通了自己的Node应用云端流程；自己的Node应用可以运行在云端；对Node结构有进一步理解，我觉得有对Node结构的理解之后，就可以自由地创建自己的目录结构。


----------


### 附上README.md ###

# helloworld #

### [**helloworld**](http://pigerla-helloworld.jit.su/ "http://pigerla-helloworld.jit.su/") is a Node Application hosted in [Nodejitsu](https://www.nodejitsu.com/ "www.nodejitsu.com") and based on MVC architecture. 

![Codeship Status](https://www.codeship.io/projects/8cc41340-b511-0131-9708-46b4e31e8267/status "Codeship Status")

**Suggestion:** If you are interseted in Node and wanna create your own Node Application , suggest you forking the repository and following my steps.What is more , I'm sure you can find some your own stuff in **Architecture Changed Notes** chapter.

#### Get any issue ? click here [helloworld issue](https://github.com/pigerla/helloworld/issues) and tell me ,thx at all. ####

## Architecture Changed Notes ##

#### 2014/05/03 ####

- added "package.json"
	- completed certain configurations , especially 'dependencies'.
	- run command line "npm install" , for installing...
		- [express](https://github.com/visionmedia/express)
		- [jade](https://github.com/visionmedia/jade)
		- [mongoose](https://github.com/LearnBoost/mongoose)
- added "views" folder
	- as the "View" level of MVC.
	- use **jade** html template.
- added "public" folder
	- for static files , such as icon / images / stylesheets / javascripts.
	- name for the plugin that will be used and version.
- configured **Codeship**
	- Push codes into Github then deploy in Nodejitsu. 
	- video:[How to deploy a node.js app from GitHub to Nodejitsu on Vimeo](http://vimeo.com/76988907 "Click and see the video").