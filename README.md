# LeanCloud Koa示例程序

    LeanCloud官方示例采用express，这里提供了一个使用Koa框架的简单示例

## 一些坑

- 启动脚本需要加上--harmony参数，不然不支持generator
- 必须提供健康检查接口 /__engine/1/ping
- 注册云函数时LeanCloud采用的路由是基于connect, 需要转换成koa的路由，这里使用了koa-connect进行转换

## 功能示例
    该示例程序仅提供了json对象的创建和获取两个接口，示例如下：
- 创建
    
    ```
      curl -d '{"username": "test", "password": "test"}' -H 'Content-Type:application/json' 'http://koa-demo.leanapp.cn/os'
      结果：{"username":"test","password":"test","objectId":"570376aa2e958a00592b43ca","createdAt":"2016-04-05T08:26:18.130Z","updatedAt":"2016-04-05T08:26:18.130Z"}%
    ```
- 获取

    ```
     curl  'http://koa-demo.leanapp.cn/os/570376aa2e958a00592b43ca'
     结果：{"username":"test","password":"test","objectId":"570376aa2e958a00592b43ca","createdAt":"2016-04-05T08:26:18.130Z","updatedAt":"2016-04-05T08:26:18.130Z"}%
    ```

## 测试及部署方法
    参见 https://leancloud.cn/docs/leanengine_guide-node.html#快速入门