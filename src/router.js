import Vue from 'vue'
import Router from 'vue-router'
import App from "@/App";

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: App
        },
        {
            path: '/title',
            name: 'title',
            component: () => import('./components/Title')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./components/Register')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('./components/Main')
        }
    ]
})
