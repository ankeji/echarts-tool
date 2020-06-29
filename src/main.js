/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-06-29 17:07:10
 * @LastEditors: ankeji
 * @LastEditTime: 2020-06-29 18:29:53
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
