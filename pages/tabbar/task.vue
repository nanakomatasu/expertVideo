<template>
	<view class="content-box">
		<image src="/static/task/taskBackground.png" mode="aspectFit" class="task-background"></image>
		<view class="navigation-bar">
			<view class="navgation-bar-content text-color">
				任务
			</view>
			<view class="level-title">
				<p style="font-size: 48rpx;">当前等级V2</p>
				<p style="font-size: 36rpx; margin-top: 16rpx;">还差3个任务晋升为"达人"</p>
			</view>
			<view class="expert-progress">
				<view class="show-progress"> <uv-line-progress :percentage="30" activeColor="#FAA82C"
						inactiveColor="#F2F3F8"></uv-line-progress>
				</view>
				<view class="show-level">V2</view>
			</view>
		</view>
		<view class="user-expert-card center-box">
			<view class="user-avatar">
				<image src="https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg" mode="aspectFill">
				</image>
			</view>
			<view class="user-info">
				<view class="user-name-gender">
					最佳达人
				</view>
				<view class="user-lable">
					<view class="user-identity user-lable-item">身份：达人</view>
					<!-- 				<view class="user-level user-lable-item">等级：蚂团工兵</view> -->
				</view>
			</view>
			<view class="service-customer">
				<image src="/static/task/customerServiceIcon.png" mode=""></image>
				客服
			</view>
		</view>
		<view class="task-content center-box">
			<view class="task-content-title">
				<view class="title-text">
					最佳达人
				</view>
				<view class="teach-button">
					<image src="/static/task/teachIcon.png" mode="" class="teach-icon"></image>
					视频教学
				</view>
			</view>
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="task-item" v-for="item in courseList">
					<view class="serial-number">{{ item.id < 10 ? "0" + item.id : item.id}}.</view>
					<view class="course-title">商品橱窗名称1</view>
					<view class="course-status completion-status"
						:class="[item.status == '已完成' ? 'completion-status' : 'unfinished-status']" @click="openPopup">
						{{ item.status}}
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 		<tn-popup v-model="showPopup" open-direction="top" top="54px">
			<view class="tn-p-lg"> 弹框内容 </view>
		</tn-popup> -->
		<tn-popup v-model="showPopup" open-direction="center" top="54px" width="80%" height="538" bg-color="transparent">
			<view class="tn-p-lg" style="background-color: transparent; width: 100%; height: 538rpx;">
			    <image src="/static/task/taskTips.png" mode="aspectFit"></image>
			 </view>
		</tn-popup>
		<view class="safe-box"></view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const showPopup = ref(false)
	const courseList = ref([{
			id: 1,
			title: "商品橱窗名称1",
			status: "已完成"
		},
		{
			id: 2,
			title: "商品橱窗名称2",
			status: "未完成"
		},
		{
			id: 3,
			title: "商品橱窗名称3",
			status: "未完成"
		},
		{
			id: 4,
			title: "商品橱窗名称4",
			status: "未完成"
		},
		{
			id: 5,
			title: "商品橱窗名称5",
			status: "未完成"
		},
		{
			id: 6,
			title: "商品橱窗名称6",
			status: "未完成"
		},
		{
			id: 7,
			title: "商品橱窗名称7",
			status: "未完成"
		},
		{
			id: 8,
			title: "商品橱窗名称8",
			status: "未完成"
		},
		{
			id: 9,
			title: "商品橱窗名称9",
			status: "未完成"
		},
		{
			id: 10,
			title: "商品橱窗名称10",
			status: "未完成"
		},
		{
			id: 11,
			title: "商品橱窗名称11",
			status: "未完成"
		}
	])
	const openPopup = () => {
		showPopup.value = true
	}
</script>

<style lang="scss" scoped>
	.task-background {
		top: -20rpx;
		position: absolute;
		width: 100%;
		height: 696rpx;
	}

	.navigation-bar {
		position: relative;
		z-index: 1;
		overflow: hidden;
		width: 100%;
		height: 440rpx;

		.navgation-bar-content {
			margin-top: 88rpx;
			width: 100%;
			height: 108rpx;
			text-align: center;
		}

		.text-color {
			color: #FFFFFF;
		}

		.level-title {
			width: 100%;
			text-align: center;
			color: #FFFFFF;
		}

		.expert-progress {
			box-sizing: border-box;
			padding: 0 56rpx;
			position: relative;
			z-index: 1;
			width: 100%;
			display: flex;
			align-items: center;
			margin-top: 30rpx;

			.show-progress {
				width: calc(100% - 84rpx);
			}

			.show-level {
				margin-left: -10rpx;
				width: 84rpx;
				height: 48rpx;
				border-radius: 54rpx 54rpx 54rpx 54rpx;
				background-color: #F2F3F8;
				text-align: center;
				line-height: 48rpx;
			}
		}
	}

	.user-expert-card {
		margin-top: 20rpx;
		padding: 48rpx 24rpx;
		background-color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

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
			width: calc(100% - 240rpx);
			height: 100%;

			.user-name-gender {
				width: 100%;
				display: flex;
				align-items: center;
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
		}

		.service-customer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 20rpx;
			color: #4C4C4C;

			image {
				width: 52rpx;
				height: 52rpx;
			}
		}
	}

	.task-content {
		box-sizing: border-box;
		padding: 32rpx;
		margin-top: 32rpx;
		height: 64vh;
		background-color: #fff;

		.task-content-title {
			width: 100%;
			height: 48rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title-text {
				height: 48rpx;
				font-size: 32rpx;
				font-size: bold;
				color: #1A1A1A;
			}

			.teach-button {
				width: 180rpx;
				height: 48rpx;
				border-radius: 8rpx 8rpx 8rpx 8rpx;
				background-color: #617BFF;
				font-size: 24rpx;
				color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;

				.teach-icon {
					width: 28rpx;
					height: 22rpx;
					margin-right: 5rpx;
				}
			}
		}

		.scroll-view {
			margin-top: 42rpx;
			width: 100%;
			height: calc(100% - 48rpx - 42rpx);

			.task-item {
				position: relative;
				padding-bottom: 20rpx;
				margin-bottom: 32rpx;
				border-bottom: 2rpx solid #F2F2F2;
				display: flex;
				align-items: center;
				font-size: 24rpx;

				.serial-number {
					font-size: 32rpx;
					color: #1A1A1A;
				}

				.course-title {
					margin-left: 32rpx;
					max-width: 250rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					padding: 14rpx 24rpx;
					border: 2rpx solid;
					color: #FAA82C;
					border-image: linear-gradient(94deg, rgba(108, 65, 44, 1), rgba(255, 178, 89, 1)) 1 1;
				}

				.course-status {
					position: absolute;
					right: 0;
					max-width: 200rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					padding: 14rpx 40rpx;

				}

				.completion-status {
					border: 2rpx solid;
					border-image: linear-gradient(94deg, rgba(108, 65, 44, 1), rgba(255, 178, 89, 1)) 1 1;
					color: #FAA82C;
				}

				.unfinished-status {
					border: 2rpx solid #A9A9A9;
					color: #929292;
				}
			}
		}
	}

	.popup-content {
		width: 100%;
		height: 300rpx;
		background-color: red;
	}

	.safe-box {
		width: 100%;
		height: 50rpx;
	}
</style>