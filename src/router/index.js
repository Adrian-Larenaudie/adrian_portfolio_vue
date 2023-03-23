import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',

            name: 'layout',
            component: () => import('../views/LayoutView.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../views/HomeView.vue'),
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('../views/AboutView.vue'),
                },
                {
                    path: '/works',
                    name: 'works',
                    component: () => import('../views/WorksView.vue'),
                }
            ],
        },
        
    ]
})

export default router
