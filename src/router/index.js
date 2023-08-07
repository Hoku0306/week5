import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/week5',
    redirect: '/Assignment'
  },
  {
    path: '/Assignment',
    name: 'Assignment',
    component: () => import('../views/AssignmentView.vue')
  },
  {
    path: '/Admin',
    name: 'Adout',
    component: () => import('../views/AdminView.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
