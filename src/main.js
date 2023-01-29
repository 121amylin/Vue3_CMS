import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import svgIcon from './components/svgIcon.vue'
import 'element-plus/theme-chalk/src/message.scss'
import '@/styles/index.scss'

const app = createApp(App)

app.component('svg-icon', svgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
