import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hotel from '../views/Hotel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },{
      path: '/hotel/:id',
      name: 'hotel',
      component: Hotel
    }
  ]
})

export default router
