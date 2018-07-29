import { ADD, REDUCE, EVENADD, SYNCADD } from './type.js'
import getters from './getter.js'

const state = {  //一般也可以把state抽出去
  count: 10
}

const mutations = {
  [ADD](state) {
    state.count++;
  },
  [REDUCE](state) {
    state.count--;
  }
}

export default {
  state,
  mutations,
  getters
}

/*
从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：
就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
且只有当它的依赖值发生了改变才会被重新计算。

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
Vuex 中的 mutation 非常类似于事件:每个mutation都有一个字符串的事件类型 (type)
和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方
并且它会接受 state 作为第一个参数：
你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）

一条重要的原则就是要记住 mutation 必须是同步函数
当需要在对象上添加新属性时，你应该
使用 Vue.set(obj, 'newProp', 123), 或者
以新对象替换老对象。例如，利用 stage-3 的对象展开运算符我们可以这样写：
state.obj = { ...state.obj, newProp: 123 }

*/