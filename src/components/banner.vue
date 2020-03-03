<template>
  <div class='banner'>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index" >
        <img :src="image.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '你好'
    }
  },
  props: {
    images: {
      type: Array,
      default: () => {
        return [
          {
            image: 'http://www.guocheng54.com/newblog/images/banner/banner1.jpg'
          },
          {
            image: 'http://www.guocheng54.com/newblog/images/banner/banner2.jpg'
          },
          {
            image: 'http://www.guocheng54.com/newblog/images/banner/banner3.jpg'
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
.banner {
  margin-top: 60/37.5rem;
}
.my-swipe {
  height: 220/37.5rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20/37.5rem;
  line-height: 150/37.5rem;
  text-align: center;
  width: 98%;
  height: 220/37.5rem;
}
.banner img {
  width: 100%;
  height: 220/37.5rem;
}
</style>
