import Page from '../component/index.vue';
import Home from '../component/home.vue';
import Detaile from '../component/detaile.vue'
import Car from '../component/car.vue'
import Login from '../component/login.vue'
// 引用模板
export default [
	{
		path:"/",
		redirect: "/Page/Home"
	},
	{
		path:"/Page",component:Page,
		children:[
			{path:"/Page",redirect:"/Page/Home"},
			{path:"/Page/Home",component:Home},
			{path:"/Page/Login",component:Login}
		]
	}
	

	

]