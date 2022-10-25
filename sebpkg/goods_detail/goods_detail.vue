<template>
	<view>
		<swiper class="sw" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in list.pics" :key="index">
				<image :src="item.pics_big_url" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 详情 -->
		<div class="xiang">
			{{list.goods_name}}
		</div>
		<rich-text :nodes="list.goods_introduce"></rich-text>
		
		<!-- 商品导航 -->
		<view class="gouwuhce">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  
			@click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				goods_id:'',
				list:[],
				options: [{
							icon: 'shop',
							text: '店铺',
							info: 2,
							infoBackgroundColor:'#007aff',
							infoColor:"red"
						}, {
							icon: 'cart',
							text: '购物车',
							info: 2
						}],
					    buttonGroup: [{
					      text: '加入购物车',
					      backgroundColor: '#ff0000',
					      color: '#fff'
					    },
					    {
					      text: '立即购买',
					      backgroundColor: '#ffa200',
					      color: '#fff'
					    }
					    ]
			};
		},
		onLoad(obj) {
			console.log(obj);
			this.goods_id=obj.goods_id
		},
		methods:{
			...mapMutations(['add']),
			 onClick (e) {
				    // console.log(e);
					if(e.content.text=="购物车"){
						uni.switchTab({
							url:"/pages/cart/cart"
						})
					}
				  },
			buttonClick (e) {
				    console.log(e)
				   this.add({...this.list,flag:false,number:1})
				  }
		},
		mounted() {
			uni.$http.get('/goods/detail',{goods_id:this.goods_id}).then(res=>{
				console.log(res);
				this.list=res.data.message
			})
		}
	}
</script>

<style lang="scss">
.gouwuhce{
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
}
.sw{
	height: 500rpx;
	iamge{
		width: 100%;
		height: 100%;
	}
}
</style>
