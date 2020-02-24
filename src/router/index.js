import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/user/Login'
import Services from '@/components/admin/Services'
import Home from '@/components/user/Home'
import Quiz_1 from '@/components/user/Quizes/Quiz_1'
import Quiz_2 from '@/components/user/Quizes/Quiz_2'
import Quiz_3 from '@/components/user/Quizes/Quiz_3'
import Quiz_4 from '@/components/user/Quizes/Quiz_4'
import Multiple_Choice_Text from '@/components/user/Templates/Multiple_Choice_Text'
import Multiple_Choice_Image from '@/components/user/Templates/Multiple_Choice_Image'
import Text_Input_Text from '@/components/user/Templates/Text_Input_Text'
import Text_Input_Image from '@/components/user/Templates/Text_Input_Image'
import Results from '@/components/admin/Results'
import Quiz_results from '@/components/user/Quiz_results'
import AddUser from '@/components/admin/AddUser'
import Quizes from '@/components/admin/Quizes'
import CreateAQuiz from '@/components/admin/CreateAQuiz'
import Test from '@/components/user/Test'
import Add_Data from '@/components/user/Add_Data'
import Test_Questions from '@/components/user/Test_Questions'
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
      path: '/Quiz_1',
      name: 'Quiz_1',
      component: Quiz_1
    },
    {
      path: '/Quiz_2',
      name: 'Quiz_2',
      component: Quiz_2
    },
    {
      path: '/Quiz_3',
      name: 'Quiz_3',
      component: Quiz_3
    },
    {
      path: '/Quiz_4',
      name: 'Quiz_4',
      component: Quiz_4
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
    },
    {
      path: '/Text_Input_Text',
      name: 'Text_Input_Text',
      component: Text_Input_Text
    },
    {
      path: '/Text_Input_Image',
      name: 'Text_Input_Image',
      component: Text_Input_Image
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Add_Data',
      name: 'Add_Data',
      component: Add_Data
    },
    {
      path: '/Test_Questions',
      name: 'Test_Questions',
      component: Test_Questions
    }
  ]
})
