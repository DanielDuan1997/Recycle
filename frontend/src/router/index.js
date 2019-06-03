import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Order from '@/components/Order'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
      alias: '/homepage'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/order/:order_id',
      name: 'order',
      component: Order,
    }
  ]
})
