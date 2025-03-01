<template>
	<view class="content-box">
		<view class="navigation-bar navigation-bar-background">
			<view class="navgation-bar-content text-color">
				我的
			</view>
			<view class="user-card center-box">
				<view class="user-avatar">
					<image src="https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg" mode="aspectFill">
					</image>
				</view>
				<view class="user-info">
					<view class="user-name-gender">
						最佳达人<uv-icon name="man" color="#3E7BFF" size="35rpx"></uv-icon>
					</view>
					<view class="user-lable">
						<view class="user-identity user-lable-item">身份：达人</view>
						<!-- <view class="user-level user-lable-item">等级：蚂团工兵</view> -->
					</view>
				</view>
				<view class="edit-user-info" @click="navEdit">
					<uv-icon name="edit-pen-fill"></uv-icon>
					编辑资料
				</view>
			</view>
		</view>
		<view class="expert-content center-box">
			<image src="/static/mine/Slice.png" mode="" class="expert-content-back"></image>
			<view class="expert-title">
				<view class="switch-title-item" v-for="item in expertTitle" :key="item.id"
					:class="[item.id == 2 ? 'right-title' : '']">{{item.title}}</view>
			</view>
			<view class="expert-tips">
				差460成长值升级
			</view>
			<view class="expert-progress">
				<view class="show-progress"> <uv-line-progress :percentage="30" activeColor="#BD954F"
						inactiveColor="#F2F3F8"></uv-line-progress>
				</view>
				<view class="show-level">V2</view>
			</view>
		</view>
		<view class="mine-funcs center-box">
			<view class="mine-func-item" v-for="item in funcList" :key="item.id" @click="navMineFunc(item)">
				<view class="mine-func-item-icon">
					<image :src="item.icon" mode=""></image>
				</view>
				<view class="mine-func-item-title">
					{{item.title}}
				</view>
			</view>
		</view>
		<view class="utilities-content center-box">
			<view>
				<uv-grid :col="4" :border="false">
					<uv-grid-item v-for="(item, index) in baseList" :key="index" style="margin-bottom: 32rpx;"
						@click="navFunc(item.url)">
						<image :src="item.icon" lazy-load="false" style="width: 74rpx; height: 74rpx;">
						</image>
						<text class="grid-text mt-10rpx line-clamp-1"
							style="font-size: 24rpx; color: #000000; margin-top: 18rpx;">{{ item.title }}</text>
					</uv-grid-item>
				</uv-grid>
			</view>
		</view>
		<view class="safe-box"></view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	uni.navigateTo({
		url: ""
	})
	const funcList = ref([{
			id: 1,
			icon: "/static/mine/renwu.png",
			title: "达人任务",
			url: "/pages/task/taskDetail"
		},
		{
			id: 2,
			icon: "/static/mine/tuijian.png",
			title: "我的推荐",
			url: ""
		},
		{
			id: 3,
			icon: "/static/mine/shipinhao.png",
			title: "视频号",
			url: ""
		}
	])

	const baseList = ref([{
			id: 1,
			title: "公告",
			icon: "/static/mine/gonggao.png",
			url: "/pages/mineFunc/announcement"
		},
		{
			id: 2,
			title: "邀请好友",
			icon: "/static/mine/yaoqinghaoyou.png",
			url: "/pages/mineFunc/inviteFriends"
		},
		{
			id: 3,
			title: "我的团队",
			icon: "/static/mine/wodetuandui.png",
			url: "/pages/mineFunc/myTeam"
		},
		{
			id: 4,
			icon: "/static/mine/chuchuangdizhi.png",
			title: "橱窗地址",
			url: "/pages/mineFunc/windowAddress"
		},
		{
			id: 5,
			icon: "/static/mine/shipinhaoID.png",
			title: "视频号ID",
			url: "/pages/mineFunc/videoId"
		},
		{
			id: 6,
			icon: "/static/mine/jianyi.png",
			title: "建议与反馈",
			url: "/pages/mineFunc/feedback"
		},
		{
			id: 7,
			icon: "/static/mine/wenti.png",
			title: "常见问题",
			url: "/pages/mineFunc/questions"
		},
		{
			id: 8,
			icon: "/static/mine/lianxiwomen.png",
			title: "联系我们",
			url: "/pages/mineFunc/contactUs"
		},
		{
			id: 9,
			icon: "/static/mine/guanyuwomen.png",
			title: "关于我们",
			url: "/pages/mineFunc/aboutUs"
		},
		{
			id: 9,
			icon: "/static/mine/tuichudenglu.png",
			title: "退出登录",
			url: ""
		}
	])

	const expertTitle = ref([{
			id: 1,
			title: "达人权益"
		},
		{
			id: 2,
			title: "成为达人"
		}
	])

	const navFunc = (url) => {
		if (url == "") {
			uni.navigateTo({
				url: "/pages/account/login"
			})
			return
		}
		uni.navigateTo({
			url: url
		})
	}

	const navEdit = () => {
		uni.navigateTo({
			url: "/pages/edit/editUserInfo"
		})
	}

	const navMineFunc = (item) => {
		uni.navigateTo({
			url: item.url
		})
	}
</script>

<style lang="scss">
	.navigation-bar {
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
			color: #fff;
		}

		.user-card {
			box-sizing: border-box;
			height: 184rpx;
			background-color: #fff;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			padding: 24rpx;
			display: flex;


			.user-avatar {
				width: 136rpx;
				height: 136rpx;
				border-radius: 8rpx 8rpx 8rpx 8rpx;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.user-info {
				margin-left: 16rpx;
				width: calc(100% - 296rpx);
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


			.edit-user-info {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-left: 64rpx;
				font-size: 20rpx;
				color: #4C4C4C;
			}
		}
	}

	.mine-funcs {
		margin-top: 16rpx;
		height: 204rpx;
		background-color: #fff;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.mine-func-item {
			display: flex;
			flex-direction: column;
			align-items: center;

			.mine-func-item-icon {
				width: 68rpx;
				height: 68rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.mine-func-item-title {
				margin-top: 10rpx;
				font-size: 24rpx;
				color: #000000;
			}
		}
	}

	.utilities-content {
		margin-top: 16rpx;
		padding: 32rpx 32rpx 0 32rpx;
		background-color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
	}

	.expert-content {
		margin-top: -40rpx;
		height: 268rpx;
		position: relative;
		overflow: hidden;

		.expert-content-back {
			position: absolute;
			width: 100%;
			height: 100%;
		}

		.expert-title {
			margin-top: 9rpx;
			box-sizing: border-box;
			padding: 0 32rpx;
			position: relative;
			width: 100%;
			height: 70rpx;
			z-index: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.switch-title-item {
				font-size: 32rpx;
				color: #1A1A1A;
			}

			.right-title {
				color: #fff;
			}
		}

		.expert-tips {
			position: relative;
			z-index: 1;
			width: 100%;
			padding: 0 32rpx;
			box-sizing: border-box;
			font-size: 20rpx;
			color: #1A1A1A;
			margin-top: 40rpx;
		}

		.expert-progress {
			box-sizing: border-box;
			padding: 0 32rpx;
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

	.safe-box {
		width: 100%;
		height: 50rpx;
	}
</style>