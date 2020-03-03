<template>
  <div @click.stop='backtop' class='backtopbox'>
    &lt;
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'nihao'
    }
  },
  methods: {
    backtop () {
      // document.scrollingElement.scrollTop 是获取滚动高度的距离
      let h = document.scrollingElement.scrollTop
      // 返回顶部操作
      const timer = setInterval(() => {
        h = h - 15
        document.scrollingElement.scrollTop = h
        if (h <= 0) {
          clearInterval(timer)
        }
      }, 10)
    }
  }
}
</script>
<style lang="less" scoped>
  .backtopbox {
    position: fixed;
    right: 10px;
    bottom: 60px;
    width: 1.07rem;
    height: 1.07rem;
    line-height: 1.07rem;
    text-align: center;
    color: #fff;
    background: hsla(0, 0%, 50%, 1);
    transform: rotateZ(90deg);
    z-index: 99999;
    font-size: 0.64rem;
    font-weight: 600;
  }
</style>
