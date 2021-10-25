import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../App.vue'

const routes = [
  {
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Employers'
    },
    path: '/employers',
    name: 'employers',
    component: () => import( '../views/EmployersComponent.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
