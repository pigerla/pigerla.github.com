---
layout: post
category : 教程
permalink : rockmongo/2014-12-07/how-to-connect-to-remote-mongodb-with-rockmongo/
tagline: "Supporting tagline"
tags : [mongodb , rockmongo , mongoHQ]
---

这里的远程mongodb就以**mongoHQ**为例，就是说你想使用Rockmongo连接**mongoHQ**来进行管理。

![mongoHQ](http://pigerla.com/assets/images/20141207/mongoHQ.png)

注明：测试环境是Ubuntu14.04 64bit / Rockmongo v1.1.3 / MongoDB v2.6.5

<!--break-->

进入Rockmongo安装的根目录下，通常在`／var/www/rockmongo`路径下。找到*config.php*文件并打开，在文件下面添加如下几行配置代码：

    /**
     * This is the configuration  for remote mongodb
     */
    $MONGO["servers"][$i]["mongo_name"] = "The name of mongodb"; // 随便自己命名，显示在rockmongo的db昵称，如： mongoHQ-helloworld
    $MONGO["servers"][$i]["mongo_host"] = "The host of mongodb"; // 远程mongodb服务器的主域名，如：troup.mongohq.com
    $MONGO["servers"][$i]["mongo_port"] = "The port of mongodb"; // 远程mongodb服务器提供的端口，如37017
    $MONGO["servers"][$i]["mongo_user"] = "The username of mongodb"; // 拥有权限操作该db的用户名，如：pigerla
    $MONGO["servers"][$i]["mongo_pass"] = "The password of mongodb"; // 拥有权限操作该db的用户密码，如：xxxxxx
    $MONGO["servers"][$i]["mongo_db"] = "The database's name of mongodb"; // 数据库的名称，如：helloworld
    $MONGO["servers"][$i]["mongo_auth"] = false; // 当值为false时，表示rockmongo使用这里的配置去连接远程mongodb,否则，只能在rockmongo登录界面输入以上信息进行登录
    $MONGO["servers"][$i]["control_users"]["admin"] = "admin"; // 当mongo_auth为false时，这设置才有效，表示在rockmongo登录界面，用户名为admin,密码为
    admin,这也是默认配置。
    $i ++;

重新来到Rockmongo的登录节目，选择自己命名的远程db昵称，然后输入帐号和密码都为**admin**,登录进去若没有问题，则连接mongoHQ成功；若连接报错如下：

    Execute failed:unauthorized
    function (){ return db.getCollectionNames(); }

报这个错的原因主要是你没有最高权限，而只是以用户的身份对db进行连接操作而已。想fix这个报错，请继续往下看。

从rockmongo根目录出发，进入`app/model`目录，打开`MDb.php`，找到**31**行,把

    $names = self::exec($db, 'function (){ return db.getCollectionNames(); }');
    
注释掉，改为：

    $names = $db->getCollectionNames();
    
如下截图,然后保存退出即可。

![mdp](http://pigerla.com/assets/images/20141207/mdp.png)

重新登录Rockmongo，则会连接成功了。


