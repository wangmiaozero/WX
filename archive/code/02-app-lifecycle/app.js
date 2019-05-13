// 每一个 JS 都有单独的作用域
// const foo = '123'

// 用于去创建一个应用实例对象
App({
  // 在整个应用启动时触发
  // 只会触发一次
  onLaunch: function (options) {
    console.log('应用启动了')
  },
  // 应用程序显示到屏幕上
  // 每次成为焦点状态都会触发
  onShow: function (options) {
    console.log('应用前台显示了')
    console.log(options)
  },
  onHide: function () {
    console.log('隐藏到后台')
  },
  // onError 只能捕获到运行阶段的异常
  onError: function (msg) {
    console.log(msg)
  },

  // 除了生命周期里面约定的 钩子函数，还可以定义任何成员，
  // 定义在这里的成员可以在后续每一个页面中共享
  foo: 'bar',
  say () {
    console.log('hello')
  }
})