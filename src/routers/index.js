import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/home';
import login from '@/views/login';
import register from '@/views/register';
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
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
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