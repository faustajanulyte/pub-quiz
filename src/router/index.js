import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/user/Login'
import Services from '@/components/admin/Services'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
  ]
})