//Created by mingxianjun on 2018/4/16.
import Vue from 'vue';
import App from './app.vue';
import router from './routers';
import vueResource from 'vue-resource';

import './assets/styles/base.styl';
import 'iview/dist/styles/iview.css';//iview style
import iView from 'iview';
import "../mock";

Vue.use(vueResource);
Vue.use(iView);

new Vue({
    el: '#app',
    router,
    render:(h)=>h(App)
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});