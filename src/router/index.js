//Ici on va créer une instance de router et config des routes
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/exercice',
            name: 'exercice',
            component: () => import('../views/exercices/index.vue')
        },
        {
            path: '/dataBinding',
            name: 'data',
            component: () => import('../views/exercices/dataBinding.vue')
        }
    ]
});

export default router;