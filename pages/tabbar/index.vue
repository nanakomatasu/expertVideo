<template>
	<view class="content-box">
		<view class="navigation-bar navigation-bar-background">
			<view class="navgation-bar-content">
				首页
			</view>
			<!-- 			<view class="search-box center-box">
				<tn-search-box v-model="searchValue" shape="square" @input="searchInputEvent"
					@search="searchBtnClickEvent" :border="false" search-button-text-color="#FFFFFF"
					search-button-bg-color="#FAA82C" />
			</view> -->
		</view>
		<view class="swiper-content center-box">
			<uv-swiper :list="list" height="322rpx" radius="8rpx" imgMode="aspectFill"></uv-swiper>
		</view>
		<!-- 		<image src="" mode="aspectFill"></image> -->
		<view class="notice-content center-box">
			<tn-notice-bar :data="noticeData" bg-color="#fff" text-color="#333" left-icon="sound"
				left-icon-color="#1DA8FF" left-icon-size="35rpx" @click="navDetail" />
		</view>
		<view class="index-func-group center-box">
			<view class="func-item" @click="navJinsheng">
				<image src="/static/index/jinsheng.png" mode="aspectFill"></image>
				<view class="func-item-text">晋升培训</view>
			</view>
			<view class="func-item" @click="navIndexFunc('/pages/materialLibrary/materialLibrary')">
				<image src="/static/index/sucai.png" mode="aspectFill"></image>
				<view class="func-item-text">素材动态</view>
			</view>
			<button open-type="contact" bindcontact="handleContact" session-from="sessionFrom" class="func-item"
				style="margin: 0; background-color: transparent; height: 112rpx; margin-top: 30rpx;">
				<image src="/static/index/jinsheng.png" mode="aspectFill"></image>
				蚂蚁客服
			</button>
		</view>
		<view class="video-tutorials center-box" v-if="hideStatus != '1'">
			<tn-title title="视频教程" mode="vLine" assist-color="#FAA82C" size="sm" />
			<tn-empty mode="data" v-if="videoTutorialsList.length == 0"></tn-empty>
			<scroll-view scroll-y="true" class="scroll-view" refresher-enabled="true" @refresherrefresh="handleRefresh"
				:refresher-triggered="triggered" scrolltolower="handleScrollTolower"
				v-if="videoTutorialsList.length >0">
				<view class="video-tutorials-list">
					<view class="video-tutorials-item" v-for="item in videoTutorialsList" :key="item.id"
						@click="navVideo(item)">
						<view class="cover-image" style="position: relative;">
							<view class="play-icon"><uv-icon name="play-circle" size="50rpx" color="#fff"></uv-icon>
							</view>
							<image :src="item.cover" mode="aspectFill" style="position: relative; z-index: 1;"></image>
						</view>
						<view class="video-tutorials-title">
							{{item.name}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 		<view class="live-replay-content center-box">
			<tn-title title="直播回放" mode="vLine" assist-color="#FAA82C" size="sm" />
			<view class="replay-cover" @click="navNotYetOpen" style="position: relative;">
				<view class="play-icon">
					<uv-icon name="play-circle" size="100rpx" color="#fff"></uv-icon>
				</view>
				<image src="https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg" mode="aspectFill">
				</image>
			</view>
		</view> -->
		<!-- 	<view class="open-video-home" @click="openVide">查看视频号主页</view>
		<a href="https://mp.weixin.qq.com/s/sph7qekAjBcxbjN" target="_blank"></a> -->
		<view class="safe-box"></view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		dataCenter,
		teachVideoList,
		teachVideoDetail,
		rollingNotice,
		getTzt,
		newNotify
	} from '../../request/api'
	import {
		useUserStore
	} from '../../store/user'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	onShow(() => {
		getData()
		getClassifyGods()
		getRollingNotice()
		getT()
		getNewNotify()
	})
	const userStore = useUserStore()
	const goodsPage = ref(1)
	const triggered = ref(false)
	const searchValue = ref("")
	const noticeData = ref([])
	const indexFuncList = ref([{
			id: 1,
			title: "晋升培训",
			icon: "/static/index/jinsheng.png",
			url: ""
		},
		{
			id: 2,
			title: "素材动态",
			icon: "/static/index/sucai.png",
			url: "/pages/materialLibrary/materialLibrary"
		},
		{
			id: 3,
			title: "蚂蚁客服",
			icon: "/static/index/kefu.png",
			url: ""
		}
	])
	const hideStatus = ref('1')
	const videoTutorialsList = ref([])
	const list = ref([])
	const noticeDetail = ref({})
	const searchInputEvent = () => {
		// eslint-disable-next-line no-console
		console.log('searchInputEvent', value)
	}
	const searchBtnClickEvent = () => {
		// eslint-disable-next-line no-console
		console.log('searchBtnClickEvent', value)
	}
	const navIndexFunc = (url) => {
		uni.navigateTo({
			url: url
		})
	}
	const navNotYetOpen = () => {
		uni.navigateTo({
			url: '/pages/notYetOpen/notYetOpen'
		})
	}
	const navJinsheng = () => {
		uni.navigateTo({
			url: '/pages/jinsheng/jinsheng'
		})
	}
	const navVideo = (item) => {
		uni.showLoading({
			title: "加载中"
		})
		teachVideoDetail({
			uid: userStore.uid,
			token: userStore.token,
			id: item.id
		}).then(res => {
			uni.hideLoading()
			userStore.setCurrentVideo(res.data.video)
			uni.navigateTo({
				url: '/pages/video/video'
			})
		})
	}
	const getData = () => {
		dataCenter({
			content: "SYLBT"
		}).then(res => {
			res.data.forEach(i => {
				list.value.push(i.img)
			})
		})
	}
	const getClassifyGods = (id) => {
		teachVideoList({
			uid: userStore.uid,
			token: userStore.token,
			page: goodsPage.value,
		}).then(res => {
			if (goodsPage.value > 1) {
				res.data.forEach(i => {
					videoTutorialsList.value.push(i)
				})
			} else {
				videoTutorialsList.value = res.data
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

	const getT = () => {
		getTzt().then(res => {
			hideStatus.value = res.data
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

	const getRollingNotice = () => {
		rollingNotice({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			noticeDetail.value = res.data
			noticeData.value.push(res.data.name)
		})
	}

	const navDetail = (item) => {
		uni.navigateTo({
			url: "/pages/announcement/announcementDetail?id=" + noticeDetail.value.id
		})
	}

	const getNewNotify = () => {
		newNotify({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			if (res.code == 1 && res.data != null) {
				uni.showModal({
					title: '系统通知',
					content: res.data.content,
					confirmText:'已知晓',
					cancelText:'取消',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url:'/pages/mineFunc/notify'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
			console.log(res);
		})
	}
</script>

<style lang="scss" scoped>
	.navigation-bar {
		overflow: hidden;
		width: 100%;
		height: 340rpx;


		.navgation-bar-content {
			margin-top: 88rpx;
			width: 100%;
			height: 108rpx;
			text-align: center;
			color: #fff;
		}

		.search-box {
			background-color: #fff;
		}
	}

	.swiper-content {
		margin-top: -136rpx;
	}

	.notice-content {
		background-color: #fff;
		margin-top: 16rpx;
	}

	.index-func-group {
		height: 160rpx;
		margin-top: 24rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.func-item {
			padding: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 24rpx !important;
			color: #4C4C4C;

			image {
				width: 80rpx;
				height: 80rpx;
			}

			.func-item-text {
				height: 32rpx;
				margin: 0;
			}
		}
	}

	.tips-content {
		margin-top: 24rpx;
		height: 158rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.play-icon {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}

	.video-tutorials {
		box-sizing: border-box;
		margin-top: 24rpx;
		height: 1092rpx;
		padding: 24rpx;
		background-color: #fff;

		.scroll-view {
			margin-top: 24rpx;
			width: 100%;
			height: 980rpx;

			.video-tutorials-list {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.video-tutorials-item {
					width: 48%;
					height: 478rpx;
					margin-bottom: 24rpx;
					box-shadow: 0 8rpx 14rpx 0 rgba(0, 0, 0, 0.07);

					.cover-image {
						position: relative;
						width: 100%;
						height: 374rpx;
						border-radius: 8rpx 8rpx 0px 0px;
						overflow: hidden;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.video-tutorials-title {
						box-sizing: border-box;
						width: 100%;
						padding: 0 12rpx;
						font-size: 24rpx;
						color: #000000;
						margin-top: 12rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}

	.live-replay-content {
		margin-top: 24rpx;
		box-sizing: border-box;
		height: 820rpx;
		padding: 24rpx;
		background-color: #fff;

		.replay-cover {
			margin-top: 24rpx;
			position: relative;
			width: 100%;
			height: 720rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.safe-box {
		width: 100%;
		height: 50rpx;
	}
</style>