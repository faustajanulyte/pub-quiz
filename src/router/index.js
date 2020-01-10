import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/user/Login'
import Services from '@/components/admin/Services'
import Home from '@/components/user/Home'
import Quiz_1 from '@/components/user/quiz_1/Quiz_1'
import quiz_1_questions from '@/components/user/Quiz_1_Questions/Quiz_1_Question'
import Buttons_test from '@/components/user/Buttons_test'

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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/quiz_1',
      name: 'Quiz_1',
      component: Quiz_1
    },
    {
      path: '/Quiz_1_questions',
      name: 'Quiz_1_question',
      component: quiz_1_questions
    },
    {
      path: '/Buttons_test',
      name: 'Buttons_test',
      component: Buttons_test
    },
  ]
})