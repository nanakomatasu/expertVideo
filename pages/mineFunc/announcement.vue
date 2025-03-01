<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"><uv-icon name="arrow-left" color="#fff"  @click="backPage"></uv-icon></view>
			公告
		</view>
	</view>
	<scroll-view scroll-y="true" class="scroll-view center-box">
		<view class="announcement-item" v-for="item in announcementList" @click="navDetail(item)">
			<view class="announcement-cover">
				<image :src="item.cover" mode="aspectFill">
				</image>
			</view>
			<view class="announcement-content">
				<view class="announcement-title">{{item.title}}</view>
				<view class="announcement-content-bottom">
					<view class="create-time">{{item.time}}</view>
					<view class="views-number">{{item.views}}阅读</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const announcementList = ref([{
		id: 1,
		title: "轻松创业，优选生活!",
		cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		time: "2024-12-10",
		views: "1486阅读"
	}, {
		id: 2,
		title: "轻松创业，优选生活!",
		cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		time: "2024-12-10",
		views: "1486阅读"
	}, {
		id: 3,
		title: "轻松创业，优选生活!",
		cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		time: "2024-12-10",
		views: "1486阅读"
	}, {
		id: 4,
		title: "轻松创业，优选生活!",
		cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		time: "2024-12-10",
		views: "1486阅读"
	}])

	const navDetail = (item) => {
		uni.navigateTo({
			url: "/pages/announcement/announcementDetail?id=" + item.id
		})
	}
	
	const backPage = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
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

	.scroll-view {
		margin-top: 30rpx;
		height: 80vh;

		.announcement-item {
			width: 100%;
			height: 400rpx;
			margin-bottom: 40rpx;

			.announcement-cover {
				width: 100%;
				height: 260rpx;
				background: linear-gradient(270deg, #D9B97E 3%, #D9B97E 18%, #DFBE80 39%, #DCB375 62%, #BD954F 100%);

				image {
					width: 100%;
					height: 100%;
				}
			}

			.announcement-content {
				box-sizing: border-box;
				padding: 20rpx 24rpx;
				width: 100%;
				height: 140rpx;
				background-color: #fff;

				.announcement-title {
					width: 100%;
					height: 44rpx;
					font-size: 32rpx;
					color: #1A1A1A;
					font-weight: bold;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.announcement-content-bottom {
					margin-top: 22rpx;
					display: flex;
					justify-content: space-between;
					font-size: 24rpx;
					color: #737373;
				}
			}
		}
	}
</style>