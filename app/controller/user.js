'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 用户注册
  async reg() {
    let { ctx, app } = this;
    // 参数验证
    let { username, password, repassword } = this.ctx.request.body
    // 验证用户是否已经存在
    let data = await app.model.User.findOne({
      where: {
        username
      }
    })
    if (data) {
      ctx.throw(400, '用户名已存在')
    }
    // 创建用户
    let user = await app.model.User.create({
      username,
      password
    });
    if(!user) {
      ctx.throw(400, '创建用户失败');
    }
    ctx.apiSuccess(user);
  }
}

module.exports = UserController;
