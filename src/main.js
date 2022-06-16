import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app= createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

router.beforeEach((to, from) =>{
    console.log(to)
    console.log(from)
    //return false
    if(to.path === '/detail/1'){
        router.push('/you-are-here')
    }
})