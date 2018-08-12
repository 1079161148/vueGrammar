<template>
  <div class="mock_box">
    <h1 class="fz36 t_info">mock模拟后台数据ajax请求</h1>
    <div class="list_box">
      <ul>
        <li v-for="item in list">
          <p>{{item.title}}</p>
          <p>{{item.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.$http({
      method: "get",
      url: '/mockdata',
    }).then(res => {
      console.log(res)
      this.list = res.data.list //mock出来的数据
    })
  }
}

</script>
<style lang="less" scoped>
li {
  list-style: none;
  font-size: 24px;
  padding: 20px;
  text-align: center;
}

</style>
