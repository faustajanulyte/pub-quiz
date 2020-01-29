import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/user/Login'
import Services from '@/components/admin/Services'
import Home from '@/components/user/Home'
import Quiz_1 from '@/components/user/quiz_1/Quiz_1'
import Multiple_Choice_Text from '@/components/user/Templates/Multiple_Choice_Text'
import Multiple_Choice_Image from '@/components/user/Templates/Multiple_Choice_Image'
import Results from '@/components/admin/Results'
import Quiz_results from '@/components/user/Quiz_results'
import AddUser from '@/components/admin/AddUser'
import Quizes from '@/components/admin/Quizes'
import CreateAQuiz from '@/components/admin/CreateAQuiz'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Services',
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
      path: '/Results',
      name: 'Results',
      component: Results
    },
    {
      path: '/Quiz_results',
      name: 'Quiz_results',
      component: Quiz_results
    },
    {
      path: '/AddUser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/Quizes',
      name: 'Quizes',
      component: Quizes
    },
    {
      path: '/CreateAQuiz',
      name: 'CreateAQuiz',
      component: CreateAQuiz
    }
  ]
})
