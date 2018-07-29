<template>
  <div class="sync_box">
    <p class="fz36 t_info">tab切换效果滑动以及异步数据效果</p>
    <yd-tab v-model="tabIndex" :callback="fn" :prevent-default="false" :item-click="itemClick" horizontal-scroll>
      <yd-tab-panel v-for="(item,index) in list" :label="item.label" :key="index">
        <div class="item_box">
          <p class="fz36 t_info"> 切换页面数据list、文字条目、图片都可以</p>
          <ul>
            <li v-for="tip in item.contentList">
              <p class="fz36 t_info">
                <span>{{tip.name}}</span>
                <span>---</span>
                <span>{{tip.age}}</span>
              </p>
            </li>
          </ul>
        </div>
      </yd-tab-panel>
    </yd-tab>
  </div>
</template>
<script>
export default {
  // horizontal-scroll横向滚动tab
  data() {
    return {
      tabIndex: 0,
      list: [{
          label: '选项一',
          contentList: [
            { name: "bob", age: 20 },
            { name: "wow", age: 21 },
            { name: "alice", age: 22 },
            { name: "checking", age: 23 },
            { name: "baobao", age: 24 }
          ]
        },
        {
          label: '选项二',
          contentList: [
            { name: "bob", age: 20 },
            { name: "wow", age: 21 },
            { name: "alice", age: 22 },
            { name: "checking", age: 23 },
            { name: "baobao", age: 24 }
          ]
        },
        {
          label: '选项三',
          contentList: [
            { name: "bob", age: 20 },
            { name: "wow", age: 21 },
            { name: "alice", age: 22 },
            { name: "checking", age: 23 },
            { name: "baobao", age: 24 }
          ]
        },
        {
          label: '选项四',
          contentList: [
            { name: "bob", age: 20 },
            { name: "wow", age: 21 },
            { name: "alice", age: 22 },
            { name: "checking", age: 23 },
            { name: "baobao", age: 24 }
          ]
        },
        {
          label: '选项五',
          contentList: [
            { name: "bob", age: 20 },
            { name: "wow", age: 21 },
            { name: "alice", age: 22 },
            { name: "checking", age: 23 },
            { name: "baobao", age: 24 }
          ]
        },
        {
          label: '选项六',
          contentList: [
            { name: "bob", age: 20 },
            { name: "wow", age: 21 },
            { name: "alice", age: 22 },
            { name: "checking", age: 23 },
            { name: "baobao", age: 24 }
          ]
        },
        {
          label: '选项七',
          contentList: [
            { name: "bob", age: 20 },
            { name: "wow", age: 21 },
            { name: "alice", age: 22 },
            { name: "checking", age: 23 },
            { name: "baobao", age: 24 }
          ]
        },
      ]
    }
  },
  methods: {
    //callback  切换时调用的函数（返回当前label和当前tabkey）
    fn(label, key) {
      console.log(label, key);
    },
    //tem-click点击选项卡时触发的方法
    itemClick(key) {
      this.$dialog.loading.open('数据加载中');
      setTimeout(() => {
        this.tabIndex = key;
        this.$dialog.loading.close();
        // this.list[key].content = '【key:' + key + '】改变后的内容' + new Date().getTime();
      }, 1000);
    }
  }
}

</script>
