/*Created by mingxianjun on 2018/4/16.
 * 项目入口文件
 * */
import Vue from 'vue';
import App from './app.vue';

// 引入全局CSS样式
import './assets/styles/base.styl';

// 在body下创建一个根节点
const root = document.createElement('div');
document.body.appendChild(root);
document.getElementsByTagName("title")[0].innerText = '小幺鸡-最好用的文档管理工具';

// 将根节点root注入到app.vue组件中
new Vue({
    render: (h) => h(App)
}).$mount(root);