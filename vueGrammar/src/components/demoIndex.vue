<template>
  <div class="container">
    <h1>{{ Welcome }}</h1>
    <ul>
      <li v-for="(item,index) in list" @click="goItem(item.lensson)">{{item.lensson}}&nbsp;---&nbsp;{{item.name}}&nbsp;---&nbsp;&nbsp;{{item.page}}</li>
    </ul>
    <p class="tip">{{tips}}</p>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Welcome: 'vue知识点列表',
      list: [
        { lensson: '第一课', name: 'vue基本语法指令的使用', page: 1 },
        { lensson: '第二课', name: 'vue组件通讯', page: 2 },
        { lensson: '第三课', name: 'vue常用的全局API', page: 3 },
        { lensson: '第四课', name: 'vuex状态管理', page: 4 },
        { lensson: '第五课', name: 'vue生命周期', page: 5 },
        { lensson: '第六课', name: 'vue插槽', page: 6 },
        { lensson: '第七课', name: '动态组件', page: 7 },
        { lensson: '第八课',name:'vue过渡和动画介绍',page:8 },
        { lensson: '第九课',name:'VueLazyload懒加载',page:9},
        { lensson: '第十课' }
      ],
      tips: '点击对应的书签页进入对应的知识点demo'
    }
  },
  created() {

  },
  methods: {
    //去到每天的页面
    goItem(lensson) {
      if (lensson == '第一课') {
        this.go('firstDay')
      } else if (lensson == '第二课') {
        this.go('parentData')
      } else if (lensson == '第三课') {
        this.go('thirdDay')
      } else if (lensson == '第四课') {
        this.go('vuexDay')
      } else if (lensson == '第五课') {
        this.go('fiveDay')
      } else if (lensson == '第六课') {
        this.go('soltFater')
      } else if (lensson == '第七课') {
        this.go('dynamicComponents')
      }else if(lensson == '第八课'){
        this.go('eightDay')
      }else if(lensson == '第九课'){
        this.go('imgLazyLoad')
      }

    },
    go(pathName) {
      this.$router.push({ name: pathName, query: { hello: 'vuejs' } })
    }
  },
  mounted() {

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container {
  width: 100%;
  background: url(../assets/img/dz.jpg) no-repeat center;
  background-size: 100% 100%;
  h1 {
    font-size: 0.5rem;
    color: #F60811;
    padding: 0.6rem 0 0 0;
    text-align: center;
  }
  ul {
    height: 12.25rem;
    padding: 0.2rem 0.6rem;
    li {
      font-size: 0.3rem;
      height: 0.8rem;
      line-height: 0.8rem;
      color: #E01E9A;
    }
  }
  .tip {
    font-size: 0.25rem;
    color: #ff9933;
    padding-bottom: 0.4rem;
    text-align: center;
  }
}

</style>
