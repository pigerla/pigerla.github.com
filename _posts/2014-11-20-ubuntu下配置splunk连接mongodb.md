---
layout: post
category : 教程
permalink : enjoy-splunk/2014-11-20/install-splunk-db-connect-to-connect-mongodb/
tagline: "Supporting tagline"
tags : [splunk , splunk-db-connect, mongodb]
---

最近在试玩强大的分析log工具——**Splunk**,当然不是只能分析log,事实上还能分析关系型SQL或者非关系型NoSQL数据库里面的数据。对于关系型数据库，Splunk提供很好地支持，而对非关系型数据库，却需要一番“折腾”才能连接上。我使用的数据库是NoSQL开源代表——**mongodb**，下面分几步来配置Splunk连接mongodb。

<!--break-->

## 1. 下载Mongodb JDBC驱动包

需要两个包，分别是**mongodb_unityjdbc.jar**和**mongo-java-driver-2.11.2.jar**，后者版本在2.11.2以上应该都是可行的。
点击[下载**mongodb_unityjdbc.jar**](http://pigerla.com/assets/src/20141120/mongodb_unityjdbc.jar),[下载**mongo-java-driver-2.11.2.jar**](http://pigerla.com/assets/src/20141120/mongo-java-driver-2.11.2.jar)。

## 2. 将上面两个包放在路径Splunk\etc\apps\dbx\bin\lib下

如标题，从splunk根目录开始找，使用`cd`命令进入

    cd etc/apps/dbx/bin/lib/

然后把上面下载的包放在这目录（lib）下。

## 3. 修复database_types.conf配置文件配置使用两个包

来到路径splunk/etc/apps/dbx/default下，使用工具打开当前目录下的database_types.conf配置文件，然后在文件最后添加如下配置

    [mongo]
    displayName = MongoDB
    jdbcDriverClass = mongodb.jdbc.MongoDriver
    connectionUrlFormat = jdbc:mongo://{0}:{1}/{2}
    testQuery = SELECT 1
    
    [unity]
    displayName = Unity
    jdbcDriverClass = unity.jdbc.UnityDriver
    connectionUrlFormat = jdbc:unity://{0}
    testQuery = SELECT 1
    
如截图：

![daetabase_types_conf](http://pigerla.com/assets/images/20141120/daetabase_types_conf.png)

## 4. 在Splunk页面内安装应用——Splunk DB Connect

在这里通过加载应用包的形式安装应用，因此你需要先下载应用**Splunk DB Connect**，官方下载链接[https://apps.splunk.com/app/958/](https://apps.splunk.com/app/958/)，或者[直接下载](http://pigerla.com/assets/src/20141120/splunk-db-connect_115.tgz)

在启动Splunk后进入“应用”界面，点击“从文件安装应用”，如截图：

![install-db-connect](http://pigerla.com/assets/images/20141120/install-db-connect.png)

然后“上载应用”，选择上面下载的Splunk DB Connect应用包，如截图：

![upload-db-connect](http://pigerla.com/assets/images/20141120/upload-db-connect.png)

按“**上线**”之后会提示重启Splunk，按**确定**即可

## 5. 配置Splunk DB Connect

### 启用splunkd的SSL

为了能够运行**DB Connect**,必须要启用SSL。

打开$SPLUNK_HOME/etc/system/local/server.conf文件，来到**[sslConfig]**下，添加下面一行：
    
    enableSplunkdSSL = true
    
如截图：
![enableSplunkdSSL](http://pigerla.com/assets/images/20141120/enableSplunkdSSL.png)

保存文件并退出。

## 6. 重启Splunk
来到bin目录下,使用下面命令进行重启，有时可能要**sudo**权限

    ./splunk restart
    
重新进入Splunk DB Connect应用，如何发现提示：**The Java Bridge server is running**，那说明可以连接mongodb了。否则请继续**第7步**

![db-connect-is-running](http://pigerla.com/assets/images/20141120/db-connect-is-running.png)
    
## 7. 在Splunk上配置DB Connect的JDK环境

按截图：

![splunk-db-connect-conf](http://pigerla.com/assets/images/20141120/splunk-db-connect-conf.png)

进入配置界面：

![config-JDK](http://pigerla.com/assets/images/20141120/config-JDK.png)

在“java主页”输入框输入JDK的路径即可，按“保存”即可，重启Splunk再进入就行了。

现在你的Splunk能够连接mongodb了，不管远程还是本地......
    

    





    
