import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/book',
    name: 'Book',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/role',
    name: 'Role',
    component: () => import('../views/Role.vue')
  },
  {
    path: '/borrow',
    name: 'Borrow',
    component: () => import('../views/Borrow.vue')
  },
  {
    path: '/class',
    name: 'Class',
    component: () => import('../views/Class.vue')
  },
  {
    path: '/label',
    name: 'Label',
    component: () => import('../views/Label.vue')
  },
  {
    path: '/score',
    name: 'Score',
    component: () => import('../views/Score.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
