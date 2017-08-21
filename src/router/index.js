import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/Dashboard'
import Users from 'views/Users'
import Administrator from 'views/Administrator'
import Acupuncture from 'views/Acupuncture'
import Materiamedica from 'views/Materiamedica'
import Tcmfoundations from 'views/Tcmfoundations'
import Texts from 'views/Texts'
import Contentrequest from 'views/Contentrequest'
import Bugreport from 'views/Bugreport'
import Settings from 'views/Settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Administrator',
      name: 'Administrator',
      component: Administrator
    },
    {
      path: '/Acupuncture',
      name: 'Acupuncture',
      component: Acupuncture
    },
    {
      path: '/Materiamedica',
      name: 'Materiamedica',
      component: Materiamedica
    },
    {
      path: '/Tcmfoundations',
      name: 'Tcmfoundations',
      component: Tcmfoundations
    },
    {
      path: '/Texts',
      name: 'Texts',
      component: Texts
    },
    {
      path: '/Contentrequest',
      name: 'Contentrequest',
      component: Contentrequest
    },
    {
      path: '/Bugreport',
      name: 'Bugreport',
      component: Bugreport
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    }
  ],
  linkActiveClass: 'active'
})
