<template>
  <div class="follow pd-top">
	   <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <uc-cell
      v-for="(item,index) of list"
      :key="item._id"
     :data="item" 
     :index="index" 
     collectionName="follow"
     />
	  </van-pull-refresh>
  </div>
</template>

<script>
	// 这是关注页
  import UcCell from '../components/uc-cell/uc-cell.vue'
   import { Toast } from 'vant';
  export default {
    name:'follow',
    props:{},
    data(){
      return {
        list:[ ],
		list:[],
		      count: 0,
		      isLoading: false,
      }
    },
    components:{UcCell},
    mounted(){
		// this.$root.bLoading = true
		this.$axios({
			url:'/api/follow',
			params:{_limit:15,_page:1}
		}).then(res=>{
			this.list = res.data.data
		})
		
	},
    updated(){
		
	},
    methods:{
		onRefresh() {
		      setTimeout(() => {
		        Toast('刷新成功');
		        this.isLoading = false;
		        this.count++;
		      }, 1000);
		    }
		  
	},
	
  }
</script>

<style>
  .follow{padding: 0 0.34rem;}
</style>
