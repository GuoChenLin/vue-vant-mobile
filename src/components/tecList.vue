<template>
  <div class='teclist'>
    <!--文章标题列表组件-->
    <h3>文章存档<small>滚动到底部自动加载</small></h3>
    <dl>
      <dt>2020</dt>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
    </dl>
    <dl>
      <dt>2019</dt>
      <dd> <span class='timer'>02/11</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
    </dl>
    <dl>
      <dt>2018</dt>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
      <dd> <span class='timer'>02/12</span><router-link to='/' class='link'>中tsx运用eslint进行格式化校验</router-link><span>666次浏览</span></dd>
    </dl>
    <div class='load'>
      <van-loading size="24/37.5rem" v-show='loading'>加载中...</van-loading>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      res: 0
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="less">
  dd,dl,dt {
    margin: 0;
    padding: 0;
  }
  dd {
    font-size: 12/37.5rem;
    text-align: left;
    line-height: 1.7;
    .link {
      margin-left: 10/37.5rem;
      color: #3d658d;
      &:active {
        background: hsla(200, 100%, 50%, 1);
        padding: 0 4/37.5rem;
        color: #fff;
      }
    }
    span:last-of-type {
      margin-left: 40/37.5rem;
    }
  }
  .teclist {
    padding: 10/37.5rem;
    background: #fff;
    width: 96%;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .teclist > h3 {
    text-align: left;
    font-size: 18/37.5rem;
    font-weight: bold;
    small {
      font-size: 12/37.5rem;
      color: #ccc;
      margin-left: 10/37.5rem;
    }
  }
  .teclist > dl {
    margin-bottom: 20/37.5rem;
    dt {
      height: 40/37.5rem;
      line-height: 40/37.5rem;
      color: #999;
      font-size: 12/37.5rem;
      border-bottom: 1px dashed #ccc;
      margin-bottom: 10/37.5rem;
      text-align: left;
      text-shadow: 0 0 1px #999;
    }
  }
  .load {
    height: 40/37.5rem;
  }
</style>
