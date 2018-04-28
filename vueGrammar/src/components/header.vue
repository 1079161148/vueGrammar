<template>
  <div class="header">
    <p>{{msg}}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      msg: 'vue通用组件一般放在components下面比较舒服,例如头部'
    }
  }
}

</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 0.8rem;
  background: #ff9393;
  p {
    line-height: 0.8rem;
    font-size: 0.24rem;
    text-align: center;
    color: #fff;
  }
}

</style>
