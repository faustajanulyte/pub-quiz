import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/components/user/User'
import Admin from '@/components/admin/Admin'
import Quiz from '@/components/user/quiz/Quiz'
import Services from '@/components/admin/adminservices/Services'
import Home from '@/components/user/home/Home'

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
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})