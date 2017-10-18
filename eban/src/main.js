// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css'
import EUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource';
import store from './store'

Vue.use(VueResource);
Vue.config.productionTip = false
Vue.use(EUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
