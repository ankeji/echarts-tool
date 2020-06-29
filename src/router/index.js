/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-06-29 17:07:10
 * @LastEditors: ankeji
 * @LastEditTime: 2020-06-29 17:56:16
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },{
    path: '/page',
    name: 'page',
    component: () => import(/* webpackChunkName: "about" */ '../views/page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
