<template>
  <div class="content">
    <p class="title fz36 t_info">{{title}}</p>
    <!-- 双花括号文本插值模式渲染data数据 -->
    <span class="one_info fz36" v-once>{{oneMessage}}</span>
    <!--  只改变一次数据 -->
    <p class="fz36 t_info">{{3+5}}</p>
    <!--  支持基本的运算 -->
    <p class="fz36 t_info">{{3+'a'}}</p>
    <!-- 支持字符串拼接 -->
    <ul>
      <li v-for="(item,index) in list">
        <!-- 遍历数组 -->
        <P>{{item.name}}---{{getIndex(index)}}</P>
        <P>{{getId(item.pId)}}</P>
      </li>
    </ul>
    <template>
      <!-- 对象渲染 -->
      <p class="fz36 t_info">{{obj.title}}</p>
      <p class="fz36 t_info">{{obj.desc}}</p>
      <p class="fz36 t_info">{{obj.tip}}</p>
    </template>
    <p v-if="!ok">你好你看不见我了么？</p>
    <!-- 条件渲染 还有v-else、v-else-if 判断dom是否存在-->
    <p v-if="ok" class="fz36 t_info">你好你看见我了么？</p>
    <p v-show="showText" class="fz36 t_info">我是v-show显示的文本</p>
    <!-- v-show是依据css的display属性控制显示隐藏的 -->
    <a :href="link" class="fz36 t_info" style="display: block">给我跳到百度去</a>
    <!-- 属性绑定最原始的是写法v-bind:属性 -->
    <p :class="{'bind_class':showClass}">我需要做一个样式绑定的操作了</p>
    <!-- 还可以绑定style,data里面值等操作 -->
    <input type="text" v-model="addText" placeholder="这就是双向绑定的例子">
    <input type="text" v-model.number="addText" placeholder="只能绑定数字">
    <input type="text" v-model.lazy="addText" placeholder="懒加载效果(失去焦点时候的效果)">
    <p class="fz36 t_info">{{addText}}</p>
    <div style="text-align: center">
      <button @click="count++" class="btn">add</button>
      <br/>
      <span class="fz36 t_info">加加减减{{count}}次</span>
      <br/>
      <button @click="count--" class="btn">reduce</button>
      <br/>
    </div>
    <p @click="getTargetName" class="fz36 t_info">点击获取到标签的名字</p>
    <input type="text" @keydown.enter="clickEnter">
    <!--  键盘事件 -->
    <p class="fz36 t_info" v-text="ok?sanmu:title"></p>
    <!-- vue使用三元运算符 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '第一天知识点',
      oneMessage: '一次改变',
      list: [{ name: 'bob', pId: 1 }, { name: 'wow', pId: 2 }, { name: 'pop', pId: 3 }],
      obj: {
        title: '我需要成为vue高手',
        desc: '你需要天天不断学习奋斗',
        tip: 'let start now!'
      },
      ok: true,
      showText: true,
      link: 'http://www.baidu.com',
      showClass: true,
      addText: '',
      count: 0,
      tip: 'vuejs',
      sanmu: '使用三木运算符渲染',
    }
  },
  created() {

  },
  methods: {
    //状态枚举
    getId(id) {
      let showId = '';
      if (id == 1) {
        showId = '(这是第一个学生)'
      } else if (id == 2) {
        showId = '(这是第二个学生)'
      } else if (id == 3) {
        showId = '(这是第三个学生)'
      }
      return showId
    },
    //下标枚举列出
    getIndex(index) {
      let showIndex = '';
      if (index == 0) {
        showIndex = '(这是第下标一)'
      } else if (index == 1) {
        showIndex = '(这是下标二)'
      } else if (index == 2) {
        showIndex = '(这是下标三)'
      }
      return showIndex;
    },
    getTargetName(event) {
      alert('hello' + this.tip + '我将要学习你') //this指向vue实例；
      if (event) {
        alert(event.target.tagName) //`event` 是原生 DOM 事件因此会弹出一个标签名字p
      }
    },
    clickEnter() {
      alert('keyCode')
    }
  }
}

</script>
<style lang="less" scoped>
.content {
  width: 100%;
  .title {
    text-align: center;
  }
  .one_info {
    display: block;
    text-align: center;
    color: #ff9933;
  }
  ul>li {
    padding: 0.3rem 0;
    border-bottom: 1px dashed #ff9933;
    p {
      font-size: 0.36rem;
      color: #ff9933;
      line-height: 0.6rem;
      text-align: center;
    }
  }
  .bind_class {
    text-align: center;
    color: #ff8566;
    font-size: 0.36rem;
  }
  input {
    width: 5rem;
    height: 0.8rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    border: none;
    outline: none;
    margin-left: 0.2rem;
    display: block;
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid #ff9933;
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
  }
}

</style>
