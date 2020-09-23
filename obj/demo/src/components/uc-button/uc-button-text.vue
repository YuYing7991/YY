<template>
  <div id="app">
	<h3>测试按钮</h3>
	<UcButton></UcButton>
	<uc-button></uc-button>
	<uc-button>注册</uc-button>
	<uc-button text="登录"></uc-button>
	<uc-button bg-color="#399"></uc-button>
	<uc-button @xx="show">点击</uc-button>
	
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UcButton from '../components/uc-button/uc-button.vue';
export default {
  name: 'App',
  components:{
	  UcButton
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
