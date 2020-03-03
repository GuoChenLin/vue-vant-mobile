<template>
  <div class='technology' ref='tec'>
    <Header :h='300'></Header>
    <H60></H60>
    <TecList :loading="loading"></TecList>
    <Footer></Footer>
    <BackTop v-show='backtop'></BackTop>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import H60 from '@/components/h_60.vue'
import TecList from '@/components/tecList.vue'
import BackTop from '@/components/backtop.vue'
export default {
  data () {
    return {
      REQUIRE: true,
      loading: false,
      res: 1,
      backtop: false
    }
  },
  components: {
    Header,
    Footer,
    H60,
    TecList,
    BackTop
  },
  mounted () {
    window.addEventListener('scroll', this.scrollBottom)
  },
  methods: {
    scrollBottom (e) {
      // 获取滚动元素的滚动高度距离
      const scrollT = e.target.scrollingElement.scrollTop
      // 判断是否显示返回顶部按钮
      if (scrollT >= 100) {
        this.backtop = true
      } else {
        this.backtop = false
      }
      // 获取整个文档的高度
      const clientH = document.body.clientHeight
      // 获取屏幕的高度
      const screenH = window.screen.height
      // 如果文档的高度 === 滚动高度距离加上屏幕的高度
      if (clientH === scrollT + screenH && this.REQUIRE) {
        // res用来检测渲染的数据进度
        this.res++
        this.loading = true
        this.REQUIRE = false
        // 模拟一步加载数据
        setTimeout(() => {
          this.loading = false
          this.REQUIRE = true
          console.log(this.res)
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
  .technology {
    background: #e6e6e6;
  }
</style>
