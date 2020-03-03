<template>
  <div class="aboutme">
    <van-swipe style="height: 100%;" vertical @change='changepage'>
      <van-swipe-item>
        <div class=‘firstpage’ ref='firstpage'>
          <p :class="{tranXone: tran}">你好，欢迎来到newblog博客</p>
          <p :class="{tranXtwo: tran}">我是 Guocheng</p>
          <p :class="{tranXthree: tran}">想了解更多可以往上滑动哦！</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class='boke'>
          两个博客
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          我的技能
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          我的兴趣爱好
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tran: false,
      msg: '使用swipe组件完成满屏切换'
    }
  },
  methods: {
    changepage (index) {
      if (index === 0) {
        this.tran = true
      } else {
        this.tran = false
      }
    }
  },
  mounted () {
    this.changepage(0)
  }
}
</script>
<style lang="less" scoped>
  .aboutme {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: orange;
    .van-swipe {
      .van-swipe-item {
        &:nth-of-type(1) {
          background: hsla(200, 100%, 50%, 1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: #fff;
            height: 30/37.5rem;
            line-height: 30/37.5rem;
            font-size: 18/37.5rem;
            transform: translateX(200px);
            transition: transform .4s;
            opacity: 0.5;
            &.tranXone {
              opacity: 1;
              transform: translateX(0);
              transition-delay: 300ms;
            }
            &.tranXtwo {
              opacity: 1;
              transition-delay: 700ms;
              transform: translateX(0);
            }
            &.tranXthree {
              opacity: 1;
              transition-delay: 1100ms;
              transform: translateX(0);
            }
          }
        }
        &:nth-of-type(2) {
          background: hsla(60, 100%, 50%, 1);
        }
        &:nth-of-type(3) {
          background: hsla(120, 100%, 50%, 1);
        }
        &:nth-of-type(4) {
          background: hsla(280, 100%, 50%, 1);
        }
      }
    }
  }
</style>
