<template>
	<view>
		<div class="list" v-for="(item,index) in list" :key="index" @click='togoodsdetail(item)'>
			<div class="lift">
				<image :src="item.goods_big_logo" mode=""></image>
			</div>
			<div class="right">
				<p>{{item.goods_name}}</p>
				<span>￥{{item.goods_price}}</span>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from:{
					query:'',
					cid:'',
					pagenum:'',
					pagesize:''
				},
				list:[]
			};
		},
		onLoad(obj) {
			console.log(obj);
			this.from.cid=obj.cid
		},
		methods:{
			togoodsdetail(item){
				uni.navigateTo({
					url:'/sebpkg/goods_detail/goods_detail?goods_id='+item.goods_id
				})
			}
		},
		mounted() {
			uni.$http.get('/goods/search',this.from).then(res=>{
				console.log(res);
				this.list=res.data.message.goods
			})
		}
	}
</script>

<style lang="scss">
.list{
	display: flex;
	.lift{
		image{
			width: 100px;
			height: 100px;
		}
	}
	.right{
		margin-bottom: 10px;
		span{
			color: #c00000;
		}
	}
}
</style>
