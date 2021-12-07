# nestjs

## 九个核心概念

| 属性                                                         | 描述                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| [Controllers](https://docs.nestjs.com/controllers)    [控制器](https://docs.nestjs.cn/7/controllers?id=控制器) | 由`Nest`注入器实例化的服务，可以在这个模块之间共享。 |
| [Providers](https://docs.nestjs.com/providers)    [提供者](https://docs.nestjs.cn/7/providers?id=providers) | 存放创建的一组控制器。                               |
| [Modules](https://docs.nestjs.com/modules)    [模块](https://docs.nestjs.cn/7/modules?id=模块) | 导入此模块中所需的提供程序的模块列表。               |
| [Middleware](https://docs.nestjs.com/middleware)[中间件](https://docs.nestjs.cn/7/middlewares?id=中间件) | 导出这个模块可以其他模块享用`providers`里的服务。    |
| [Exception filters](https://docs.nestjs.com/exception-filters)    [异常过滤器](https://docs.nestjs.cn/7/exceptionfilters?id=异常过滤器) |                                                      |
| [Pipes](https://docs.nestjs.com/pipes)    [管道](https://docs.nestjs.cn/7/pipes?id=管道) |                                                      |
| [Guards](https://docs.nestjs.com/guards)    [守卫](https://docs.nestjs.cn/7/guards?id=守卫) |                                                      |
| [Interceptors](https://docs.nestjs.com/interceptors)    [拦截器](https://docs.nestjs.cn/7/interceptors?id=拦截器) |                                                      |
| [Custom decorators](https://docs.nestjs.com/custom-decorators)    [自定义路由参数装饰器](https://docs.nestjs.cn/7/customdecorators?id=自定义路由参数装饰器) |                                                      |



## 模块 Module

| 属性          | 描述                                                 |
| ------------- | ---------------------------------------------------- |
| `providers`   | 由`Nest`注入器实例化的服务，可以在这个模块之间共享。 |
| `controllers` | 存放创建的一组控制器。                               |
| `imports`     | 导入此模块中所需的提供程序的模块列表。               |
| `exports`     | 导出这个模块可以其他模块享用`providers`里的服务。    |



## 控制器 Controller

控制器负责处理客户端传入的请求参数并向客户端返回响应数据，说的通俗点就是路由`Router`。

```js
@Controller('user')
export class UserController {
    @Get()
    findAll() {
        return [];
    }

    @Get('/admin')
    admin() {
        return {};
    }
}
//  findAll访问就是  xxx/user
//  admin访问就是    xxx/user/admin
```

### [路由参数装饰器](https://docs.nestjs.cn/7/customdecorators?id=自定义路由参数装饰器)

| 装饰器名称                 | 描述                                   |
| -------------------------- | -------------------------------------- |
| `@Request()`               | 对应`Express`的`req`，也可以简写`@req` |
| `@Response()`              | 对应`Express`的`res`，也可以简写`@res` |
| `@Next()`                  | 对应`Express`的`next`                  |
| `@Session()`               | 对应`Express`的`req.session`           |
| `@Param(param?: string)`   | 对应`Express`的`req.params`            |
| `@Body(param?: string)`    | 对应`Express`的`req.body`              |
| `@Query(param?: string)`   | 对应`Express`的`req.query`             |
| `@Headers(param?: string)` | 对应`Express`的`req.headers`           |
| `@Ip()`                    | `req.ip`                               |

### 方法装饰器

| 装饰器名称    | 描述                                                      |
| ------------- | --------------------------------------------------------- |
| `@Post()`     | 对应`Express`的`Post`方法                                 |
| `@Get()`      | 对应`Express`的`Get`方法                                  |
| `@Put()`      | 对应`Express`的`Put`方法                                  |
| `@Delete()`   | 对应`Express`的`Delete`方法                               |
| `@All()`      | 对应`Express`的`All`方法                                  |
| `@Patch()`    | 对应`Express`的`Patch`方法                                |
| `@Options()`  | 对应`Express`的`Options`方法                              |
| `@Head()`     | 对应`Express`的`Head`方法                                 |
| `@Render()`   | 对应`Express`的`res.render`方法                           |
| `@Header()`   | 对应`Express`的`res.header`方法                           |
| `@HttpCode()` | 对应`Express`的`res.status`方法，可以配合`HttpStatus`枚举 |

