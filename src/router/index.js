import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld' 懒加载模式可不写此项

Vue.use(Router)

const router = new Router({
  mode: "history", //默认为hash模式，去掉地址栏#号；
  routes: [{
    path: '/',
    name: 'demoIndex',
    //meta: {keepAlive: true}, // 这个是需要keepalive的
    component: resolve => require(['@/components/demoIndex'], resolve)
  }, {
    path: '/firstday',
    name: 'firstDay',
    component: resolve => require(['@/pages/firstDay'], resolve)
  }, {
    path: '/parentdata',
    name: 'parentData',
    //meta: {keepAlive: false} // 这是不会被keepalive的
    component: resolve => require(['@/pages/parentData'], resolve)
  }, {
    path: '/thirdday',
    name: 'thirdDay',
    component: resolve => require(['@/pages/thirdDay'], resolve)
  }, {
    path: '/vuexday',
    name: 'vuexDay',
    component: resolve => require(['@/pages/vuexDay'], resolve)
  }, {
    path: '/fiveday',
    name: 'fiveDay',
    component: resolve => require(['@/pages/fiveDay'], resolve)
  }, {
    path: '/soltfater',
    name: 'soltFater',
    component: resolve => require(['@/pages/soltFater'], resolve)
  }, {
    path: '/dynamiccomponents',
    name: 'dynamicComponents',
    component: resolve => require(['@/pages/dynamicComponents'], resolve) //第八节---动态组件
  }, {
    path: '/eightday',
    name: 'eightDay',
    component: resolve => require(['@/pages/eightDay'], resolve)
  }, {
    path: '/imglazyload',
    name: 'imgLazyLoad',
    component: resolve => require(['@/pages/imgLazyLoad'], resolve)
  }]
})

/*
推荐使用路由懒加载的方式按需加载组件，优化性能；

*/

export default router;
