<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"> <uv-icon name="arrow-left" color="#fff"
					@click="backPage"></uv-icon></view>
			暂未开放
		</view>
	</view>
	<view class="not-yet-open-tips">
		<tn-empty mode="data" size="xl" />
	</view>
</template>

<script setup>
	const backPage = () => {
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

	.not-yet-open-tips {
		width: 100vw;
		height: calc(100vh - 196rpx);
	}
</style>