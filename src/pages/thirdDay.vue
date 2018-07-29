<template>
  <div class="third_box">
    <p class="fz36 t_info">Vue全局API</p>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item,index) in list2" :key="index">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item,index) in list1" :key="index">
        <span>{{item.name}}</span>
        <span>{{item.sex}}</span>
      </li>
    </ul>
    <p class="fz36 t_info">
      <span>{{obj.name}}</span>
      <span>{{obj.age}}</span>
      <span>{{obj.addr}}</span>
    </p>
    <p class="fz36 t_info">{{ contents | reverseStr }}</p> <!-- 过滤器用法main.js或者抽出来公共方法里面 -->
    <p class="fz36 t_info">{{ contens | reverseStr | removeNum }}</p>
    <!-- 将上一个过滤器输出内容作为下一个过滤器的输入内容 -->
    <button ref="btn" type="button" class="btn" @click="testClick">{{ content }}</button>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      list: [1, 2, 3, 4],
      list1: [{ name: 'bob', sex: '男' }, { name: 'flack', sex: '女' }, { name: 'opow', sex: '男' }],
      list2: [1, 2, 3, 4],
      content: '初始值',
      obj: {
        name: 'figh',
        age: 20
      },
      contents: 'abcd',
      contens:'abcd1234'
    }
  },
  created() {
    this.$set(this.list, 0, 5) //[5,2,3,4]
    this.$set(this.list1, 0, { name: "ChangeName", sex: '变态了' }) //vue.set用法
    this.$delete(this.list, 1) //[5,3,4] Vue.delete用法
    this.obj = Object.assign({}, this.obj, { addr: '江西省赣州市寻乌县' })
  },
  methods: {
    testClick() {
      this.content = '改变了的值';
      this.$nextTick(() => {
        // dom元素更新后执行， 因此此处能正确打印出更改之后的值；
        console.log(this.$refs.btn.innerText); //改变了的值
      })
    }
  },
  mounted() {
    /* `Vue.nextTick(callback)`，当数据发生变化，更新后执行回调。
        Vue.$nextTick(callback)`，当dom发生变化，更新后执行的回调。*/
  }
}
/*
调用方法:Vue.set( target, key, value )
target：要更改的数据源(可以是对象或者数组)
key：要更改的具体数据(第几项之类的)
value ：重新赋的值
设置对象的属性,如果对象是响应式的,确保属性被创建后也是响应式的,同时触发视图更新
-------------------------------------------------------------------------------
Vue.delete( target, key )
target：要更改的数据源(可以是对象或者数组)
key：要更改的具体数据(第几项之类的)
删除对象的属性,如果对象是响应式的,确保删除能触发更新视图。
--------------------------------------------------------------------------------
有时你想向已有对象上添加一些属性，例如使用 Object.assign() 或 _.extend() 添加属性。但是，添加到对象上的新属性不会触发更新。这时可以创建一个新的对象，包含原对象的属性和新的属性：
--------------------------------------------------------------------------------
有时候需要循环生成input，用v-model绑定后，利用vuejs操作它，此时我们可以在v-model中写一个数组selected[$index]，这样就可以给不同的input绑定不同的v-model，从而分别操作他们。
*/

</script>
<style lang="less" socped>
.third_box {
  ul>li {
    padding: 0.3rem 0;
    font-size: 0.36rem;
    color: #ff9933;
    line-height: 0.6rem;
    text-align: center;
    border-bottom: 1px dashed #ff9933;
    span {
      font-size: 0.36rem;
      color: #ff9933;
      line-height: 0.6rem;
      text-align: center;
    }
  }
  .btn {
    border: none;
    text-align: center;
    width: 3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.36rem;
    background: #ff9966;
    color: #fff;
    border-radius: 3px;
    margin: 0 auto;
    display: block;
  }
}

</style>
