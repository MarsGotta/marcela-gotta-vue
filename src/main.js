import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'

import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import MultiLanguage from 'vue-multilanguage'
import Translate from './translate'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(MultiLanguage, Translate);
Vue.component('icon', Icon)


const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
