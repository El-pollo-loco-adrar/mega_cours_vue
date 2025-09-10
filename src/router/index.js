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
            path: '/indexExercice',
            name: 'indexExercice',
            component: () => import('../views/exercices/indexExercices.vue')
        },
        {
            path: '/dataBinding',
            name: 'data',
            component: () => import('../views/exercices/dataBinding.vue')
        },
        {
            path: '/von',
            name: 'vonExercice',
            component: () => import('../views/exercices/vOnExercice.vue')
        },
        {
            path: '/von2',
            name: 'vonExercice2',
            component: () => import('../views/exercices/vOnExercice2.vue')
        }
    ]
});

export default router;