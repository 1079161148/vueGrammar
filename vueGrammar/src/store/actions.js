import * as types from './type.js'
export default {
  add: ({
    commit
  }) => {
    commit(types.ADD);
  },
  reduce: ({
    commit
  }) => {
    commit(types.REDUCE);
  },
  evenAdd: ({
    commit,
    state
  }) => {
    if (state.mutations.count % 2 == 0) {
      commit(types.ADD);
    }
  },
  syncAdd: ({
    commit
  }) => {
    new Promise((resolve) => {
      setTimeout(function() {
        console.log('异步体验')
        alert('异步体验')
        commit(types.ADD);
      }, 1000)
    })
  }

}

/*
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。
Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state
和 context.getters 来获取 state 和 getters。

Action 通过 store.dispatch 方法触发：
一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。

最后，如果我们利用 async / await，我们可以如下组合 action：
// 假设 getData() 和 getOtherData() 返回的是 Promise
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
*/