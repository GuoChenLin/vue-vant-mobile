// mixin可以为这个组件提供公共的数据或者一些封装的方法，因为可以全局导入，所以mixin也可以作为公共方法的一部分
// 全局： import mixin from 'xxx'
// Vue.Mixin(mixin)  这是全局的使用方法

// 混入一个自己封装事件的方法
const mixin = {
  data () {
    return {
      hello: 'hello mixin'
    }
  },
  created () {
    console.log('来自mixin的生命周期')
  },
  methods: {
    // 获取事件及事件对象目标
    getEvent (event = window.event) {
      return event
    },
    getTarget (event) {
      return event.target || event.srcElement
    },
    // 事件委托（事件代理）
    proxy (element, type, selector, fn) {
      // 如果只有三个参数就是事件绑定，如果有四个参数就是事件代理
      // selector就是需要代理的子元素
      if (fn == null) {
        fn = selector
        selector = null
      }
      const that = this
      element.addEventListener(type, function (e) {
        const event = that.getEvent(e)
        const target = that.getTarget(e)
        // 如果有四个参数，就进行this改变
        if (selector && target.matches(selector)) {
          fn.call(target, event)
        } else {
          fn(event)
        }
      })
    }
  }
}
export { mixin }
