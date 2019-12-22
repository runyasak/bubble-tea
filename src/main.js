import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import '@/assets/css/tailwind.css'
import '@/assets/css/helper.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
