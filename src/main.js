import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import BreakpointPlugin from 'vue-breakpoint'


import './assets/css/global.css'

// const { BreakpointPlugin } = window.VueBreakpoint

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

/* Vue.use(BreakpointPlugin, {
  print: { print: true },
  portrait: { orientation: "portrait" },
  mobile: { maxWidth: "600px" },
  mobilePortrait: { maxWidth: "600px", orientation: "portrait" },
  tablet: { minWidth: "601px", maxWidth: "800px" },
  desktop: { minWidth: "801px" },
}); */
