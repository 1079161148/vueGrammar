<template>
  <div class="content">
    <ul>
      <slot name="item" v-for="item in items" :text="item.food">
        <!-- 这里写入备用内容 -->
      </slot>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['items'],
  data() {
    return {

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
