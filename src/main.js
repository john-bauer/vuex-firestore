import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import { store } from './store'
import AlertBox from './components/Alert.vue'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('app-alert', AlertBox)
Vue.component('app-navbar', NavBar)
Vue.component('app-footer', FooterBar)

Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
