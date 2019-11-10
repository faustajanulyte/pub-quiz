import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
import Contact from '@/components/contact/Contact'
import About from '@/components/about-us/About'
import Shop from '@/components/shop/Shop'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})