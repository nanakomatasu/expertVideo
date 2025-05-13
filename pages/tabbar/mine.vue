<template>
	<view class="content-box">
		<view class="navigation-bar navigation-bar-background">
			<view class="navgation-bar-content text-color">
				我的
			</view>
			<view class="user-card center-box">
				<view class="user-avatar">
					<image :src="userInfo.headimg" mode="aspectFill">
					</image>
				</view>
				<view class="user-info">
					<view class="user-name-gender">
						{{userInfo.nickname}}
					</view>
					<view class="user-lable">
						<view class="user-identity user-lable-item" v-if="userInfo.ievel == 0">身份：普通用户
						</view>
						<view class="user-level user-lable-item" v-if="userInfo.ievel == 1">等级：创客</view>
						<view class="user-level user-lable-item" v-if="userInfo.ievel == 2">身份：推客</view>
						<view class="user-level user-lable-item" v-if="userInfo.ievel == 3">身份：团长</view>
						<view class="user-level user-lable-item" v-if="userInfo.ievel == 4">身份：服务商</view>
					</view>
				</view>
				<view class="edit-user-info" @click="navEdit">
					<uv-icon name="edit-pen-fill"></uv-icon>
					编辑资料
				</view>
			</view>
		</view>

		<view class="expert-content center-box">
			<!-- 			<view class="expert-title">
				<view class="switch-title-item" v-for="item in expertTitle" :key="item.id"
					:class="[item.id == 2 ? 'right-title' : '']" @click="clickExpert(item.id)">{{item.title}}</view>
			</view> -->
			<tn-switch-tab v-model="currentTabIndex" :tabs="tabs" class="expert-content center-box"
				style="height: 100%;" inactive-bg-color="#D9B97E" inactive-text-color="#fff">
				<view class="expert-tips" style="height: 20rpx;">
					{{currentTabIndex == 0 ? taskCompletionStatus : ''}}
				</view>
				<view class="expert-progress" v-if="currentTabIndex == 0">
					<view class="show-progress"> <uv-line-progress :percentage="percentage" activeColor="#BD954F"
							inactiveColor="#F2F3F8"></uv-line-progress>
					</view>
					<view class="show-level">{{currentTaskTitle}}</view>
				</view>
				<view class="expert-progress" v-if="currentTabIndex == 1" style="margin-top: 0;">

					<span
						v-if="currentLevel == '推客'">当你成为“{{lastLevel}}”且直推人数满足{{(currentLevelNeedPeople)}}人，即可自动升级为“{{currentLevel}}”，开启您的高佣之路。</span>

					<span
						v-if="currentLevel == '团长'">当你成为“{{lastLevel}}”且直推人数满足{{(currentLevelNeedPeople)}}人，即可自动升级为“{{currentLevel}}”，享受团队高额分红。</span>
					<span
						v-if="currentLevel == '服务商'">当你成为“{{lastLevel}}”且直推人数满足{{(currentLevelNeedPeople)}}人，即可自动升级为“{{currentLevel}}”，尊享公司项目利润加权分红。</span>
					<view class="safe" style="height: 40rpx;"></view>
				</view>
				<view class="safe-center-box" style="height: 60rpx;"></view>
			</tn-switch-tab>

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
					<uv-grid-item v-for="(item, index) in baseList" :key="index" style="padding-bottom: 64rpx;"
						@click="navFunc(item)">
						<image :src="item.icon" lazy-load="false" style="width: 74rpx; height: 74rpx;">
						</image>
						<text class="grid-text mt-10rpx line-clamp-1"
							style="font-size: 24rpx; color: #000000; margin-top: 18rpx; margin-bottom: 24rpx;">{{ item.title }}</text>
					</uv-grid-item>
				</uv-grid>
			</view>
		</view>
		<tn-popup v-model="showPopup" open-direction="center" top="54px" width="80%" bg-color="transparent"
			style="position: relative;">
			<view class="close-icon" @click="closePopup" style="position: absolute; top: 20rpx; right: 0; z-index: 1;">
				<tn-icon name="close-circle" size="60rpx" color="#fff"></tn-icon>
			</view>
			<view class="tn-p-lg"
				style="background-color: transparent; width: 100%; height: 716rpx; position: relative;">
				<view class="level-info">
					<rich-text :nodes="levelDetail"></rich-text>
				</view>
				<image src="/static/mine/popuppic.png" mode="aspectFit" style="width: 100%; height: 100%;"></image>
			</view>
		</tn-popup>
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
		dataCenter
	} from '../../request/api';
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	const currentTabIndex = ref(0)
	const currentTaskTitle = ref("")
	const tabs = ref([])
	const lastLevel = ref("")
	const currentLevel = ref("")
	onShow(() => {
		tabs.value = []
		getUserInfo()
		getTaskList()
		getLevelInfo()
	})
	const userStore = useUserStore()
	const showPopup = ref(false)
	const percentage = ref(0)
	const levelDetail = ref("")
	const currentLevelNeedPeople = ref("")
	const closePopup = () => {
		showPopup.value = false
	}
	const openPopup = () => {
		showPopup.value = true
	}
	const funcList = ref([{
			id: 1,
			icon: "/static/mine/renwu.png",
			title: "创客任务",
			url: "/pages/task/taskDetail"
		},
		{
			id: 2,
			icon: "/static/mine/tuijian.png",
			title: "我的推荐",
			url: "/pages/notYetOpen/notYetOpen"
		},
		{
			id: 3,
			icon: "/static/mine/shipinhao.png",
			title: "视频号",
			url: ""
		}
	])

	const baseList = ref([{
			id: 2,
			title: "我的海报",
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
			id: 7,
			icon: "/static/mine/wenti.png",
			title: "常见问题",
			url: "/pages/mineFunc/questions"
		},
		{
			id: 9,
			icon: "/static/mine/guanyuwomen.png",
			title: "关于我们",
			url: "/pages/mineFunc/aboutUs"
		},
		{
			id: 11,
			icon: "/static/mine/tuidan.png",
			title: "退单列表",
			url: "/pages/mineFunc/tuidan"
		},
		{
			id: 12,
			icon: "/static/mine/notify.png",
			title: "消息通知",
			url: "/pages/mineFunc/notify"
		},
		{
			id: 10,
			icon: "/static/mine/tuichudenglu.png",
			title: "退出登录",
			url: ""
		}
	])

	const expertTitle = ref([{
			id: 1,
			title: "创客权益"
		},
		{
			id: 2,
			title: "成为创客"
		}
	])
	const taskCompletionStatus = ref("")

	const completionCount = ref(0)

	const navTask = () => {
		uni.switchTab({
			url: '/pages/tabbar/task'
		})
	}

	const getTaskList = () => {
		taskListApi({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			// calcTask(res.data)
		})
	}

	const userInfo = ref({})

	const navFunc = (item) => {
		if (userStore.token == "" || userStore.uid == "") {
			uni.showModal({
				title: '请先去登陆吧',
				success(res) {
					if (res.confirm) {
						uni.navigateTo({
							url: "/pages/account/login"
						})
					}
		
				}
			})
			return
		}
		if (item.id == 2) {
			if (userInfo.value.ievel == 0) {
				uni.showToast({
					icon: 'none',
					title: '您还不是创客，请先完成任务'
				})
				return
			}
			if (userInfo.value.window_goods_name == "" || userInfo.value
				.video_account == "" || userInfo.value.phone == "" || userInfo.value.window_goods_name == null ||
				userInfo.value
				.video_account == null || userInfo.value.phone == null) {
				uni.showToast({
					icon: 'none',
					title: '请先完善橱窗信息'
				})
				return
			} else {
				uni.navigateTo({
					url: item.url
				})
			}
			return
		}
		if (item.url == "") {
			userStore.setUid("")
			userStore.setToken("")
			uni.navigateTo({
				url: "/pages/account/login"
			})
			return
		}
		uni.navigateTo({
			url: item.url
		})
	}

	const navEdit = () => {
		uni.navigateTo({
			url: "/pages/edit/editUserInfo"
		})
	}

	const clickExpert = (id) => {
		if (id == 1) {
			openPopup()
		} else {
			navTask()
		}
	}

	const navMineFunc = (item) => {
		if (item.id == 3) {
			openVideo()
			return
		} else if (item.id == 1) {
			navTask()
			return
		}
		uni.navigateTo({
			url: item.url
		})
	}

	const getUserInfo = () => {
		userInfoApi({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			userInfo.value = res.data
			if (res.data.ievel == 0) {
				lastLevel.value = "创客"
				currentLevel.value = "推客"
				taskCompletionStatus.value = "还差" + (10 - res.data.task_progress) + "个任务成为创客"
				currentLevelNeedPeople.value = Number(res.data.system_config[0].value) + 1
				currentTaskTitle.value = "创客"
				tabs.value.push("创客")
				tabs.value.push("推客")
				percentage.value = res.data.task_progress * 10
			} else if (res.data.ievel == 1) {
				lastLevel.value = "创客"
				currentLevel.value = "推客"
				taskCompletionStatus.value = "再推" + (res.data.system_config[0].value - res.data
					.node_recommender_count + 1) + "人成为推客"
				currentLevelNeedPeople.value = Number(res.data.system_config[0].value) + 1
				currentTaskTitle.value = "创客"
				tabs.value.push("创客")
				tabs.value.push("推客")
				percentage.value = res.data.task_progress * 10
			} else if (res.data.ievel == 2) {
				lastLevel.value = "推客"
				currentLevel.value = "团长"
				currentLevelNeedPeople.value = Number(res.data.system_config[1].value) + 1
				taskCompletionStatus.value = "再推" + (res.data.system_config[1].value - res.data
					.node_recommender_count + 1) + "人成为团长"
				currentTaskTitle.value = "推客"
				tabs.value.push("推客")
				tabs.value.push("团长")
				percentage.value = res.data.bfb
			} else if (res.data.ievel == 3) {
				lastLevel.value = "团长"
				currentLevel.value = "服务商"
				currentLevelNeedPeople.value = Number(res.data.system_config[2].value) + 1
				taskCompletionStatus.value = "再推" + (res.data.system_config[2].value - res.data
					.node_recommender_count + 1) + "人成为服务商"
				currentTaskTitle.value = "团长"
				tabs.value.push("团长")
				tabs.value.push("服务商")
				percentage.value = res.data.bfb
			} else if (res.data.ievel == 4) {
				currentLevelNeedPeople.value = Number(res.data.system_config[3].value) + 1
				taskCompletionStatus.value = "您已成为服务商"
				lastLevel.value = "团长"
				currentLevel.value = "服务商"
				currentTaskTitle.value = "服务商"
				tabs.value.push("团长")
				tabs.value.push("服务商")
				percentage.value = res.data.bfb
			}

		})
	}

	const openVideo = () => {
		if (userInfo.value.video_account == null || userInfo.value.video_account == "") {
			uni.showToast({
				icon: 'none',
				title: '请先设置视频号ID'
			})
			return
		}
		wx.openChannelsUserProfile({
			// finderUserName: 'sph7qekAjBcxbjN',
			finderUserName: userInfo.value.video_account,
			success(res) {
				console.log(res);
			},
			fail(res) {
				console.log(res);
			}
		})
	}

	const getLevelInfo = () => {
		dataCenter({
			content: 'DJMS'
		}).then(res => {
			levelDetail.value = res.data.content
			console.log(res);
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
		padding: 32rpx 32rpx 32rpx 32rpx;
		background-color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
	}

	.expert-content {
		margin-top: -40rpx;
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

	.level-info {
		color: #fff;
		overflow: scroll;
		width: 80%;
		height: 220rpx;
		position: absolute;
		z-index: 1;
		left: 50%;
		transform: translateX(-50%);
		bottom: 165rpx;
		box-sizing: border-box;
		padding: 32rpx 32rpx;
	}
</style>