import Vue from 'vue'
import App from './App.vue'
// import GlobalEvents from 'vue-global-events'
// Vue.component('GlobalEvents', GlobalEvents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
