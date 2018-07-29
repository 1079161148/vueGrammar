<template>
  <div class="content">
    <p class="fz36 t_info">{{title}}</p>
    <slot></slot> <!-- 1.匿名slot使用 -->
    <slot name="mySlot"></slot><!-- 2.具名slot使用 -->
    <son-solt :list="list">
      <template slot-scope="props">
        <p class="fz36 t_info">hello from parent</p>
        <p class="fz36 t_info">{{ props.text }}</p>
      </template>
    </son-solt>
    <son-solts :items="items">
      <!-- 作用域插槽也可以是具名的 -->
      <li slot="item" slot-scope="props" class="my-fancy-item">
        {{ props.text }}
      </li>
    </son-solts>
  </div>
</template>
<script>
import sonSolt from './soltSon.vue'
import sonSolts from './soltSon.vue'
export default {
  data() {
    return {
      title: '我是插槽父组件',
      list: [
        { job: 'web开发', addr: '深圳' },
        { job: 'php开发', addr: '广东' },
        { job: 'java开发', addr: '上海' }
      ],
      items: [
        { food: '玉米', price: 21 },
        { food: '番薯', price: 24 },
        { food: '大米', price: 33 }
      ]
    }
  },
  components: {
    sonSolt,
    sonSolts
  },
  created() {

  },
  methods: {

  }
}

</script>
<style lang="less" scoped>


</style>
