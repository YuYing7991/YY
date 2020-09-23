import Vue from 'vue'
import App from './layouts/App.vue'
// 下拉刷新
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
//网络错误
import { Empty } from 'vant';

Vue.use(Empty);



Vue.config.productionTip = false

//src
import './assets/css/base.css';
import './assets/js/font.js';//字体比值控制
// import home from './assets/img/home.png'
// import head from '../public/images/head.png';
// console.log(head)
//引入路由配置
import router from './plugins/router.js'
//引入拦截器
import  './plugins/axios.js'

//引入全局过滤器
import date from './filters/date.js'
Vue.filter('date',date);

import {fillzero} from './filters/fillzero.js'
Vue.filter('fillzero',fillzero)
var vm=new Vue({
  render: h => h(App),
  router,
  data:{
	  bNav:false,
	  bFoot:false,
	  bLoading:true
  }
}).$mount('#app')
export default vm;

 