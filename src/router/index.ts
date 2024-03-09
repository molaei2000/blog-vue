import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/views/BlogList.vue')
    },
    {
      path: '/post/:id',
      name: 'post.single',
      component: () => import('@/views/BlogItem.vue')
    }
  ]
})

export default router
