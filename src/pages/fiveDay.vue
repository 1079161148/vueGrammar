<template>
  <div class="live_box">
    <p class="fz36 t_info">{{message}}</p>
    <p>
      <button class="btn">beforeCreate</button>
    </p>
    <p>
      <button class="btn">created</button>
    </p>
    <p>
      <button class="btn">beforeMount</button>
    </p>
    <p>
      <button class="btn">mounted</button>
    </p>
    <p>
      <button class="btn">beforeUpdate</button>
    </p>
    <p>
      <button class="btn" @click="update">updated</button>
    </p>
    <p>
      <button class="btn">beforeDestroy</button>
    </p>
    <p>
      <button class="btn" @click="destry">destroyed</button>
    </p>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      message: '详解每个生命周期的过程'
    }
  },
  methods: {
    //更新
    update() {
      this.message = '我内容被更新了啊'
    },
    //销毁
    destry() {
      this.$destroy();
    }
  },
  beforeCreate() {
    console.group('beforeCreate 创建前状态===============》');
    console.log("el:" + this.$el); //undefined
    console.log("data:" + this.$data); //undefined
    console.log("message:" + this.message) //undefined
  },
  created() {
    console.group('created 创建完毕状态===============》');
    console.log("el:" + this.$el); //undefined
    console.log("data:" + this.$data); //已被初始化
    console.log("message:" + this.message); //已被初始化
  },
  beforeMount() {
    console.group('beforeMount 挂载前状态===============》');
    console.log("el:" + (this.$el)); //已被初始化
    console.log(this.$el);
    console.log("data:" + this.$data); //已被初始化
    console.log("message:" + this.message); //已被初始化
  },
  mounted() {
    console.group('mounted 挂载结束状态===============》');
    console.log("el:" + this.$el); //已被初始化
    console.log(this.$el);
    console.log("data:" + this.$data); //已被初始化
    console.log("message:" + this.message); //已被初始化
  },
  beforeUpdate() {
    console.group('beforeUpdate 更新前状态===============》');
    console.log("el:" + this.$el);
    console.log(this.$el);
    console.log("data:" + this.$data);
    console.log("message:" + this.message);
  },
  updated() {
    console.group('updated 更新完成状态===============》');
    console.log("el:" + this.$el);
    console.log(this.$el);
    console.log("data:" + this.$data);
    console.log("message:" + this.message);
  },
  beforeDestroy() {
    console.group('beforeDestroy 销毁前状态===============》');
    console.log("el:" + this.$el);
    console.log(this.$el);
    console.log("data:" + this.$data);
    console.log("message:" + this.message);
  },
  destroyed() {
    console.group('destroyed 销毁完成状态===============》');
    console.log("el:" + this.$el);
    console.log(this.$el);
    console.log("data:" + this.$data);
    console.log("message:" + this.message)
  }
}
/*
create 和 mounted 相关:
beforecreated：el 和 data 并未初始化
created:完成了 data 数据的初始化，el没有
beforeMount：完成了 el 和 data 初始化
mounted ：完成挂载    dom元素已经加载到HTML中
destroy 相关:  执行:app.$destroy()
销毁完成后，我们再重新改变message的值，vue不再对此动作进行响应了。
但是原先生成的dom元素还存在，可以这么理解，执行了destroy操作，后续就不再受vue控制了。

生命周期总结:
beforecreate : 举个栗子：可以在这加个loading事件
created ：在这结束loading，还做一些初始化，实现函数自执行
mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
beforeDestory:你确认删除XX吗？ destoryed ：当前组件已被删除，清空相关内容
*/

</script>
<style lang="less" scoped>
.live_box {
  p {
    margin: 0.3rem;
  }
}

</style>
