module.exports = {
  // 成功提示
  apiSuccess(data = '', msg = 'ok', code = 200) {
    // 注意 this 这里指向的是 context 对象，因此不需要通过 this.ctx来操作了，直接this即可。
    this.status = code;
    this.body = {msg, data}
  },

  // 失败提示
  apiFail(data = '', msg = 'fail', code = 400) {
    this.body = {msg, data};
    this.status = code;
  }
}