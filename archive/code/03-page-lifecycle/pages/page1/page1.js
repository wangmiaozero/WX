// 创建一个页面实例对象
Page({
  // 页面加载
  // 这个页面即将要工作了
  // 适合去做数据初始化
  onLoad() {
    console.log('page1 on load')
  },
  // 页面进入焦点状态（前台展示）
  onShow() {
    console.log('page1 on show')
  },
  // 当页面准备好了
  // 页面渲染完成
  onReady() {
    // 只有页面加载完成，才可以设置标题
    wx.setNavigationBarTitle({
      title: 'foo'
    })
  },
  onHide() {
    console.log('page1 on hide')
  },
  // 页面卸载
  // 当页面被销毁
  onUnload() {
    // 可以用于去在页面卸载之前保存页面状态
    console.log('page1 on unload')
  }
})