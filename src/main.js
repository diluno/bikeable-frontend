// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import VueHead from 'vue-head'
import store from '@/store'

Vue.use(VueHead);
Vue.use(SocialSharing);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en' // set locale
})

new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
