<template>
	<!-- 这是首页 -->
  <div class="home pd-top">
	  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
	    <!-- <p>刷新次数: {{ count }}</p> -->

	  <!-- :data="banner" 里面的数据被组件banner拿去调用 -->
    <banner
      :data="banner"
      collectionName="banner"
    />
    <div class="list">
      <uc-cell
        v-for="(item,index) of list"
        :key="item._id"
       :data="item" 
       :index="index" 
       collectionName="home"
       />	 
    </div>
     </van-pull-refresh>
  </div>
</template>

<script>
	// 这是轮播图组件
  import banner from '../components/banner/banner.vue'
  // 这是内容组件
  import UcCell from '../components/uc-cell/uc-cell.vue'
  import $ from 'jquery/dist/jquery.js'
  import Swipe from './js/swipe.js'
  // import axios from '../plugins/axios.js'
  //下拉刷新
  import { Toast } from 'vant';
  export default {
    name:'home',
    props:{},
    data(){
      return {
        banner:[
          // {_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
          // {_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
          // {_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
          // {_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
        ],
        list:[],
		//下拉需要
		      count: 0,
		      isLoading: false,
      }
    },
    components:{
		banner,
		UcCell
		},
    mounted(){
		
		this.$axios({
			url:`/api/home`,
			//只获取30条数据
			params:{_limit:30,_page:1}
		}).then(res=>{
			// console.log(res)
			//把数据放进list ，list放进组件里面
			this.list = res.data.data;
			// console.log(res.data.data)
		
			
		})
		this.$axios({
			url:'/api/banner',
			parmas:{_limit:4,_page:1}
		}).then(res=>{
			//给轮播图设置字和图片
			this.banner = res.data.data
			// console.log(res.data)
		})
		
		new Swipe($('.banner')[0], {
		  auto: 2000,
		  continuous: true,
		  stopPropation: true,
		  callback: function(index, element) {
		    $('.banner ol li').removeClass('active');
		    $('.banner ol li')
		      .eq(index)
		      .addClass('active');
		  }
		});
	},
    updated(){
	
		
	},
    methods:{
		//下拉需要
		onRefresh() {
		      setTimeout(() => {
		        Toast('刷新成功');
		        this.isLoading = false;
		        this.count++;
		      }, 1000);
		    },
			
		  
	}
  }
</script>

<style>
  .home{}
  .list{
    padding: 0 0.34rem;
  }
</style>
