<template>
  <div>
    <!-- <p class="fz36 t_info">{{title}}</p> -->
    <yd-rollnotice autoplay="2000">
      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
    </yd-rollnotice>
    <yd-pullrefresh :callback="loadList" ref="pullrefreshDemo">
      <yd-list theme="4">
        <yd-list-item v-for="item, key in list" :key="key">
          <img slot="img" :src="item.img">
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
              <span class="list-del-price">¥{{item.productprice}}</span>
            </div>
            <div>content</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>
    </yd-pullrefresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '我是动态组件渲染的第二个组件内容',
      page: 1,
      list: [{
          img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
          title: "标题标题标题标题标题",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
          title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
          title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
          title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
          title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
          marketprice: 56.23,
          productprice: 89.36
        }
      ]
    }
  },
  methods: {
    loadList() {
      let url = 'http://list.ydui.org/getdata.php';
      this.$http.jsonp(url, { params: { type: 'pulldown', page: this.page } }).then((response) => {
        let _list = response.body;
        this.list = [..._list, ...this.list];
        this.$dialog.toast({
          mes: _list.length > 0 ? '为您更新了' + _list.length + '条内容' : '已是最新内容'
        });
        this.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
        this.page++;
      });
    }
  }
}

</script>
<style lang="less" scoped>
.yd-rollnotice{
  font-size: 14px;
}
.yd-list-other{
  font-size: 16px;
}
</style>
