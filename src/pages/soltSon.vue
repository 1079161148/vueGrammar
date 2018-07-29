<template>
  <div class="content">
    <p class="fz36 t_info">我就是slot的替代内容，这里可以放任何标签元素，即使是一长串ul>li列表</p>
    <p slot="mySlot" class="fz36 t_info">这是mySlot的slot替代内容，这里可以放任何标签元素包括列表,但是你必须给我加上slot="mySlot",不然就会报错</p>
    <p class="fz36 t_info">{{title}}</p>
    <slot text="hello from child"></slot>
    <ul>
      <li name="item" v-for="item in list">
        <!-- 这里写入备用内容 -->
        <p class="fz36 t_info">{{item.job}}</p>
        <p class="fz36 t_info">{{item.addr}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['list'],
  data() {
    return {
      title: '我是插槽子组件'
    }
  },
  created() {

  },
  methods: {

  }
}
/*
作用域插槽:(solt)
作用域插槽是一种特殊类型的插槽，用作一个 (能被传递数据的) 可重用模板，来代替已经渲染好的元素。
在子组件中，只需将数据传递到插槽，就像你将 prop 传递给组件一样：
在父级中，具有特殊特性 slot-scope 的 <template> 元素必须存在，表示它是作用域插槽的模板。slot-scope 的值将被用作一个临时变量名，此变量接收从子组件传递过来的 prop 对象
*/

</script>
<style lang="less" scoped>


</style>
