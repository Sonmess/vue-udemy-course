import Home from '@/views/home/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: APP_ROUTE_NAMES.HOME,
      component: Home,
    },
    {
      path: '/contact-us',
      name: APP_ROUTE_NAMES.CONTACT_US,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/home/ContactUs.vue'),
    },
    {
      path: '/sign-in',
      name: APP_ROUTE_NAMES.SIGN_IN,
      component: () => import('@/views/auth/SignIn.vue'),
    },
    {
      path: '/sign-up',
      name: APP_ROUTE_NAMES.SIGN_UP,
      component: () => import('@/views/auth/SignUp.vue'),
    },
    {
      path: '/access-denied',
      name: APP_ROUTE_NAMES.ACCESS_DENIED,
      component: () => import('@/views/auth/AccessDenied.vue'),
    },
    {
      path: '/product-list',
      name: APP_ROUTE_NAMES.PRODUCT_LIST,
      component: () => import('@/views/product/ProductList.vue'),
    },
    {
      path: '/product-create',
      name: APP_ROUTE_NAMES.PRODUCT_CREATE,
      component: () => import('@/views/product/ProductEdit.vue'),
    },
    {
      path: '/product-update',
      name: APP_ROUTE_NAMES.PRODUCT_UPDATE,
      component: () => import('@/views/product/ProductEdit.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: APP_ROUTE_NAMES.NOT_FOUND,
      component: () => import('@/views/auth/NotFound.vue'),
    },
  ],
})

export default router
