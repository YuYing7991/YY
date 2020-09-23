<template>
  <div id="app">
	
	  <UcNav></UcNav>
	  <uc-nav></uc-nav>
	  <uc-nav bgColor="green" :border-width="0" arrow="gray"></uc-nav>
		<h3>测试导航</h3>
  </div>
</template>

<script>
import UcNav from '../components/uc-nav/uc-nav.vue'
export default {
	name:'App',
	data(){
		return{
			ipt:'bwwwww',
			ipt2:'kkkkkkk'
		}
	},
	components:{
	UcNav
	},
  
  methods:{
	show(ev){
		console.log(ev)
	}
  }
}
</script>

<style>

</style>
