import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//import axios from './backend/vue-axios'
// import BootstrapVue from 'bootstrap-vue'

import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  //axios,
  render: h => h(App),
}).$mount('#app')

