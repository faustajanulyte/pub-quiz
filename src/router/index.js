import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/components/user/User'
import Quiz from '@/components/user/quiz/Quiz'
import Services from '@/components/admin/Services'
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