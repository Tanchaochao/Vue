import './src/css/style.css';
import './src/css/index.css';
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
//引入入口文件
import App from './App.vue';

// 引用路由配置文件
import routes from './src/router/router.js';
//使用路由
Vue.use(VueRouter);
// Vue.use(VueResource);

// 使用配置文件规则
const router = new VueRouter({
	routes
});

// 跑起来吧
new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
})
