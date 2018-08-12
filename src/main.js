// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css'
import VueLazyload from 'vue-lazyload' //图片懒加载
import  './http/mock.js' //mockjs

Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,//预加载高度比例
  error: 'dist/error.png',//（图片路径错误时加载图片）
  loading: 'dist/loading.gif',//（预加载图片）
  attempt: 1 ,//（尝试加载图片数量）
  listenEvents: [ 'scroll' ]
})

require('@/assets/css/reset.css') //重置浏览器(需要用到的标签)自带样式
require('@/assets/css/base.css') //项目公共样式

const axios = require('axios') //vue推荐使用的ajax封装方法；
Vue.prototype.$http = axios

const FastClick = require('fastclick'); //移动端300ms延迟；
FastClick.attach(document.body)

Vue.use(YDUI);

Vue.config.productionTip = false

Vue.filter('reverseStr', function(value) {
  return value.split('').reverse().join('') //反转
});
Vue.filter('removeNum', function (value) {
  return value.replace(/[^0-9]/g, '');
})
//格式化时间
Date.prototype.Format = function(fmt) {
  var obj = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in obj) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (obj[k]) : (('00' + obj[k]).substr(('' + obj[k]).length)))
    }
  }
  return fmt;
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


/*

render 为推荐使用渲染方式；
*/
