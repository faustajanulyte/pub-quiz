import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCountdownTimer from 'vuejs-countdown-timer'
import './assets/css/global.css'






Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueCountdownTimer)
Vue.use(require('vue-moment'));


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

