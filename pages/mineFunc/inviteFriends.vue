<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"> <uv-icon name="arrow-left" color="#fff"
					@click="backPages"></uv-icon></view>
			邀请好友
		</view>
	</view>
	<view class="invite-cover center-box">
		<image :src="inviteImage" mode="aspectFill"></image>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const inviteImage = ref("https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg")
	const backPages = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss">
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

	.invite-cover {
		height: 70vh;
		margin-top: 94rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>