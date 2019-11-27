import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/components/user/User'
import Admin from '@/components/admin/Admin'
import Quiz from '@/components/user/quiz/Quiz'

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
    }
  ]
})