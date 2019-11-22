import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/components/user/User'
import Admin from '@/components/admin/Admin'
import Login from '@/components/login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})