<template>
  <div class="content">
    <p class="fz36 t_info">动态组件</p>
    <!-- <button @click="checkComponent">点击切换组件内容</button> -->
    <ul class="tab_box">
      <li @click="checkComponent('showOne')">动态组件一内容</li>
      <li @click="checkComponent('showTwo')">动态组件二内容</li>
      <li @click="checkComponent('showThree')">动态组件三内容</li>
    </ul>
    <!--     <component v-bind:is="dongTaiComponent" keep-alive></component>   -->
    <keep-alive>
      <component :is="currentView">
        <!-- 非活动组件将被缓存！ -->
       <!--  渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。 -->
      </component>
    </keep-alive>
  </div>
</template>
<script>
import showOne from './showOne.vue'
import showTwo from './showTwo.vue'
import showThree from './showThree.vue'
export default {
  data() {
    return {
      currentView: 'showOne' //默认渲染组件
    }
  },
  components: {
    showOne,
    showTwo,
    showThree
  },
  created() {

  },
  methods: {
    checkComponent(tab) {
      this.currentView = tab
    }
  }
}

</script>
<style lang="less" scoped>
.content {
  height: 100%;
  .tab_box {
    display: flex;
    justify-content: center;
    li {
      flex: auto;
      color: #ff9933;
      font-size: 0.16rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background: #000;
      text-align: center;
      border-right: 1px solid #fff;
    }
    li:nth-child(3) {
      border-right: none;
    }
  }
}

</style>
