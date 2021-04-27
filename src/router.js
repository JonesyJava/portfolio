import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/biopage',
    name: 'BioPage',
    component: loadPage('BioPage')
  },
  {
    path: '/hobbiespage',
    name: 'HobbiesPage',
    component: loadPage('HobbiesPage')
  },
  {
    path: '/skillspage',
    name: 'SkillsPage',
    component: loadPage('SkillsPage')
  },
  {
    path: '/contactpage',
    name: 'ContactPage',
    component: loadPage('ContactPage')
  },
  {
    path: '/appspage',
    name: 'AppsPage',
    component: loadPage('AppsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
