<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"> <uv-icon name="arrow-left" color="#fff"
					@click="backPages"></uv-icon></view>达人计划
		</view>
	</view>
	<view class="user-card center-box">
		<view class="user-avatar">
			<image src="https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg" mode="aspectFill"></image>
		</view>
		<view class="user-info">
			<view class="user-nick">黑大帅</view>
			<view class="user-identity">身份:达人</view>
		</view>
	</view>
	<view class="tips-content center-box">
		<view class="tips-lable">
			Tips
		</view>
		<view class="tips-content-text">第4个购买任务完成(财富外交官)</view>
	</view>
	<view class="task-content center-box">
		<tn-title title="当前步骤" mode="vLine" assist-color="#FAA82C" color="#FAA82C" size="lg" />
		<view class="create-order">
			橱窗下单
			<view class="nav-store" @click="openVideo">
				<uv-icon name="shopping-cart" color="#fff" size="40rpx"></uv-icon> 进店下单
			</view>
		</view>
		<view class="task-flow">
			<view class="task-flow-tips">
				<view class="tips-icon">
					<image src="/static/task/taskFlowTips.png" mode="aspectFill"></image>
				</view>
				<view class="tips-text">注意</view>
			</view>
			<view class="task-flow-list">
				<view class="task-flow-item" v-for="(item, index) in taskFlowSteps">
					<view class="serial-number">{{index + 1}}</view>{{item.title}}
				</view>
			</view>
			<uv-input style="background-color: #F6F6F6; border-radius: 8rpx 8rpx 8rpx 8rpx;" placeholder="请输入订单号"
				v-model="orderSn"></uv-input>
			<view class="next-task">已完成，下个任务</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const orderSn = ref("")

	const taskFlowSteps = ref([{
			id: 1,
			title: "进入橱窗仅需要购买一个商品"
		},
		{
			id: 2,
			title: "收货人姓名和电话必须与达人系统一致"
		}
	])
	const backPages = () => {
		uni.navigateBack()
	}
	const openVideo = () => {
		wx.openChannelsUserProfile({
			finderUserName: 'sph7qekAjBcxbjN',
			success(res) {
				console.log(res);
			},
			fail(res) {
				console.log(res);
			}
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

	.user-card {
		padding: 32rpx 24rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		margin-top: 24rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;

		.user-avatar {
			width: 136rpx;
			height: 136rpx;
			border-radius: 50%;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.user-info {
			margin-left: 16rpx;

			.user-nick {
				font-size: 32rpx;
				color: #1A1A1A;
				font-weight: bold;
			}

			.user-identity {
				margin-top: 24rpx;
				padding: 4rpx 16rpx;
				background-color: #FAA82C;
				font-size: 24rpx;
				color: #fff;
				border-radius: 26rpx 26rpx 26rpx 26rpx;
			}
		}

	}

	.tips-content {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: #1A1A1A;
		margin-top: 32rpx;

		.tips-lable {
			padding: 4rpx 32rpx;
			font-size: 28rpx;
			color: #fff;
			background-color: #FAA82C;
			border-radius: 6rpx 6rpx 6rpx 6rpx;
			margin-right: 24rpx;
		}
	}

	.task-content {
		margin-top: 24rpx;
		background-color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		box-sizing: border-box;
		padding: 32rpx;

		.create-order {
			font-size: 32rpx;
			color: #1A1A1A;
			display: flex;
			flex-direction: column;
			margin-top: 48rpx;

			.nav-store {
				margin-top: 24rpx;
				width: 208rpx;
				height: 64rpx;
				background-color: #FAA82C;
				color: #FFFFFF;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.task-flow {
			width: 100%;

			.task-flow-tips {
				width: 100%;
				height: 40rpx;
				display: flex;
				align-items: center;
				margin-top: 48rpx;

				.tips-icon {
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.tips-text {
					font-size: 32rpx;
					color: #1A1A1A;
					margin-left: 16rpx;
					font-weight: bold;
				}
			}

			.task-flow-list {
				margin-top: 32rpx;

				.task-flow-item {
					display: flex;
					align-items: center;
					margin-bottom: 28rpx;

					.serial-number {
						width: 40rpx;
						height: 40rpx;
						line-height: 40rpx;
						border-radius: 50%;
						text-align: center;
						color: #fff;
						font-size: 28rpx;
						font-weight: bold;
						background-color: #FAA82C;
						margin-right: 16rpx;
					}
				}
			}

			.next-task {
				width: 524rpx;
				height: 84rpx;
				line-height: 84rpx;
				background: linear-gradient(90deg, #FFA143 0%, #FAA82C 100%);
				margin: 48rpx 0 0 50%;
				transform: translateX(-50%);
				border-radius: 88rpx 88rpx 88rpx 88rpx;
				font-size: 32rpx;
				color: #fff;
				text-align: center;
			}
		}

	}
</style>