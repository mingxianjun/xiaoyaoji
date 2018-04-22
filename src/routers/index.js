import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/home';
import notFound from '@/views/common/notFound';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '*',
            name: 'notFound',
            component: notFound
        }
    ]
})