import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/base.css'
import 'amfe-flexible';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import './api/mock'
createApp(App).use(store).use(router).mount('#app')
