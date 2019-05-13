Page({
  data: {
    foo: 'hello wechat app'
  },

  inputChangeHandle (e) {
    // e.target -> 当前文本框
    console.log(e.detail.value)

    // 将界面上的数据再次同步回 数据源上
    // this.data.foo = e.detail.value

    // setData 
    // 1. 改变数据源
    // 2. 通知框架，数据源变了，需要重新渲染页面
    this.setData({ foo: e.detail.value })
  }
})