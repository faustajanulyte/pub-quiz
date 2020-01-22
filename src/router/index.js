import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/user/Login'
import Services from '@/components/admin/Services'
import Home from '@/components/user/Home'
import Quiz_1 from '@/components/user/quiz_1/Quiz_1'
import Multiple_Choice_Text from '@/components/user/Templates/Multiple_Choice_Text'
import Multiple_Choice_Image from '@/components/user/Templates/Multiple_Choice_Image'
import Buttons_test from '@/components/user/Buttons_test'
import Test from '@/components/user/Test'
import Results from '@/components/admin/Results'
import Quiz_results from '@/components/user/Quiz_results'

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
      path: '/Multiple_Choice_Image',
      name: 'Multiple_Choice_Image',
      component: Multiple_Choice_Image
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
    {
      path: '/Quiz_results',
      name: 'Quiz_results',
      component: Quiz_results
    },
  ]
})
