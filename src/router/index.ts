import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    redirect: '/home/content1',
    children: [
      {
        path: 'content1',
        name: 'Content',
        component: () => import('@/views/Content1.vue')
      },
      {
        path: 'content2',
        name: 'Content2',
        component: () => import('@/views/Content2.vue')
      },
      {
        path: 'content3',
        name: 'Content3',
        component: () => import('@/views/Content3.vue')
      },
      {
        path: 'content4',
        name: 'Content4',
        component: () => import('@/views/Content4.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
