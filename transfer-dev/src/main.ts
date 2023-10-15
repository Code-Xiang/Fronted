import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Transfer from '../modules/xuewei-ui/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Transfer)

app.mount('#app')
