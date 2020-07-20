import Vue from 'vue'
import Router from 'vue-router'
import App from "@/App";

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
            name: 'home',
            component: App
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./components/Title')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./components/Register')
        },
        {
            path: '/game/:userId',
            name: 'game',
            component: () => import('./components/Main')
        }
    ]
})
