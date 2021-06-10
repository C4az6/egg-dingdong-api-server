module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    try {
      // 等待控制器中的代码执行完，如果出现异常则进入 catch
      await next()
      console.log("ctx.body: ", ctx.status)
      if (ctx.status === 404 && !ctx.body) {
        ctx.body = {
          msg: 'fail',
          data: '404 错误'
        }
      }

    } catch (error) {
      // 记录一条错误日志
      app.emit('error', error, ctx);

      const status = error.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const err = status === 500 && app.config.env === 'prod' ?
        'Internal Server Error' :
        error.message;

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = {
        msg: "fail",
        data: err
      };
      ctx.status = status;
    }
  }
}