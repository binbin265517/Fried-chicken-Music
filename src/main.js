import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局央视文件
import '@/assets/scss/index.scss'
createApp(App).use(store).use(router).mount('#app')
