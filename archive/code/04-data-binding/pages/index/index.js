Page({
  data: {
    // 这个对象里面的所有属性都可以在界面中访问到
    message: 'hello world',
    // 在 data 中只能暴露数据成员
    addPostfix: function (input) {
      return input + '1'
    }
  }
})