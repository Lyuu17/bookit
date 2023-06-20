import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import HotelView from '@/views/HotelView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue')
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import('@/views/SignInView.vue')
    },
    {
      path: '/hotel/:id',
      name: 'hotel',
      component: HotelView
    },{
      path: '/my-bookings',
      name: 'my-bookings',
      component: () => import('@/views/MyBookingsView.vue')
    }
  ]
})

export default router
