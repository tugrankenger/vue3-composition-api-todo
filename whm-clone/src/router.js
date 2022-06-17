import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home/Index.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
