export default {
  count: (state) => {
    return state.count;
  },
  getOdd: (state) => {
    return state.count % 2 == 0 ? '现在变为偶数' : '现在变为奇数'
  },
}

/*
我们可以很容易地在任何组件中使用它：
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}

mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
*/