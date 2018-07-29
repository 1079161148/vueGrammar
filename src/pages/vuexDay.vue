<template>
  <div class="vuex_box">
    <p class="fz36 t_info">{{msg}}</p>
    <p class="fz36 t_info">
      <button @click="add" class="btn">增加</button>
    </p>
    <p class="fz36 t_info">
      <button @click="reduce" class="btn">减少</button>
    </p>
    <p class="fz36 t_info">
      <button @click="evenAdd" class="btn">偶数才能增加</button>
    </p>
    <p class="fz36 t_info">
      <button @click="syncAdd" class="btn">异步体验增加</button>
    </p>
    <p class="fz36 t_info">现在数字为:<span style="color:red">{{count}}</span>----它现在为:<span style="color:black">{{getOdd}}</span></p>
  </div>
</template>
<script type="text/javascript">
import {mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      msg: '欢迎来到vuex'
    }
  },
  created() {

  },
  computed:{
    ...mapGetters([
        'count',
        'getOdd'
    ])
  },
  methods:{
    ...mapActions([
        'add',
        'reduce',
        'evenAdd',
        'syncAdd'  //// 将 `this.syncAdd()` 映射为 `this.$store.dispatch('syncAdd')`
    ])
  }
}
// mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
// 如果你想将一个 getter 属性另取一个名字，使用对象形式
</script>
<style lang="less" scoped>


</style>
