import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: () => import('../views/RestaurantsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/restaurant/:id',
    name: 'restaurant',
    component: () => import('../views/SingleRestaurantView.vue'),
    props: true
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: () => import('../views/UserProfileView.vue'),
    props: true
  },
  {
    path: '/user/:id/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
