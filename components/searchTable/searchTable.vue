<template>
	<view>
		<input type="text" value="搜索" @click='toSearch'>
	</view>
</template>

<script>
	export default {
		name:"searchTable",
		data() {
			return {
				
			};
		},
		methods:{
			toSearch(){
				uni.navigateTo({
					url:'/sebpkg/search/search'
				})
			}
		}
	}
</script>

<style lang="less">
input{
	width: 300px;
	height: 40px;
	border: 1px solid #ddd;
	border-radius: 10px;
	margin: 0px 10px;
	text-align: center;
}
</style>