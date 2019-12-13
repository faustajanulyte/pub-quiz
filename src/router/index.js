import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/components/user/User'
import Services from '@/components/admin/Services'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
  ]
})