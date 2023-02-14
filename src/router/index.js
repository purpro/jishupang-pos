import Vue from 'vue'
import Router from 'vue-router'
import Pos from '../components/page/PosA'

Vue.use(Router)
//创建并暴露一个路由器
export default new Router({
	routes:[
		{
			path:'/',
            name:'Pos',
			component:Pos
		}
	]
})
