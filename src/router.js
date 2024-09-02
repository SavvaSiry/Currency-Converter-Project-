import { createRouter, createWebHistory } from 'vue-router';

import ConvertPage from './pages/ConvertPage.vue';
import HomePage from './pages/HomePage.vue';
import LayoutDefault from './layouts/LayoutDefault.vue';

const routes = [
    {
        path: '/',
        component: LayoutDefault,
        children: [
            {
                path: '', // это будет страница по умолчанию (Home)
                component: HomePage,
            },
            {
                path: 'convert',
                component: ConvertPage,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
