'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let list = [
      {
        id: 1,
        name: '牛奶'
      },
      {
        id: 2,
        name: '菠萝'
      }
    ]
    ctx.apiSuccess(list)
    // ctx.apiFail('数据查询失败!')
  }
}

module.exports = HomeController;
