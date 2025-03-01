<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"> <uv-icon name="arrow-left" color="#fff"
					@click="backPages"></uv-icon></view>
			编辑资料
		</view>
	</view>
	<view class="edit-title">
		<P style="font-size: 32rpx; color: #15191B;">完善资料</P>
		<p style="font-size: 24rpx; color: #4C4C4C; margin-top: 8rpx;">让大家更好的认识你~</p>
	</view>
	<view class="edit-avatar">
		<view class="change-avatar" @click="uploadAvatar"><uv-icon name="camera-fill"
				style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1;"
				size="50rpx" color="#fff"></uv-icon></view>
		<image :src="avatar" mode="aspectFill"></image>
	</view>
	<view class="userinfo-content center-box">
		<view class="user-nick content-item">
			<view class="content-item-title">昵称</view>
			<view class="content-item-main">
				<input type="text" v-model="nick" placeholder="请输入昵称" />
			</view>
		</view>
		<view class="user-gender content-item">
			<view class="content-item-title">性别</view>
			<view class="content-item-main" style="display: flex; justify-content: space-between;"
				@click="openGenderPicker">{{pickerValue}}<uv-icon name="arrow-down-fill"></uv-icon></view>
		</view>
		<view class="user-region content-item">
			<view class="content-item-title">地区</view>
			<view class="content-item-main" style="display: flex; justify-content: space-between;" @click="openRegion">
				{{regionValue[0]}} {{regionValue[1]}} {{regionValue[2]}}<uv-icon name="arrow-down-fill"></uv-icon>
			</view>
		</view>
		<view class="user-phone content-item">
			<view class="content-item-title">手机号</view>
			<view class="content-item-main">
				<input type="text" v-model="phone" placeholder="请输入手机号" />
			</view>
		</view>
		<view class="user-invite-id content-item">
			<view class="content-item-title">推荐ID</view>
			<view class="content-item-main">
				<input type="text" v-model="inviteCode" placeholder="请输入推荐ID" />
			</view>
		</view>
	</view>
	<view class="save-btn">
		完成编辑
	</view>
	<tn-region-picker v-model="regionValue" v-model:open="openRegionPicker" />
	<tn-picker v-model="pickerValue" v-model:open="openPicker" :data="pickerData" />
	<view class="safe-box"></view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const avatar = ref("https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg")

	const openRegionPicker = ref(false)

	const openPicker = ref(false)

	const pickerValue = ref('男')

	const regionValue = ref(['河南省', '郑州市', '金水区'])

	const pickerData = ['男', '女']

	const nick = ref("")

	const phone = ref("")

	const inviteCode = ref("")

	const uploadAvatar = () => {
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

	const backPages = () => {
		uni.navigateBack()
	}

	const openRegion = () => {
		openRegionPicker.value = true
	}

	const openGenderPicker = () => {
		openPicker.value = true
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

	.edit-title {
		width: calc(100% - 128rpx);
		margin: 48rpx 0 0 50%;
		transform: translateX(-50%);
	}

	.edit-avatar {
		position: relative;
		width: 168rpx;
		height: 168rpx;
		border-radius: 50%;
		margin: 48rpx 0 0 64rpx;
		background-color: red;

		.change-avatar {
			z-index: 1;
			position: absolute;
			right: 0;
			bottom: 0;
			width: 60rpx;
			height: 60rpx;
			background-color: #1a1a1a;
			border-radius: 50%;
			border: 5rpx solid #fff;
		}

		image {
			width: 100%;
			height: 100%;
		}
	}

	.userinfo-content {
		box-sizing: border-box;
		padding: 0 24rpx;
		margin-top: 56rpx;

		.content-item {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 32rpx;

			.content-item-title {
				font-weight: bold;
				font-size: 28rpx;
				color: #4C4C4C;
			}

			.content-item-main {
				box-sizing: border-box;
				padding: 24rpx;
				width: 500rpx;
				height: 88rpx;
				background: #F6F6F6;
				border-radius: 8rpx 8rpx 8rpx 8rpx;

				.content-item-input {}
			}
		}
	}

	.save-btn {
		width: calc(100% - 128rpx);
		margin: 48rpx 0 0 50%;
		transform: translateX(-50%);
		height: 88rpx;
		background: linear-gradient(90deg, #FFA143 0%, #FAA82C 100%);
		border-radius: 88rpx 88rpx 88rpx 88rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 28rpx;
		color: #fff;
		font-weight: bold;
	}

	.safe-box {
		width: 100%;
		height: 50rpx;
	}
</style>