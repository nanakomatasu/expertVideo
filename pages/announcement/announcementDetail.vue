<template>
	<view class="navigation-bar">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx; z-index: 2;">
				<uv-icon name="arrow-left" color="#fff" @click="backPage"></uv-icon>
			</view>
		</view>
		<image src="https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg" mode="aspectFill"
			class="announcement-cover"></image>
	</view>
	<view class="announcement-content">
		<rich-text :nodes="defaultContent"></rich-text>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'

	onLoad((options) => {
		announcementId.value = options.id
	})

	const announcementId = ref("")
	const defaultContent = ref(`
		<p>露从今夜白，月是故乡明</p>
		<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
	`)
	const backPage = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
	page {
		background: #fff !important;
	}

	.navigation-bar {
		overflow: hidden;
		width: 100%;
		height: 440rpx;

		.announcement-cover {
			position: absolute;
			z-index: 1;
			top: 0;
			width: 100%;
			height: 440rpx;
		}

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

	.announcement-content {
		position: relative;
		z-index: 3;
		width: 100%;
		padding: 48rpx 32rpx;
		border-radius: 20rpx 20rpx 0 0;
		margin-top: -40rpx;
		background-color: #fff;
	}
</style>