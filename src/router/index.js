import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import SignupView from '@/views/SignupView.vue'
import LogInView from '@/views/LogInView.vue'
import ContactView from '@/views/ContactView.vue'
import AddPostView from '@/views/AddPostView.vue'
import EditPostView from '@/views/EditPostView.vue'
import auth from "../auth"

const routes = [{
        path: '/',
        name: 'MainView',
        component: MainView,
        alias:'/main',
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: '/signup',
        name: 'SignupView',
        component: SignupView
    },
    {
        path: "/login",
        name: "LogInView",
        component: LogInView,
    },
    {
        path: "/contact",
        name: "ContactView",
        component: ContactView,
    },
    {
        path: "/addPost",
        name: "AddPostView",
        component: AddPostView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/editPost",
        name: "EditPostView",
        component: EditPostView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router