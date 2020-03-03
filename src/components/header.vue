<template>
<div class='p_f'>
  <div id='header' ref='header'>
    <div class='logo' v-if='logoshow'>NewBlog</div>
    <!--返回上一页-->
    <div class='back-btn' v-else @click='$router.go(-1)'>&lt;</div>
    <!--打开导航栏按钮-->
    <div class='nav-btn' @click='shownav' v-if="!flag">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!--关闭导航栏按钮-->
    <div class='nav-closebtn' @click='shownav' v-else>
      <span :class='{ close:trueclose }'></span>
      <span :class='{ close:trueclose }'></span>
    </div>
  </div>
  <!--导航栏-->
  <div class="nav" ref='nav'>
    <ul>
      <li><router-link to='/'>首页</router-link></li>
      <li><router-link to='/technology'>技术文档</router-link></li>
      <li><router-link to='/reading'>阅读笔记</router-link></li>
      <li><router-link to='/about'>关于我</router-link></li>
      <li><router-link to='/tool'>前端导航</router-link></li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      flag: false,
      trueclose: false,
      opacity: 0.5
    }
  },
  props: {
    logoshow: {
      type: Boolean,
      default: true
    },
    h: {
      type: Number,
      default: 0
    }
  },
  methods: {
    shownav () {
      // 实现导航栏下拉和上啦的效果
      const nav = this.$refs.nav
      // 获取每个小li的高度,没办法获取到nav元素的适口高度
      let h = 0
      const lis = nav.querySelectorAll('li')
      for (let i = 0; i < lis.length; i++) {
        h += lis[i].clientHeight
      }
      // console.log(h)
      if (!this.flag) {
        nav.style.height = h + 'px'
        setTimeout(() => {
          this.trueclose = true
        }, 100)
        this.flag = !this.flag
      } else {
        nav.style.height = '0px'
        this.trueclose = false
        this.flag = !this.flag
      }
    }
  },
  mounted () {
    // 兼容滚动事件，并且改变头部的透明度
    window.addEventListener('scroll', e => {
      // 解决其他页面不需要使用却报错的问题
      if (this.$refs.header === undefined) {
        return false
      }
      const scrollTop = document.scrollingElement.scrollTop
      // 当opacity大于等于1的时候等于1，当opacity小于等于0.5的时候，小于等于0.5.只截取小数点后两位
      this.opacity = (scrollTop / this.h).toFixed(2)
      if (this.opacity >= 1) {
        this.opacity = 1
      }
      if (this.opacity <= 0.5) {
        this.opacity = 0.5
      }
      this.$refs.header.style.backgroundColor = `rgba(63, 124, 246, ${this.opacity})`
      this.$refs.nav.style.backgroundColor = `rgba(63, 124, 246, ${this.opacity})`
    })
  }
}
</script>

<style lang="less" scoped>
.p_f {
  width: 100%;
  height: 60/37.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
#header {
  width: 100%;
  height: 60/37.5rem;
  line-height: 60/37.5rem;
  background: rgba(63, 124, 246, .5);
  padding: 0 10/37.5rem;
  box-sizing: border-box;
  .back-btn {
    float: left;
    width: 40/37.5rem;
    height: 100%;
    text-align: center;
    font-size: 36/37.5rem;
    color: #fff;
  }
  .logo {
    float: left;
    height: 100%;
    font-size: 16/37.5rem;
    font-weight: bold;
    color: #fff;
    line-height: 60/37.5rem;
  }
  .nav-btn {
    float: right;
    width: 60/37.5rem;
    height: 100%;
    box-sizing: border-box;
    padding: 10/37.5rem;
    text-align: center;
    span {
      display:block;
        width: 30/37.5rem;
        background: #fff;
        height: 2px;
        margin-top: 10/37.5rem;
        margin-left: auto;
        margin-right: auto;
    }
  }
  .nav-closebtn {
      float: right;
      width: 60/37.5rem;
      height: 100%;
      box-sizing: border-box;
      padding: 10/37.5rem;
      text-align: center;
      position: relative;
      span {
        display:block;
        width: 30/37.5rem;
        background: #fff;
        height: 2px;
        position:absolute;
        left:0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        transform: rotateZ(0deg);
        transition: transform .5s;
      }
      .close:first-child {
        transform: rotateZ(45deg);
      }
      .close:last-child {
        transform: rotateZ(-45deg);
      }
    }
  &::after {
    display: block;
    height: 0;
    content: '';
    visibility: hidden;
    clear: both;
  }
}
.nav {
  background: rgba(63, 124, 246, .5);
  transition: height .8s;
  height: 0;
  overflow: hidden;
  ul {
    li {
      height: 50/37.5rem;
      line-height: 50/37.5rem;
      a {
        color: #fff;
        font-size: 16/37.5rem;
      }
    }
    li:active {
      background: hsla(0, 10%, 50%, 1)
    }
  }
}
</style>
