<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"><uv-icon name="arrow-left" color="#fff"
					@click="backPages"></uv-icon></view>
			视频号ID
		</view>
	</view>
	<view class="change-video-title center-box">修改视频号</view>
	<uv-input class="center-box"
		style="margin-top: 56rpx; height: 104rpx; border-radius: 8rpx 8rpx 8rpx 8rpx; background: #F6F6F6; padding: 0 20rpx;"
		border="none" v-model="videoId"></uv-input>
	<view class="save-video-id center-box">确认</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const videoId = ref("1234567")

	const backPages = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
	page {
		background: #fff;
	}

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

	.change-video-title {
		margin-top: 48rpx;
		font-size: 36rpx;
		color: #1A1A1A;
		font-weight: bold;
		text-align: center;
	}

	.save-video-id {
		margin-top: 48rpx;
		height: 96rpx;
		line-height: 96rpx;
		background: #FAA82C;
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		text-align: center;
		font-size: 28rpx;
		color: #fff;
	}
</style>