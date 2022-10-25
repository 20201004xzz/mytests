<template>
	<view>
		<div class="shang">
			<searchTable></searchTable>
		</div>
		
		<!-- 父盒子 -->
		<view class="fu">
			<!-- 左 -->
			<scroll-view class="scroll" scroll-y="true">
				<view  v-for="(item,index) in list" :key="index" :class="{active:active==index}" @click="handler(index)">
				{{item.cat_name}}
			</view>
			</scroll-view>
			<!-- 右 -->
			<scroll-view scroll-y="true" class="right">
				<div class="top">
					{{list2[0].cat_name}}
				</div>
				<view class="rightList" >
					<div class="rList" v-for="(item,index) in list2[0].children" :key="index" @click='toGoodsList(item)'>
						<image :src="item.cat_icon" mode=""></image>
						<p>{{item.cat_name}}</p>
					</div>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import searchTable from '@/components/searchTable/searchTable'
	export default {
		data() {
			return {
				list:[],
				active:0,
				list2:[]
			};
		},
		methods:{
			handler(index){
				this.active=index
				this.list2=this.list[index].children
			},
			toGoodsList(item){
				uni.navigateTo({
					url:'/sebpkg/goods_list/goods_list?cid='+item.cat_id
				})
			}
		},
		mounted() {
			uni.$http.get('/categories').then(res=>{
				// console.log(res);
				this.list=res.data.message
				this.list2=res.data.message[0].children
			})
		}
	}
</script>

<style lang="scss">
.shang{
	width: 100%;
	height: 50px;
	background-color: #c00000;
	padding-top: 6px;
}
.fu{
	display: flex;
	justify-content: space-between;
	.scroll{
		width: 200px;
		view{
			width: 100%;
			height: 40px;
			line-height:40px;
			text-align: center;
			&.active{
				background-color: #fff;
				position: relative;
				&::before{
					position: absolute;
					top: 50%;
					left: 3px;
					transform: translateY(-50%);
					content: '';
					width: 5px;
					height: 20px;
					background-color: #c00000;
					display: block;
					
				}
			}
		}
		
	}
	.right{
		
		.top{
			// background-color: #345;
			height: 30px;
			line-height: 30px;
			text-align: center;
		}
		.rightList{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.rList{
				text-align: center;
				image{
					width: 60px;
					height: 60px;
				}
			}
			
		}
	}
}
</style>
