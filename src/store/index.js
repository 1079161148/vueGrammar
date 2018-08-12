import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations.js'
import createLogger from 'vuex/dist/logger'; // 修改日志

Vue.use(Vuex) //使用Vuex
const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false
export default new Vuex.Store({
    modules:{   //mutation本身是一个模块,
        mutations
    },
    actions,
    plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
})

/*
Vuex允许我们将store分割成模块（module）每个模块拥有自己的 state、mutation、action、getter、
甚至是嵌套子模块——从上至下进行同样方式的分割:
对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
const moduleA = {
  state: { count: 0 },
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
---------------------------------------------------------------------------------------------------
同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
---------------------------------------------------------------------------------------------------
对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
const moduleA = {
  // ...
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
*/