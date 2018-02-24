import Vue from 'vue'
import Router from 'vue-router'
import ErrorPage from '@/pages/Error'
import HomePage from '@/pages/Home'
import ProfilePage from '@/pages/Profile.vue'
import AuthPage from '@/pages/Auth.vue'

import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '*', name: 'ErrorPage', component: ErrorPage},
    {path: '/', name: 'HomePage', component: HomePage},
    {path: '/auth', name: 'UserPage', component: AuthPage},
    {path: '/profile', name: 'ProfilePage', component: ProfilePage, beforeEnter: AuthGuard
    }
  ]
})
