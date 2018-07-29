<template>
  <div class="son_box">
    <p class="son_title fz36 t_info">这是子组件显示的信息</p>
    <p class="fz36 t_info">{{getSize}}</p>
    <ul>
      <li v-for="item in list">
        <p>{{item.name}}</p>
        <p>{{item.age}}</p>
        <p>{{counter}}</p>
      </li>
    </ul>
    <p class="second_title fz36 t_info">{{getMsg}}</p>
    <!-- 父组件传过来的第二个值 -->
    <p>{{this.$parent.msg}}</p>
    <!-- 方法二 -->
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['list', 'getMsg', 'num'], //方法一
  data() {
    return {
      sonMsg: '我是子组件data里面的数据',
      counter: this.num, //接收方式一
    }
  },
  computed: {
    getSize: function() {
      return this.num //接收方式二
    }
  },
  created() {

  },
  methods: {

  },
  mounted() {

  }
}
/*
Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是反过来不会。
这是为了防止子组件无意间修改了父组件的状态
*/

</script>
<style lang="less" scoped>
.son_box {
  ul>li {
    color: #ff9933;
    font-size: 0.36rem;
    p {
      border-bottom: 1px dashed #ff9933;
      text-align: center;
      padding: 0.2rem 0;
    }
  }
}

</style>
