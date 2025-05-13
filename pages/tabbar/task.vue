<template>
	<view class="content-box">
		<image src="/static/task/taskBackground.png" mode="aspectFit" class="task-background"></image>
		<view class="navigation-bar">
			<view class="navgation-bar-content text-color">
				任务
			</view>
			<view class="level-title">
				<!-- 				<p style="font-size: 48rpx;">当前等级V2</p> -->
				<p style="font-size: 48rpx; margin-top: 16rpx;">{{taskCompletionStatus}}</p>
			</view>
			<view class="expert-progress">
				<view class="show-progress"> <uv-line-progress :percentage="percentage" activeColor="#FAA82C"
						inactiveColor="#F2F3F8"></uv-line-progress>
				</view>
				<!-- 				<view class="show-level">V2</view> -->
			</view>
		</view>
		<view class="task-content center-box">
			<view class="task-content-title">
				<view class="title-text">
					成为创客
				</view>
				<view class="teach-button" style="z-index: 1;" @click="navVideo">
					<image src="/static/task/teachIcon.png" mode="" class="teach-icon" @click="navVideo"></image>
					{{hideStatus == '1' ? '图文教学' : '视频教学'}}
				</view>
			</view>
			<tn-empty mode="data" v-if="courseList.length == 0"></tn-empty>
			<view class="scroll-view" v-if="courseList.length > 0">
				<view class="task-item" v-for="(item, index) in courseList" @click="createTaskOrder(item)">
					<view class="serial-number">{{ index < 9 ? "0" + (index + 1) : index + 1}}.</view>
					<view class="course-title">{{item.window_goods_name}}</view>
					<view class="course-status completion-status" v-if="item.order_status">
						{{item.order_status == 1 ? '去完成' : '已完成'}}
					</view>
					<view class="course-status unfinished-status" @click="createTaskOrder(item)"
						v-if="!item.order_status">
						{{!item.task_status ? '未完成' : '去完成'}}
					</view>
				</view>
			</view>
		</view>
		<tn-popup v-model="showPopup" open-direction="center" top="54px" width="80%" bg-color="transparent"
			style="position: relative;">
			<view class="close-icon" @click="closePopup" style="position: absolute; top: 20rpx; right: 0; z-index: 1;">
				<tn-icon name="close-circle" size="60rpx" color="#fff"></tn-icon>
			</view>
			<view class="tn-p-lg" style="background-color: transparent; width: 100%; height: 538rpx;">
				<image src="/static/task/taskTips.png" mode="aspectFit"></image>
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
		taskListApi,
		userInfoApi,
		createTask,
		getTzt
	} from '../../request/api';
	import {
		onShow,
		onLoad
	} from '@dcloudio/uni-app'
	onShow(() => {
		flag.value = 0
		getTaskList()
		getUserInfo()
		getT()
		getUser()
	})
	const hideStatus = ref("")
	const flag = ref(0)
	const userStore = useUserStore()
	const showPopup = ref(false)
	const userInfo = ref({})
	const taskCompletionStatus = ref("")
	const completionCount = ref(0)
	const percentage = ref(0)
	const courseList = ref([])
	const openPopup = () => {
		showPopup.value = true
	}
	const closePopup = () => {
		showPopup.value = false
	}
	const navVideo = () => {
		uni.navigateTo({
			url: '/pages/teachVideo/teachVideo'
		})
	}
	const getTaskList = () => {
		taskListApi({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			// Check if all tasks have task_status true and some don't have order_status
			const allTaskStatusTrue = res.data.every(task => task.task_status);
			const hasNoOrderStatus = res.data.some(task => !task.order_status);
			
			if (allTaskStatusTrue && hasNoOrderStatus) {
				// Add order_status=2 to all tasks
				res.data = res.data.map(task => ({
					...task,
					order_status: 2
				}));
			}
			
			courseList.value = res.data;
			calcTask(res.data);
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
	const createTaskOrder = (item) => {
		if (flag.value == 0) {
			if (userStore.token == "") {
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
			flag.value = 1
			if(userInfo.value.phone == null || userInfo.value.phone == "") {
				uni.showModal({
					title: '提示',
					content: '请完善橱窗信息后再来做任务吧~',
					confirmText:'前往',
					cancelText:'取消',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/mineFunc/windowAddress'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				return
			}
			const newArr = []
			const compleArr = []
			courseList.value.forEach(i => {
				if (!i.task_status) {
					newArr.push(i)
				} else {
					compleArr.push(i)
				}
			})
			if (newArr.length == 0) {
				uni.showToast({
					icon: 'none',
					title: '该任务已完成'
				})
				flag.value = 0
				return
			}
			if (item.id !== newArr[0].id) {
				if (compleArr.some(z => {
						return z.window_person_id == item.window_person_id
					})) {
					uni.showToast({
						icon: 'none',
						title: '该任务已完成'
					})
					flag.value = 0
				} else {
					openPopup()
					flag.value = 0
				}
				return
			}
			userStore.setTaskVideoCode(item.video_account)
			userStore.setOrderNumber(item.order_status ? item.window_person_id : item.id)
			uni.navigateTo({
				url: '/pages/task/taskDetail'
			})
		}
		// userStore.setTaskVideoCode(item.video_account)
		// createTask({
		// 	uid: userStore.uid,
		// 	token: userStore.token,
		// 	window_person_id: item.order_status ? item.window_person_id : item.id
		// }).then(res => {
		// 	userStore.setOrderNumber(res.data)
		// 	uni.navigateTo({
		// 		url: '/pages/task/taskDetail'
		// 	})
		// })
	}
	const calcTask = (array) => {
		if (array.length == 0) {
			taskCompletionStatus.value = '还差10个任务晋升为"创客"'
			percentage.value = 0
			completionCount.value = 0
		} else {
			const filteredArray = array.filter(item => item.order_status && item.order_status === 2);
			const count = filteredArray.length;
			if (count == 10) {
				taskCompletionStatus.value = `您已晋升为"创客"`
				percentage.value = count * 10
				completionCount.value = count
				return
			}
			const noComplet = 10 - Number(count)
			taskCompletionStatus.value = `还差${noComplet}个任务晋升为"创客"`
			percentage.value = count * 10
			completionCount.value = count
		}
	}
	const handleContact = (e) => {
		// 小程序消息页面的路径 String
		console.log(e.detail.path)
		// 小程序消息指定的查询参数 Object
		console.log(e.detail.query)
	}
	const getT = () => {
		getTzt().then(res => {
			hideStatus.value = res.data
		})
	}
	const getUser = () => {
		userInfoApi({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			userInfo.value = res.data
		})
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
				// width: calc(100% - 84rpx);
				width: 100%;
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
		margin-top: -80rpx;
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
			margin-left: 20rpx;

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
		margin-top: -80rpx;
		background-color: #fff;
		position: relative;
		z-index: 1;

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
			height: calc(100% - 48rpx);
			background-color: #fff;

			.task-item {
				position: relative;
				padding-bottom: 10rpx;
				margin-bottom: 32rpx;
				border-bottom: 2rpx solid #F2F2F2;
				display: flex;
				align-items: center;
				font-size: 28rpx;

				.serial-number {
					font-size: 32rpx;
					color: #1A1A1A;
				}

				.course-title {
					margin-left: 32rpx;
					width: 300rpx;
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