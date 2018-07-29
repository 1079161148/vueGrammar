<template>
  <div>
    <ul>
      <li v-for="img in list">
        <img v-lazy="img.src"  :key="img.src">
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      list: [{
          src: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
          title: "标题标题标题标题标题",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          src: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
          title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          src: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
          title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          src: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
          title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          src: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          src: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "2010夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          src: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "2017夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
          marketprice: 56.00,
          productprice: 89.36
        },
        {
          src: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "2025夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
          marketprice: 58.23,
          productprice: 79.46
        },
        {
          src: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "2019夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          src: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "2013夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
          marketprice: 54.23,
          productprice: 86.36
        },
      ]
    }
  }
}

</script>
<style lang="less" scoped>
img{
  height: 400px;
  width: 400px;
}

</style>
