import { createRouter, createWebHistory } from "vue-router"

let router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')

        },
        {
            path: '/tab',
            name: 'tab',
            component: () => import('../views/TabDemo.vue')

        },
        {
            path: '/404',
            name: 'notfound',
            component: () => import('../views/NotFound.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
            name: '404'
        }
    ]
})

export default router