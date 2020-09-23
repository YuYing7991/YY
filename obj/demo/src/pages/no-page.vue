<template>
  <div class="no-page">
    <h3>no-page</h3>
	<!-- 网络错误 -->
	<van-empty image="network" description="网络错误" />
  </div>
</template>

<script>
	import { Empty } from 'vant';
  export default {
    name:'no-page',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
  .no-page{}
</style>
