<template>
	<view class="content-box">
		<view class="navigation-bar navigation-bar-background">
			<view class="navgation-bar-content text-color">
				商学院
			</view>
		</view>
		<view class="search-box center-box">
			<view class="search-content">
				<tn-search-box v-model="searchValue" shape="square" @search="searchBtnClickEvent" :border="false"
					search-button-text-color="#FFFFFF" search-button-bg-color="#FAA82C" />
			</view>
		</view>
		<view class="switch-tab-content">
			<view class="switch-item" v-for="item in switchList" :key="item.id"
				:class="[item.id == switchId ? 'select-switch-item' : '']" @click="changeSwitchId(item)">
				{{item.title}}
			</view>
		</view>
		<view class="course-list">
			<tn-empty mode="data" v-if="courseList.length == 0"></tn-empty>
			<scroll-view scroll-y="true" class="scroll-view" refresher-enabled="true" @refresherrefresh="handleRefresh"
				:refresher-triggered="triggered" scrolltolower="handleScrollTolower" v-if="courseList.length > 0">
				<view class="course-item-content">
					<view class="course-item" v-for="item in courseList" :key="item.id" @click="navCourseDetail(item)">
						<view class="course-cover">
							<view class="play-icon" v-if="hideStatus != '1'"><uv-icon name="play-circle"
									class="play-icon" size="50rpx" color="#fff" v-if="switchId == 2"></uv-icon></view>
							<image :src="item.cover" mode="aspectFill"></image>
						</view>
						<view class="course-title">{{item.name}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		useUserStore
	} from '../../store/user'
	import {
		BusinessCollegeApi,
		getTzt
	} from '../../request/api'
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	onShow(() => {
		getT()
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

		}
		getClassifyGods()
	})
	const hideStatus = ref('1')
	const userStore = useUserStore()
	const switchId = ref(1)
	const goodsPage = ref(1)
	const triggered = ref(false)
	const switchList = ref([])
	const courseList = ref([])
	const changeSwitchId = (item) => {
		switchId.value = item.id
		getClassifyGods()
	}

	const searchBtnClickEvent = (value) => {
		// eslint-disable-next-line no-console
		console.log('searchBtnClickEvent', value)
		BusinessCollegeApi({
			uid: userStore.uid,
			token: userStore.token,
			type: switchId.value,
			page: goodsPage.value,
			name: value
		}).then(res => {
			goodsPage.value == 1
			courseList.value = res.data
			triggered.value = false
		})
	}
	const navCourseDetail = (item) => {
		uni.navigateTo({
			url: "/pages/course/courseDetail?id=" + item.id + "&type=" + switchId.value
		})
	}
	const getClassifyGods = () => {
		BusinessCollegeApi({
			uid: userStore.uid,
			token: userStore.token,
			type: switchId.value,
			page: goodsPage.value,
		}).then(res => {
			if (goodsPage.value > 1) {
				res.data.forEach(i => {
					courseList.value.push(i)
				})
			} else {
				courseList.value = res.data
			}
			if (res.data.length == 0) {
				uni.showToast({
					icon: 'none',
					title: '暂无更多内容了'
				})

			}
			triggered.value = false
		})
	}

	const handleRefresh = () => {
		if (!triggered.value) {
			triggered.value = true;
			goodsPage.value = 1
			getClassifyGodss()
		}
	}

	const handleScrollTolower = () => {
		goodsPage.value++
		getClassifyGodss()
	}

	const getT = () => {
		getTzt().then(res => {
			hideStatus.value = res.data
			console.log(res);
			if (res.data !== '1') {
				switchList.value = [{
						id: 1,
						title: "图文"
					},
					{
						id: 2,
						title: "视频"
					}
				]
			} else {
				switchList.value = [{
						id: 1,
						title: "图文"
					},
					{
						id: 2,
						title: "教程"
					}
				]
			}
			// if (res.data.content != '1') {
			// 	console.log('111');
			// 	switchList.value = []
			// 	switchList.value.push({
			// 		id: 1,
			// 		title: "图文"
			// 	})
			// 	switchList.value.push({
			// 		id: 2,
			// 		title: "视频"
			// 	})
			// 	// switchList.value = [{
			// 	// 		id: 1,
			// 	// 		title: "图文"
			// 	// 	},
			// 	// 	{
			// 	// 		id: 2,
			// 	// 		title: "视频"
			// 	// 	}
			// 	// ]
			// }
		})
	}
</script>

<style lang="scss" scoped>
	.navigation-bar {
		overflow: hidden;
		width: 100%;
		height: 196rpx;

		.navgation-bar-content {
			margin-top: 88rpx;
			width: 100%;
			height: 108rpx;
			text-align: center;
		}

		.text-color {
			color: #fff;
		}
	}

	.search-box {
		margin-top: 8rpx;
		padding: 8rpx 0;
		width: calc(100% - 64rpx);
		background-color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;

		.search-content {
			width: 100%;
			background-color: #F6F6F6;
		}
	}

	.switch-tab-content {
		box-sizing: border-box;
		width: calc(100% - 64rpx);
		height: 104rpx;
		background-color: #fff;
		margin: 8rpx 0 0 50%;
		transform: translateX(-50%);
		padding: 10rpx 16rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 8rpx;

		.switch-item {
			cursor: pointer;
			width: 49%;
			height: 84rpx;
			line-height: 84rpx;
			background-color: #fff;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			text-align: center;
			font-size: 32rpx;
			color: #1A1A1A;
		}

		.select-switch-item {
			background-color: #FFD293;
			color: #fff;
		}
	}

	.course-list {
		width: calc(100% - 64rpx);
		height: 70vh;
		background-color: #fff;
		margin: 16rpx 0 0 50%;
		transform: translateX(-50%);
		border-radius: 8rpx;

		.scroll-view {
			width: 100%;
			height: 100%;

			.course-item-content {
				width: 100%;
				height: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-content: flex-start;

				.course-item {
					width: 49%;
					padding: 12rpx 12rpx;

					.course-cover {
						width: 100%;
						position: relative;
						height: 374rpx;
						border-radius: 8rpx 8rpx 8rpx 8rpx;

						.play-icon {
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							z-index: 2;
						}

						image {
							width: 100%;
							height: 100%;
						}
					}

					.course-title {
						width: 100%;
						padding: 0 8rpx;
						font-size: 28rpx;
						color: #1A1A1A;
					}
				}
			}
		}
	}
</style>