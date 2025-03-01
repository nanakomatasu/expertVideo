<template>
	<image src="/static/task/taskBackground.png" mode="aspectFit" class="window-address-background"></image>
	<view class="navigation-bar">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx; z-index: 2;"> <uv-icon name="arrow-left"
					color="#fff" @click="backPage"></uv-icon></view>
			橱窗地址
		</view>
	</view>
	<view class="window-address-content center-box">
		<view class="window-address-content-title">
			<span style="color: #FF4343;">*</span> 橱窗地址
		</view>
		<uv-input v-model="inputValue" placeholder="请输入标题" style="margin-top: 32rpx;"></uv-input>
	</view>
	<view class="window-address-code center-box">
		<view class="window-address-code-title">
			<span style="color: #FF4343;">*</span> 视频号橱窗二维码
		</view>
		<view class="upload-window-address-code" @click="uploadImage">
			<image :src="windowsCode" mode="aspectFill" v-if="windowsCode != ''"></image>
			<uv-icon name="photo" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"
				size="60rpx" v-if="windowsCode == ''"></uv-icon>
		</view>
	</view>
	<view class="save-btn center-box">确认</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const inputValue = ref("")
	const windowsCode = ref("")
	const uploadImage = () => {
		// 项目实战中使用
		uni.chooseImage({
			count: 1, // 图片数量
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album', 'camera'], //从相册选择或者拍照
			success: (res) => {
				const tempFilePaths = res.tempFilePaths;
				console.log(tempFilePaths[0])
				uni.uploadFile({
					url: 'https://xx.com/center/group/icon', //上传图片api
					filePath: tempFilePaths[0],
					name: 'groupicon',
					header: {
						"Authorization": "token"
					},
					success: (res) => {
						let group = JSON.parse(res.data)
						uni.showToast({
							title: "上传成功",
							icon: "success"
						})
					}
				});
			}
		});
	}

	const backPage = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
	.window-address-background {
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
			position: relative;
			margin-top: 88rpx;
			width: 100%;
			height: 108rpx;
			text-align: center;
		}

		.text-color {
			color: #FFFFFF;
		}
	}

	.window-address-content {
		position: relative;
		z-index: 1;
		box-sizing: border-box;
		height: 220rpx;
		background-color: #fff;
		margin-top: -240rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		padding: 32rpx 24rpx;

		.window-address-content-title {
			font-size: 32rpx;
			color: #1A1A1A;
			font-weight: bold;
		}
	}

	.window-address-code {
		margin-top: 24rpx;
		background-color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		padding: 32rpx 24rpx;

		.window-address-code-title {
			font-size: 32rpx;
			color: #1A1A1A;
			font-weight: bold;
		}

		.upload-window-address-code {
			position: relative;
			margin-top: 32rpx;
			width: 200rpx;
			height: 200rpx;
			background-color: #F6F6F6;
			border-radius: 16rpx 16rpx 16rpx 16rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.save-btn {
		margin-top: 48rpx;
		height: 96rpx;
		text-align: center;
		line-height: 96rpx;
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		background-color: #FAA82C;
		font-size: 28rpx;
		color: #FFFFFF;
	}
</style>