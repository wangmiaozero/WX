Page({
  data: {
    students: [
      { id: 1, name: 'zjamg1', age: 18 },
      { id: 2, name: 'zjamg2', age: 18 },
      { id: 3, name: 'zjamg3', age: 18 },
      { id: 4, name: 'zjamg4', age: 18 }
    ],
    nums: [1, 2, 3, 4]
  },

  // 页面对象上除了 生命周期的钩子函数之外，可以定义任何其他的函数，
  // 这些函数可以作为视图层（界面）元素的事件处理函数
  addItemHandle() {
    // const students = this.data.students
    // students.push({ id: Math.random(), name: 'zjamg' + Math.random(), age: 18 })

    const students = [{ id: Math.random(), name: 'zjamg' + Math.random(), age: 18 }].concat(this.data.students)

    this.setData({ students })
  }
})