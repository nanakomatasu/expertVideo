<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"> <uv-icon name="arrow-left" color="#fff"
					@click="backPages"></uv-icon></view>
			退单列表
		</view>
	</view>
	<view class="tuidan-list">
		<view class="tuidan-item" v-for="item in list" :key="item.id">
			<view class="item-avatar">
				<image :src="item.headimg" mode=""></image>
			</view>
			<view class="item-info">
				<view class="user-info">
					<view class="user-nick">{{item.nickname}}</view>
					<view class="user-phone">{{item.phone}}</view>
				</view>
				<view class="create-time">{{item.create_at}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		tuidanList
	} from '../../request/api';
	import {
		useUserStore
	} from '../../store/user';
	import {
		SERVERTAPI
	} from '../../config';
	const inviteImage = ref("")
	const userStore = useUserStore()
	const list = ref([])
	onLoad(() => {
		getUserInfo()
	})
	const backPages = () => {
		uni.navigateBack()
	}
	const getUserInfo = () => {
		tuidanList({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			list.value = res.data
		})
	}
</script>

<style lang="scss">
	.navigation-bar {
		overflow: hidden;
		width: 100%;
		height: 196rpx;

		.navgation-bar-content {
			position: relative;
			margin-top: 88rpx;
			width: 100%;
			height: 108rpx;
			text-align: center;
		}

		.text-color {
			color: #fff;
		}
	}
	
	.tuidan-list {
		width: calc(100% - 64rpx);
		margin-left: 50%;
		transform: translateX(-50%);
		padding-top: 48rpx;
		
		.tuidan-item {
			width: 100%;
			padding-bottom: 32rpx;
			display: flex;
			border-bottom: 2rpx dashed #FAA82C;
			
			.item-avatar {
				width: 104rpx;
				height: 104rpx;
				border-radius: 50%;
			}
			
			.item-info {
				box-sizing: border-box;
				padding: 6rpx 0;
				width: calc(100% - 104rpx - 16rpx);
				margin-left: 16rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				.user-info {
					display: flex;
					
					.user-nick {
						font-size: 28rpx;
						color: #1A1A1A;
						font-weight: bold;
					}
					
					.user-phone {
						font-size: 24rpx;
						color: #3E3E3E;
						margin-left: 16rpx;
					}
				}
				
				.create-time {
					font-size: 24rpx;
					color: #787878;
				}
			}
		}
	}
</style>