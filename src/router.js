import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/HomePage.vue'

//TODO eslint kurulacak

const routes = [
    {
        name: 'homePage',
        path:'/',
        component: Home,

        children: [
            {
                name: 'todoDetail',
                path: 'detail/:id',
                component: () => import('./components/Detail.vue')
            }
        ]
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

router.beforeEach((to, from) =>{
    console.log(to)
    console.log(from)
    //return false
    // if(to.path === '/detail/1'){
    //     router.push('/you-are-here')
    // }
})

export default router