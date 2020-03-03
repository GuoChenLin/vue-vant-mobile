<template>
  <div class='tool'>
    <div class='left' ref='left'>
      <ul>
        <li v-for="(item, index) in menulist" :key="index" :data-index="index" :class="{col: active===index}">{{item}}</li>
      </ul>
    </div>
    <div class='right'>
      <transition name='fade'>
        <ul v-if='show'>
          <li v-for="(item, index) in itemlist[active - 1]" :key='index'>
            <a :href="item.link"><span>{{item.name}}</span><br>{{item.text}}</a>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
import { mixin } from '@/mixins/mixin.js'
export default {
  mixins: [mixin],
  data () {
    return {
      active: 1,
      show: true,
      menulist: ['返回首页', '前端开发', '图标', '框架', 'IDE', '博客'],
      itemlist: [
        [
          {
            text: '在 W3School，你可以找到你所需要的所有的网站建设教程。 从基础的 HTML 到 CSS，乃至进阶的 XML、SQL、JS、PHP 和 ASP.NET',
            name: 'W3school',
            link: 'https://www.w3school.com.cn/'
          },
          {
            text: '在菜鸟教程有相对多的基础教程，包括html，css，js，以及各类框架，是新手的首先之地',
            name: '菜鸟教程',
            link: 'https://www.runoob.com/'
          },
          {
            text: '在这里可以找到各类在服务器别人已经帮你准备好的文件，比如jquery,jqueryui，bootstranp等',
            name: 'BootCDN',
            link: 'https://www.bootcdn.cn/'
          },
          {
            text: '这是一个优秀的社区，不懂的问题可以在这个平台问。当然你的问题需要有深度',
            name: '思否',
            link: 'https://segmentfault.com/'
          },
          {
            name: 'html5资料',
            text: '在这里可以看到html5的各种资料，进去看一眼或许对你有帮助哦',
            link: 'http://caibaojian.com/html5/'
          },
          {
            name: 'css3资料',
            text: '关于css3的资料，这个作者存储的很不错，跟方便查找，有些在其他地方找不到的，我在这里找到了解决方案，所以推荐给大家',
            link: 'http://caibaojian.com/css3/'
          },
          {
            name: '前端开发手册',
            link: 'https://cloud.tencent.com/developer/doc/1270',
            text: '这个手册很不错，省去了我很多查询资料的时间。推荐大家使用，里面包含各类框架。'
          },
          {
            name: '富文本编辑器',
            link: 'http://www.wangeditor.com/index.html',
            text: '这是一个优秀的富文本编辑器，与vue可以结合使用，用起来非常方便'
          }
        ],
        [
          {
            text: '如果你是想找图标，我的优先级就是阿里妈妈图标库了，这里有来自各位优秀设计师上传的图标，用着很方便',
            name: '阿里妈妈图',
            link: 'https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2'
          },
          {
            text: 'FindIcons.com是一个图标搜索引擎，可帮助您找到免费的图标。我们拥有世界上最大的可搜索免费图标数据库（找到的图标比我们更多的地方吗？让我们知道！），先进的搜索过滤和结果匹配系统',
            name: 'findicons',
            link: 'https://findicons.com/'
          },
          {
            text: '这是一个国外的icon网站',
            name: 'dryicons',
            link: 'http://p3nlhclust404.shr.prod.phx3.secureserver.net/SharedContent/redirect_0.html'
          },
          {
            text: 'coMoon致力于为完美主义者构建并提供最佳的图像和图标管理工具。IcoMoon的图标库仅包含最好的图标集。我们所有的图标都是在精确的像素网格上设计的。',
            link: 'https://icomoon.io/',
            name: 'iconmoon'
          }
        ],
        [
          {
            text: 'layui框架提供了很多页面元素以及内置模块可以帮助我们实现高效开发',
            name: 'layui',
            link: 'https://www.layui.com/doc/modules/laydate.html'
          },
          {
            text: 'vue框架能实现高效开发，组件化开发，在这个框架数据渲染直接有相应的方法，无需自己操作dom，减少了很多操作，也大大提高了开发效率',
            name: 'VUE',
            link: 'https://cn.vuejs.org/'
          },
          {
            text: 'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。',
            name: 'React框架',
            link: 'https://react.docschina.org/'
          },
          {
            text: '这个是和vue一起结合高效开发移动端的一个ui库',
            name: 'vamt',
            link: 'https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/intro'
          }
        ],
        [
          {
            text: 'Sublime Text 是一款流行的代码编辑器软件，也是HTML和散文先进的文本编辑器，可运行在Linux，Windows和Mac OS X。也是许多程序员喜欢使用的一款',
            name: 'Sublime'
          },
          {
            text: '利用现代JavaScript生态系统的全部功能-WebStorm可以满足您的要求！享受智能代码完成，动态错误检测，强大的JavaScript和TypeScript，样式表语言以',
            name: 'webstorm'
          },
          {
            text: 'EditPlus是用于Windows的文本编辑器，具有内置的FTP，FTPS和sftp功能。尽管它可以很好地替代记事本，但它还为网页作者和程序员提供了许多强大的功能。',
            name: 'editplus'
          }
        ],
        [
          {
            text: 'js/jquery各种宽高的理解和应用',
            name: 'haoroom',
            link: 'https://www.haorooms.com/'
          },
          {
            text: '为我们分享了js，vue，react以及html+css等有很多值得我们学习和借鉴的地方',
            name: '朝夕熊博客',
            link: 'http://yunkus.com/'
          },
          {
            text: '这是一个vue+element-ui的博客管理后台',
            name: '博客管理后台模版',
            link: 'https://blog.liuzuann.com/CMS/login'
          },
          {
            name: 'lijian',
            text: '博主为我们分享了自己封装的函数以及自己的作品',
            link: 'http://www.lijian2015.com/'
          }
        ]
      ]
    }
  },
  mounted () {
    // 使用通过自己封装的事件代理
    const that = this
    this.proxy(this.$refs.left, 'click', 'li', function (e) {
      // 解决点击左边菜单栏不是点击子项的时候，右边消失的问题
      if (this.dataset.index === undefined) {
        return
      }
      that.show = false
      // 怎么获取到对应的元素， 并且获得他们的索引
      const index = parseInt(this.dataset.index)
      if (index === 0 && !isNaN(index)) {
        // 当索引为一的时候，就进行页面跳转
        that.$router.push({
          path: '/'
        })
      } else {
        that.active = index
        // 需要把这段代码变成异步才能实现
        setTimeout(() => {
          that.show = true
        })
      }
    })
  }
}
</script>

