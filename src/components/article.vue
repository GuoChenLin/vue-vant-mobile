<template>
  <div class='article'>
      <article>
        <h3>水平垂直居中</h3>
        <div class='timeAndView'>
          <span>2020-2-29</span>
          <span>浏览次数：666</span>
        </div>
        <p>
          水平垂直居中方法在业务开发中，经常需要用到。
          但垂直居中方法在一种情况下可能有用，
          到了另外的情况又需要新的解决方 案了。
          所以在这一篇中，将我了解过的几种垂直居中方法总结出来.
          水平垂直居中方法在业务开发中，经常需要用
        </p>
        <p><a href="#">more</a></p>
      </article>
      <article>
        <h3>水平垂直居中</h3>
        <div class='timeAndView'>
          <span>2020-2-29</span>
          <span>浏览次数：666</span>
        </div>
        <p>
          水平垂直居中方法在业务开发中，经常需要用到
          但垂直居中方法在一种情况下可能有用，
          到了另外的情况又需要新的解决方 案了
        </p>
        <p><a href="#">more</a></p>
      </article>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '文章内容'
    }
  }
}
</script>

<style lang='less' scoped>
article {
  margin: 10/37.5rem auto 0;
  width: 98%;
  box-sizing: border-box;
  box-shadow: 0 0 5px #999;
  padding: 10/37.5rem;
  &:last-child {
    margin-bottom: 20px;
  }
  h3 {
    color: hsla(280, 100%, 50% ,1);
    font-size: 24/37.5rem;
  }

  p:first-of-type {
    font-size: 14/37.5rem;
    line-height: 1.5;
    letter-spacing: 3px;
    text-align: left;
    text-indent: 34/37.5rem;
  }
  p:last-of-type {
    height: 40/37.5rem;
    margin: 0;
    padding: 0 20/37.5rem;
    a {
      float: right;
      width: 60/37.5rem;
      height: 30/37.5rem;
      line-height: 30/37.5rem;
      text-align: center;
      background: peru;
      color:#fff;
      border-radius: 30/37.5rem;
      font-size: 12/37.5rem;
    }
    a:active {
      background: hsla(280, 100%, 50% ,1);
    }
  }
}

.timeAndView {
  height: 40/37.5rem;
  line-height: 40/37.5rem;
  span {
    font-size: 14/37.5rem;
  }
  span:first-child {
    float: left;
    color: orange;
  }
  span:last-child {
    float: right;
    color:tomato;
  }
}
</style>
