import { createApp } from 'vue'
import App from './App.vue'
import router from './docs/router'
import './lib/styles/tokens.css'

createApp(App).use(router).mount('#app')
