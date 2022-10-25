<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<image :src="item.image_src" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 按钮导航 -->
		<view class="bann">
			<div v-for="(item,index) in catitems" :key="index">
				<image :src="item.image_src" mode=""></image>
			</div>
		</view>
		<!-- 楼层 -->
		<nav v-for="(item,index) in floordata" :key="index">
			<!-- 顶部图片 -->
			<div class="top">
				<image :src="item.floor_title.image_src" mode=""></image>
			</div>
			<div class="fu">
				<!-- 左侧 -->
				<div class="lift">
					<image :src="item.product_list[0].image_src" mode=""></image>
				</div>
				<!-- 右侧 -->
				<div class="right">
					<image v-show="index!=0" v-for="(ite,index) in item.product_list" :src="ite.image_src" mode=""></image>
				</div>
		    </div>
		</nav>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner:[],
				catitems:[],
				floordata:[]
			};
		},
		// 方法
		methods:{
			
		},
		mounted() {
			uni.$http.get('/home/swiperdata').then(res=>{
				// console.log(res);
				this.banner=res.data.message
			})
			uni.$http.get('/home/catitems').then(res=>{
				// console.log(res);
				this.catitems=res.data.message
			})
			uni.$http.get('/home/floordata').then(res=>{
				console.log(res);
				this.floordata=res.data.message
			})
		}
	}
</script>

<style lang="scss">
nav{
	width: 100%;
	.top{
		width: 100%;
		image{
			width: 800rpx;
			height: 80rpx;
		}
	}
	.fu{
		width: 100%;
		display: flex;
		.lift{
			width: 240rpx;
			image{
				width: 100%;
				height: 500rpx;
			}
		}
		.right{
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			image{
				width: 45%;
				height: 45%;
				margin: 3px;
			}
		}
	}
}
.bann{
	margin-top: 10px;
	width: 100%;
	display: flex;
    justify-content: space-around;
	image{
		width:160rpx;
		height: 160rpx;
	}
}
</style>
