<template>
  <div class='loading' v-show="loading" >
    <van-loading type="spinner" color='#fff' size='40px'/>
  </div>
</template>
<script>
export default {
  props: {
    data () {
      return {
        loading: false
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.$props.loading = false
    }, 2000)
  }
}
</script>

<style lang='less'>
  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: hsla(180, 20%, 50%, .9);
    text-align: center;
    z-index: 999999;
  }
  //这个是vant里面的样式
  .van-loading {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
