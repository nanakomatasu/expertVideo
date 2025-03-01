<template>
	<view class="content-box">
		<view class="navigation-bar navigation-bar-background">
			<view class="navgation-bar-content text-color">
				首页
			</view>
			<view class="search-box center-box">
				<tn-search-box v-model="searchValue" shape="square" @input="searchInputEvent"
					@search="searchBtnClickEvent" :border="false" search-button-text-color="#FFFFFF"
					search-button-bg-color="#FAA82C" />
			</view>
		</view>
		<view class="swiper-content center-box">
			<uv-swiper :list="list" height="304rpx" radius="8rpx"></uv-swiper>
		</view>
		<view class="notice-content center-box">
			<tn-notice-bar :data="noticeData" bg-color="#fff" text-color="#BFBFBF" left-icon="sound"
				left-icon-color="#1DA8FF" left-icon-size="35rpx" />
		</view>
		<view class="index-func-group center-box">
			<view class="func-item" v-for="item in indexFuncList" @click="navIndexFunc(item.url)">
				<image :src="item.icon" mode="aspectFill"></image>
				<view class="func-item-text">{{item.title}}</view>
			</view>
		</view>
		<view class="tips-content center-box">
			<image src="/static/index/indexTips.png" mode="aspectFit"></image>
		</view>
		<view class="video-tutorials center-box">
			<tn-title title="视频教程" mode="vLine" assist-color="#FAA82C" size="sm" />
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="video-tutorials-list">
					<view class="video-tutorials-item" v-for="item in videoTutorialsList" :key="item.id">
						<view class="cover-image" style="position: relative;">
							<view class="play-icon"><uv-icon name="play-circle" size="50rpx" color="#fff"></uv-icon>
							</view>
							<image :src="item.cover" mode="aspectFill" style="position: relative; z-index: 1;"></image>
						</view>
						<view class="video-tutorials-title">
							{{item.title}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="tips-content center-box">
			<image src="/static/index/indexTips.png" mode="aspectFit"></image>
		</view>
		<view class="live-replay-content center-box">
			<tn-title title="直播回放" mode="vLine" assist-color="#FAA82C" size="sm" />
			<view class="replay-cover" @click="navNotYetOpen" style="position: relative;">
				<view class="play-icon">
					<uv-icon name="play-circle" size="100rpx" color="#fff"></uv-icon>
				</view>
				<image src="https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg" mode="aspectFill">
				</image>
			</view>
		</view>
		<!-- 	<view class="open-video-home" @click="openVide">查看视频号主页</view>
		<a href="https://mp.weixin.qq.com/s/sph7qekAjBcxbjN" target="_blank"></a> -->
		<view class="safe-box"></view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'


	const searchValue = ref("")
	const noticeData = ref(['【公告】欢迎来到好物优选平台，我们将竭尽为您服务'])
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
	const videoTutorialsList = ref([{
			id: 1,
			title: "新人必刷—生成视频号橱窗专 属海报",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
		},
		{
			id: 2,
			title: "新人必刷—生成视频号橱窗专 属海报",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
		},
		{
			id: 3,
			title: "新人必刷—生成视频号橱窗专 属海报",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
		},
		{
			id: 4,
			title: "新人必刷—生成视频号橱窗专 属海报",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
		},
		{
			id: 5,
			title: "新人必刷—生成视频号橱窗专 属海报新人必刷—生成视频号橱窗专 属海报新人必刷—生成视频号橱窗专 属海报新人必刷—生成视频号橱窗专 属海报",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
		},
	])
	const list = [
		'https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg',
		'https://wx1.sinaimg.cn/mw690/0040jbadgy1hyl899miduj62q45xc7wk02.jpg',
	]
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
</script>

<style lang="scss" scoped>
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
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 24rpx !important;
			color: #4C4C4C;

			image {
				width: 80rpx;
				height: 80rpx;
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