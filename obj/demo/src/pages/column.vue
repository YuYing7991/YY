<template>
	<!-- 这是跳转到栏目 -->
  <div class="column pd-top">
	  <!-- <img :src="head" alt="" > -->
	   <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <uc-cell
      v-for="(item,index) of list"
      :key="item._id"
     :data="item" 
     collectionName="column"
     />
	 	  </van-pull-refresh>
  </div>
</template>

<script>
   import UcCell from '../components/uc-cell/uc-cell.vue';
   // import head  from '../../public/images/head.png';
   // console.log(head)
    import { Toast } from 'vant';
  export default {

    name:'column',
    props:{},
    data(){
      return {
		  // head:head,
        list:[],
		
		      count: 0,
		      isLoading: false,
      }
    },
     components:{UcCell},
    mounted(){
		this.$axios({
			url:'/api/column',
			params:{_limit:10,_page:1}
		}).then(res=>{
			this.list = res.data.data
		})
	},
    updated(){},
    methods:{
		//下拉刷新的方法
		onRefresh() {
		      setTimeout(() => {
		        Toast('刷新成功');
		        this.isLoading = false;
		        this.count++;
		      }, 1000);
		    }
		  
	}
  }
</script>

<style>
 .column{padding-left: 0.34rem;padding-right: 0.34rem;
 margin-top: 1rem;
 }
 .pd-top{
	 margin-top: 0.9rem;
 }
 .pd-top{
	 padding-bottom: 0.7rem;
 }
</style>
