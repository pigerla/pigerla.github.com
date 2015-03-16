---
layout: post
category : 教程
permalink : learning-sailsjs/2015-03-61/learning-polices/
tagline: "Supporting tagline"
tags : [sailsjs , polices]
---

## 1. Polices是什么，能干什么？

在sails应用中，Polices是一系列用来认证授权和访问控制的工具，能够在应用调用`controller`的`action`之前进行拦截，做些认证授权和访问控制的逻辑处理。

<!--break-->

## 2. 重现问题

问题：deploy之后不重新登录？退出登录后还可以访问页面？

错误代码例子：

    'GET /koala/order': {
        view : 'koala/order',
        locals : {              // 渲染页面的数据载体
          title: 'xxx'
        }
      },

上面的例子会导致不管你是否配置了`Polices`，一直都可以访问`koala/order`渲染出来的页面，但这跟我们的需求是想违背的，因此要解决这个问题。

## 3. 解决问题

有问题就要解，于是解决方案来了：

在`api/controllers/OrderController.js`文件里添加一个方法：`view_order`，如下：

    view_order: function(req, res){
        return res.view('koala/order', {
              title: 'xxx',
        });
    },
    
回到`routes.js`, 重新配置如下：

    'GET /koala/order': { controller: 'OrderController', action: 'view_order' },  // 或者
    'GET /koala/order': { controller: 'Order', action: 'view_order' },  // 或者
    'GET /koala/order': { 'OrderController.view_order' },  // 或者
    'GET /koala/order': { 'Order.view_order' }, 

为什么这样配置，就可以解决问题了呢，其实官方文档也提出“[警告说明][1]”：

> `Polices`只能应用在`controller`的`action`（即方法）上，而不能应用到`view`(视图)。就是说，如果在`routes.js`中配置一条路由直接指向`view`，那么`Polices`会忽略这条路由，而不会拦截。除此之外，你可以使用`controller`的一个`action`来处理页面渲染，那么`action`就能够被`Polices`拦截处理。

所以上面的代码实例就是上面引用说明的具体实践。

想想，我去！那岂不是在所有渲染页面的`controller`里都添加这个`view_order`的方法，后期维护难啊，路见不平，来改进一下吧：

    |-- api
        |-- View_renderController.js    // 新增这个controller，主要负责页面渲染
    |-- assets
    |-- config
        |-- routes.js
    |-- views
        |-- koala
            |-- order.jade

### 配置View_renderController

在`View_renderController.js`配置一个渲染页面的方法，如下：
    
    order : function (req, res) {
        res.view('koala/order', {
            title: 'xxx',
            user_name: req.session.user_name
        });
    },
    
### 配置routes

在`routes.js`配置用户访问的一条路由，如下：
    
    'GET /koala/order': {
        controller : 'View_renderController',
        action: 'order'
    },
    
这样子，只要在`View_renderController.js`中添加所有渲染的页面对应的方法，并在修改一下`routes.js`即可，并不会影响到其他文件，相对集中管理，有利于后期维护。

## 4. Polices的一些注意点

在`api/policies`文件下定义所有的`Polices`文件，例如：`isAuthenticated.js`。注意点如下：

### *是全局的policies，表示所有，全部

    {
        '*': isLoggedIn  // 可以放在这里（controller外面）
        OrderController: {
            edit: 'isLoggedIn',
        }
    }
    
或者

    {
        OrderController: {
            '*': isLoggedIn  // 可以放在这里（controller里面）
            edit: 'isLoggedIn',
        }
    }
    
### 内部提供两个policies（值）：`true`或`false`

> - 公共访问（允许所有访问到该action）
> - 禁止访问（禁止任何访问到该action）

### 每个policies文件里面应该只定义一个函数

    // policies/canWrite.js
    module.exports = function canWrite (req, res, next) {
        // logic code goes here .
    };

### 在配置列表中，下面的覆盖前面相同属性的policies

    {
      OrderController: {
        edit: 'isLoggedIn',
        edit: 'isAdmin'     // isAdmin会覆盖上面的isLoggedIn
      }
    }

### 可以应用一个或以上的policies

    {
      OrderController: {
        edit: ['isAdmin', 'isLoggedIn']   // 数组形式
      }
    }

[1]: http://sailsjs.org/#!/documentation/concepts/Policies