<style lang="less" scoped>
  a {
    color: #fff;
  }
  .tool {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right bottom, hsla(180, 100%, 50%, .1), hsla(180, 100%, 50% ,.5));
    .left {
      float: left;
      width: 60/37.5rem;
      height: 100%;
      background: linear-gradient(90deg, hsla(180, 100%, 50%, .5) 0%, hsla(180, 100%, 50%, .1) 100%);
      li {
        font-size: 14/37.5rem;
        height: 60/37.5rem;
        line-height: 60/37.5rem;
        color: #fff;
        &.col {
          color: #fff;
          background: hsla(180, 100%, 50%, .5);
        }
        &:active {
          color: #fff;
          background: linear-gradient(90deg, hsla(180, 100%, 50%, .5) 0%, hsla(180, 100%, 50%, .1) 100%);
        }
      }
    }
    .right {
      overflow: hidden;
      ul {
        li {
          width: 33%;
          height: 4rem;
          float: left;
          background: #fff;
          font-size: 14/37.5rem;
          margin-right: 0.5%;
          margin-bottom: 0.5%;
          box-sizing: border-box;
          border-bottom: 10/37.5rem solid transparent;
          overflow: hidden;
          padding: 0 .1rem;
          &:nth-of-type(3n) {
            margin-right: 0;
          }
          a {
            color: #000;
            height: 4rem;
            display: block;
            box-sizing: border-box;
            text-align: left;
            span {
              display: inline-block;
              text-align: center;
              color:hsla(220, 100%, 50%, 1);
              width: 100%;
            }
          }
        }
      }
    }
  }
  // 右边数据卡片切换过渡
  .fade-leave-active, .fade-enter-active {
    opacity: 1;
    transition-duration: 500ms;
  }
  .fade-leave-to, .fade-enter-active{
    opacity: 0;
    transition-duration: 500ms;
  }
  .fade-enter-to {
    opacity: 1;
    transition-duration: 500ms;
  }
</style>
