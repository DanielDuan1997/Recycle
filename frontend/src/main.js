// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import theme from 'muse-ui/lib/theme'

import '@/static/permission'

import myheader from '@/components/myheader'
import mylogo from '@/components/mylogo'

Vue.config.productionTip = false
Vue.use(MuseUI)

Vue.component('myheader', myheader)
Vue.component('mylogo', mylogo)

theme.add('indigo', {
  primary: '#3f51b5',
  secondary: '#00bcd4',
  success: '#1a237e',
}, 'light')
theme.use('indigo')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
