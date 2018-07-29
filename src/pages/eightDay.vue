<template>
  <div class="content">
    <p class="fz36 t_info">{{title}}</p>
    <div style="border: 1px solid red;margin: 0.4rem">
      <p class="fz36 t_info">单元素/组件的过渡</p>
      <button class="btn" @click="show = !show">
        显示/隐藏
      </button>
      <transition name="fade">
        <p class="fz36 t_info" v-if="show">hello,vuejs----transition</p>
      </transition>
    </div>
    <div style="border: 1px solid red;margin: 0.4rem">
      <p class="fz36 t_info">CSS过渡</p>
      <button class="btn" @click="show1 = !show1">
        显示/隐藏
      </button>
      <transition name="slide-fade">
        <p class="fz36 t_info" v-if="show1">hello---css过渡</p>
      </transition>
    </div>
    <div style="border: 1px solid red;margin: 0.4rem">
      <p class="fz36 t_info">CSS动画</p>
      <button class="btn" @click="show2 = !show2">
        显示/隐藏
      </button>
      <transition name="bounce">
        <p class="fz36 t_info" v-if="show2">hello---css动画</p>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'vue里面的过渡和动画介绍',
      show: true,
      show1: true,
      show2: true,
      show3: true,
    }
  },
  created() {

  },
  methods: {

  }
}
/*
在进入/离开的过渡中，会有 6 个 class 切换。
1.v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
2.v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
3.v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (与此同时 v-enter 被删除)，在 transition/animation 完成之后移除。
4.v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
5.v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
6.v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (与此同时 v-leave 被删除)，在 transition/animation 完成之后移除。

*/

</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
  transition: 1.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: 1.5s;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

/*动画帧数*/
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
