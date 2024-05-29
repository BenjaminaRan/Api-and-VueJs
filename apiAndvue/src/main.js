import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import App from './App.vue'

import {createWebHistory, createRouter} from 'vue-router'

import home from './page/home.vue'
import Ajouter from './page/Add.vue'
import Modifier from './page/Modifier.vue'
import Supprimer from './page/supprimer.vue'

const routes = [
    {path: '/', component: home},
    {path: '/ajouter', component: Ajouter},
    { path: '/modifier/:id', component: Modifier },
    { path: '/supprimer/:id', component: Supprimer }
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
.use (router)
.mount('#app')