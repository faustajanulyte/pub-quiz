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
import Buttons_test from '@/components/user/Buttons_test'
import Results from '@/components/admin/Results'
import Quiz_results from '@/components/user/Quiz_results'

const aws = require('aws-sdk')

aws.config.update({
  accessKeyId: "AKIAVO4FH3U2X2N7MFT6",
  secretAccessKey: "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"
})

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
      path: '/Buttons_test',
      name: 'Buttons_test',
      component: Buttons_test
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
      path: '/Text_Input_Text',
      name: 'Text_Input_Text',
      component: Text_Input_Text
    },
    {
      path: '/Text_Input_Image',
      name: 'Text_Input_Image',
      component: Text_Input_Image
    },
  
  ]
})
