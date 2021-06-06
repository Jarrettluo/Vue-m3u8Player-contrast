import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'video.js/dist/video-js.css' // 引入Video.js的样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
