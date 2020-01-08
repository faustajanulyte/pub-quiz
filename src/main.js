import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/global.css'

import vueAwesomeCountdown from 'vue-awesome-countdown'
Vue.use(vueAwesomeCountdown, 'vac')



Vue.use(BootstrapVue)
Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

function startTimer(duration) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);



      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      
      var display = document.querySelector('#time');
      display.textContent = minutes + ":" + seconds;



      if (--timer < 0) {
          timer = duration;
          clearInterval(setInterval);
      }
  }, 1000);
  
}