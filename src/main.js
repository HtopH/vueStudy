import { createApp } from 'vue'
import App from './App.vue'
//全局引入
import axios from "axios"
const app=createApp(App).mount('#app')
app.config.globalProperties.$axios=axios
app.mount('#app')

