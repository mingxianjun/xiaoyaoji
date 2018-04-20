//Created by mingxianjun on 2018/4/16.
import Vue from 'vue';
import App from './app.vue';
import router from './routers'
import './assets/styles/base.styl';
import 'iview/dist/styles/iview.css';//iview style
import iView from 'iview';

Vue.use(iView);

new Vue({
    el: '#app',
    router,
    render:(h)=>h(App)
});