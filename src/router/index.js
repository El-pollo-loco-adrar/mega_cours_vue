//Ici on va créer une instance de router et config des routes
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
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
        //Exercices
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
        },
        {
            path: '/vonBug',
            name: 'vonBug',
            component: () => import('../views/exercices/vonBug.vue')
        },
        {
            path: '/watcher',
            name: 'watcher',
            component: () => import('../views/exercices/watcher.vue')
        },
        {
            path: '/dynamicBinding',
            name: 'dynamicBinding',
            component: () => import('../views/exercices/dynamicBinding.vue')
        },
        {
            path: '/inputDynamic',
            name: 'inputDynamic',
            component: () => import('../views/exercices/inputDynamic.vue')
        },
        {
            path: '/conditionnal',
            name: 'conditionnal',
            component: () => import('../views/exercices/conditionnal.vue')
        },
        //Leçons
        {
            path: '/indexLesson',
            name: 'indexLesson',
            component: () => import('../views/lecon/indexLesson.vue')
        },
        {
            path: '/watcherLesson',
            name: 'watcherLesson',
            component: () => import('../views/lecon/watcherLesson.vue')
        },
        {
            path: '/two-way-binding',
            name: 'two-way-binding',
            component: () => import('../views/lecon/two-way-binding.vue')
        },
        {
            path: '/event-binding',
            name: 'event-binding',
            component: () => import('../views/lecon/event-binding.vue')
        },
        {
            path: '/text-interpolation',
            name: 'text-interpolation',
            component: () => import('../views/lecon/text-interpolation.vue')
        },
        {
            path: '/attribute-binding',
            name: 'attribute-binding',
            component: () => import('../views/lecon/attribute-binding.vue')
        },
        {
            path: '/inline-templating',
            name: 'inline-templating',
            component: () => import('../views/lecon/inline-templating.vue')
        },
        {
            path: '/dynamic-styling',
            name: 'dynamic-styling',
            component: () => import('../views/lecon/dynamic-styling.vue')
        },
        {
            path: '/conditional-rendering',
            name: 'conditional-rendering',
            component: () => import('../views/lecon/conditional-rendering.vue')
        },
        //TP
        {
            path: '/indexTp',
            name: 'indexTp',
            component: () => import('../views/tp/indexTp.vue')
        }
        ]
});

export default router;