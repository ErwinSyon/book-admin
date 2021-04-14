import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
// import '@/config/rem'

if(process.env.NODE_ENV === 'development')
  require('@/api/mock')

// 引用element ui
Vue.use(ElementUI);

// 阻止启动生产消息
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// 手动挂载到对应的DOM上
new Vue({
  router,
  store,
  render: h => h(App)
  // ES5写法
  // render: function(createElement){
  //   return createElement(App)
  // }
  // ES6写法
  // render:createElement=>createElement(App)
}).$mount('#app')

