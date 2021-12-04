import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'


Vue.config.productionTip = false

let data = {
  letters: mock,
  username: "",
  loggedIn: false,
  title: "",
  password: "",
  path: "",
  bio: "",
  highScore: 0,
  gamesPlayed: 0,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')