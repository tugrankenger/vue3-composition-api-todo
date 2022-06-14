import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/HomePage.vue'

const routes = [
    {
        name: 'homePage',
        path:'/',
        component: Home
    },
    {
        name:'completedPage',
        path:'/completed',
        component: () => import('./views/CompletedPage.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router