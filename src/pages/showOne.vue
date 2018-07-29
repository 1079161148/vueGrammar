<template>
  <div class="content">
    <p class="fz36 t_info">{{title}}</p>
      <yd-scrolltab>
        <yd-scrolltab-panel  :label="item.name" icon="demo-icons-category1" v-for="(item,index) in list"  :key="index">
          <div style="height: 350px;background-color: gray;"></div>
        </yd-scrolltab-panel>
        <!-- <yd-scrolltab-panel label="冰箱" icon="demo-icons-category2" active>
          <div style="height: 350px;background-color: blue;"></div>
        </yd-scrolltab-panel>
        <yd-scrolltab-panel label="洗衣机" icon="demo-icons-category3">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel> -->
      </yd-scrolltab>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '我是动态组件渲染的第一个组件内容',
      list:[]
    }
  },
  created() {
    let url = 'http://www.padmom.com/website/yuesao/recommend/'
    this.$http.get(url).then(res=>{
      console.log(res)
      this.list = res.data.data.slice(0,3)
      console.log(this.list)
    },res=>{
      alert('网络错误，请求超时')
    }).catch(err=>{
      console.log(err)
    })
  },
  methods: {

  }
}

</script>
<style lang="less" scoped>
.yd-scrolltab {
  position: absolute;
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

</style>
