import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
