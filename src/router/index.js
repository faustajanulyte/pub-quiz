import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/components/user/User'
import Quiz from '@/components/user/quiz/Quiz'
import Services from '@/components/admin/services/Services'
import Home from '@/components/user/home/Home'
import Quizes from '@/components/admin/quizes/Quizes'
import Results from '@/components/admin/results/Results'
import Add_admin from '@/components/admin/addadmin/Add_admin'
import Add_team from '@/components/admin/addteam/Add_team'

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
      path: '/quizes',
      name: 'Quizes',
      component: Services
    },
    {
      path: '/results',
      name: 'Results',
      component: Services
    },
    {
      path: '/addadmin',
      name: 'Add_admin',
      component: Services
    },
    {
      path: '/addteam',
      name: 'Add_team',
      component: Services
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})