import { createRouter, createWebHistory } from 'vue-router'
import DeleteView from '@/views/DeleteView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/excluir',
      name: 'excluir',
      component: DeleteView
    }
  ]
})

export default router
