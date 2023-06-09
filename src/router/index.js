import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/about',
      name: 'home',
      component: HomeView
    },{

    }
  ]
})

export default router
