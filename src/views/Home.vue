<template>
  <div class="home">
    <Loading></Loading>
    <Header :h="bannerheight"></Header>
    <Banner ref='banner'></Banner>
    <Article></Article>
    <van-pagination v-model="currentPage" :page-count="12" mode="simple" @change='changepage'/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Banner from '@/components/banner.vue'
import Article from '@/components/article.vue'
import Footer from '@/components/footer.vue'
import Loading from '@/components/loading.vue'
export default {
  name: 'Home',
  data () {
    return {
      currentPage: 1,
      bannerheight: 0
    }
  },
  components: {
    Header,
    Banner,
    Article,
    Footer,
    Loading
  },
  methods: {
    changepage (index) {
      console.log(index)
    }
  },
  mounted () {
    this.bannerheight = this.$refs.banner.$el.clientHeight
    console.log(this.bannerheight)
  }
}
</script>
