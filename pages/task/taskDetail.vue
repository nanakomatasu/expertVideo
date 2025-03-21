<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"> <uv-icon name="arrow-left" color="#fff"
					@click="backPages"></uv-icon></view>创客计划
		</view>
	</view>
	<view class="user-card center-box">
		<view class="user-avatar">
			<image :src="userInfo.headimg" mode="aspectFill"></image>
		</view>
		<view class="user-info">
			<view class="user-nick">{{userInfo.nickname}}</view>
			<view class="user-lable">
				<view class="user-identity user-lable-item" v-if="userInfo.ievel == 0">身份：普通用户
				</view>
				<view class="user-level user-lable-item" v-if="userInfo.ievel == 1">等级：创客</view>
				<view class="user-level user-lable-item" v-if="userInfo.ievel == 2">身份：推客</view>
				<view class="user-level user-lable-item" v-if="userInfo.ievel == 3">身份：团长</view>
				<view class="user-level user-lable-item" v-if="userInfo.ievel == 4">身份：服务商</view>
			</view>
		</view>
	</view>
	<view class="tips-content center-box">
		<view class="tips-lable">
			Tips
		</view>
		<!-- 		<view class="tips-content-text">第4个购买任务完成(财富外交官)</view> -->
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
			<view class="next-task" @click="completeTask">已完成，下个任务</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	import {
		useUserStore
	} from '../../store/user';

	import {
		userInfoApi,
		taskListApi,
		completeTaskApi
	} from '../../request/api';

	import {
		onLoad
	} from '@dcloudio/uni-app'

	onLoad(() => {
		getUserInfo()
	})

	const userStore = useUserStore()

	const orderSn = ref("")

	const userInfo = ref({})

	const successTaskCount = ref(0)

	const taskFlowSteps = ref([{
			id: 1,
			title: "进入橱窗仅需要购买一个商品"
		},
		{
			id: 2,
			title: "收货人姓名和电话必须与创客系统一致"
		}
	])
	const backPages = () => {
		uni.navigateBack()
	}
	const openVideo = () => {
		wx.openChannelsUserProfile({
			// finderUserName: 'sph7qekAjBcxbjN',
			finderUserName: userStore.taskVideoCode,
			success(res) {
				console.log(res);
			},
			fail(res) {
				console.log(res);
			}
		})
	}

	const getUserInfo = () => {
		userInfoApi({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			userInfo.value = res.data
		})
	}

	const getTaskList = () => {
		taskListApi({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			calcTask(res.data)
		})
	}

	const calcTask = (array) => {
		if (array.length == 0) {
			successTaskCount.value = 0
		} else {
			const filteredArray = array.filter(item => item.order_status && item.order_status === 2);
			successTaskCount.value = filteredArray.length;
		}
	}

	const completeTask = () => {
		completeTaskApi({
			uid: userStore.uid,
			token: userStore.token,
			window_person_id: userStore.orderNumber,
			wechat_order_number: orderSn.value
		}).then(res => {
			if (res.code == 0) {
				uni.showToast({
					icon: 'none',
					title: res.info
				})
				return
			}
			uni.showToast({
				icon: 'success',
				title: '提交成功'
			})
			setTimeout(() => {
				uni.navigateBack()
			}, 500)
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
			display: flex;
			flex-direction: column;
			margin-left: 16rpx;

			.user-nick {
				font-size: 32rpx;
				color: #1A1A1A;
				font-weight: bold;
			}


			.user-lable {
				width: 100%;
				display: flex;
				margin-top: 44rpx;

				.user-lable-item {
					padding: 4rpx 16rpx;
					font-size: 24rpx;
					color: #fff;
					background-color: #FAA82C;
					border-radius: 26rpx 26rpx 26rpx 26rpx;
					white-space: nowrap;
				}

				.user-level {
					margin-left: 22rpx;
				}
			}

			.user-identity {
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