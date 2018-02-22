import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile.vue'

import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    }
  ]
})
