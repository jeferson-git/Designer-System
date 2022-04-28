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
  },
  {
    meta: {
      title: 'Tasks'
    },
    path: '/tasks',
    name: 'tasks',
    component: () => import( '../views/TasksComponent.vue')
  },
  {
    meta: {
      title: 'Shedule'
    },
    path: '/shedule',
    name: 'shedule',
    component: () => import( '../views/SheduleComponent.vue')
  },
  {
    meta: {
      title: 'Settings'
    },
    path: '/settings',
    name: 'settings',
    component: () => import( '../views/SettingsComponent.vue')
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
