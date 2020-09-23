<template>
	<div class="uc-input">
		<!-- <h3>uc-input</h3> -->
		<input :type="type" :value="value" @input="$emit('input',$event.target.value)">
		<span v-if="label">{{label}}</span>
	</div>
</template>

<script>
	export default{
		name:'uc-input',
		props:{
			label:{
				type:String,
				default:''
			},
			value:{
				type:String,
				default:''
			},
			type:{
				type:String,
				default:'text'
			}
		},
		
		components:{},
		mounted() {	},
		updated(){},
		methods:{}
	}
</script>

<style>
	.uc-input{}
</style>
