'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 用户注册
  async reg() {
    this.ctx.body = '用户注册'
  }
}

module.exports = UserController;
