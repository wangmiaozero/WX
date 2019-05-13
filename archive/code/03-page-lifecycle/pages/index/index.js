// 创建一个页面实例对象
Page({
  data: {},
  // 页面加载
  // 这个页面即将要工作了
  // 适合去做数据初始化
  onLoad () {
    // this.data.foo = 'hello world'
    this.setData({ foo: 'hello world' })
    console.log('index on load')
  },
  // 页面进入焦点状态（前台展示）
  onShow () {
    console.log('index on show')
  },
  // 当页面准备好了
  // 页面渲染完成
  onReady() {
    console.log('index on ready')
  },
  onHide () {
    console.log('index on hide')
  },
  // 页面卸载
  // 当页面被销毁
  onUnload () {
    console.log('index on unload')
  }
})