<template>
	<div>Home</div>
</template>
<script type="text/javascript">
		import Vue from 'vue'
import VueRouter from 'vue-router'
// 引用路由配置文件
import routes from '../router/router.js'
//使用路由
Vue.use(VueRouter);
// Vue.use(VueResource);
// 使用配置文件规则
const router = new VueRouter({
  routes
})
    export default {
        components:{},
         created:function(){
        },
        methods:{
        }
    }
</script>