import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import SignupView from '@/views/SignupView.vue'

const routes = [{
        path: '/',
        name: 'MainView',
        component: MainView,
        alias:'/main'
    },
    {
        path: '/signup',
        name: 'SignupView',
        component: SignupView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router