<template>
  <div class="sons_box">
    <p class="son_title fz36 t_info">这是第二个子组件显示的信息</p>
    <button @click="sendMsgToFather">发送信息给父组件</button>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      sonMsg: '我是第二个子组件data里面的数据',
      sonSecondMsg:'我是第二种方法过来的子组件数据'
    }
  },
  created() {

  },
  methods: {
    sendMsgToFather() {
      //触发绑定给子组件的自定义事件
      this.$emit('sendParent', this.sonMsg);
    }
  },
  mounted() {

  }
}

</script>
<style lang="less" scoped>
.sons_box {
  button {
    color: #fff;
    font-size: 0.3rem;
    width: 6rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    background: #ff9933;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
  }
}

</style>
