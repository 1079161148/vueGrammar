<template>
  <div class="parent_box">
    <p class="title fz36 t_info">这是父组件要显示的东西网页数据等</p>
    <son-data :list="nameList" :getMsg="toSonMsg" :num="numList"></son-data>  <!-- 父到子 -->
    <second-son @sendParent="reseveMsg" ref="secondSon"></second-son> <!-- 子到父自定义事件 -->
    <p class="second_title fz36 t_info">第二个子组件传来的数据为:{{fromSonMsg}}</p> <!-- 子到父 -->
  </div>
</template>

<script type="text/javascript">
import sonData from '../pages/sonData.vue'
import secondSon from '../pages/secondSon.vue'
export default {
  data() {
    return {
      toSonMsg:'从父组件再传一个值过去',
      nameList: [{ name: 'bob', age: 20 }, { name: 'wow', age: 18 }, { name: 'pop', age: 19 }],
      fromSonMsg:'',
      numList:888
    }
  },
  components:{
    sonData,
    secondSon
  },
  created() {

  },
  methods: {
    reseveMsg(msg){
        this.fromSonMsg = msg +'/'+this.$refs.secondSon.sonSecondMsg;
        console.log(this.$refs.secondSon.sonSecondMsg)
    }
  },
  mounted() {

  }
}
</script>
<style lang="less" scoped>
.parent_box{
    background: #f2f1f1;
}
</style>
