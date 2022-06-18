import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { DatePicker } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app= createApp(App)
app.use(router)
app.use(createPinia())
app.use(DatePicker)
app.mount('#app')

