import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/user/Login'
import Services from '@/components/admin/Services'
import Home from '@/components/user/Home'
import Quiz_1 from '@/components/user/quiz_1/Quiz_1'
import Multiple_Choice_Text from '@/components/user/Templates/Multiple_Choice_Text'
import Buttons_test from '@/components/user/Buttons_test'
import Test from '@/components/user/Test'
import Results from '@/components/user/Results'

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
      path: '/Multiple_Choice_Text',
      name: 'Multiple_Choice_Text',
      component: Multiple_Choice_Text
    },
    {
      path: '/Buttons_test',
      name: 'Buttons_test',
      component: Buttons_test
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Results',
      name: 'Results',
      component: Results
    },
  ]
})