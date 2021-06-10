'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.throw(500, '我是故意抛出异常的。')
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
