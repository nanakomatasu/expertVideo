<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"> <uv-icon name="arrow-left" color="#fff"
					@click="backPages"></uv-icon></view>
			我的海报
		</view>
	</view>
	<view class="invite-cover center-box">
		<image :src="SERVERTAPI + inviteImage" mode="aspectFit" lazy-load></image>
	</view>
	<view class="save-btn center-box" @click="posterSure">保存图片</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		getInviterCode
	} from '../../request/api';
	import {
		useUserStore
	} from '../../store/user';
	import {
		SERVERTAPI
	} from '../../config';
	const inviteImage = ref("")
	const userStore = useUserStore()
	onLoad(() => {
		getUserInfo()
	})
	const backPages = () => {
		uni.navigateBack()
	}
	const getUserInfo = () => {
		getInviterCode({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			inviteImage.value = res.data
		})
	}
	const posterSure = (item) => {
		uni.downloadFile({
			url: SERVERTAPI + inviteImage.value,
			success: function(res) {
				console.log(res)
				wx.saveImageToPhotosAlbum({
					filePath: res.tempFilePath,
					success: function(res) {
						console.log(res)
						console.log('success')
						uni.showToast({
							icon: 'success',
							title: '保存成功'
						})
					},
					fail: function(res) {
						console.log(res)
						console.log('fail')
						if (res.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
							console.log("打开设置窗口");
							wx.openSetting({
								success(settingdata) {
									console.log(settingdata)
									if (settingdata.authSetting[
											"scope.writePhotosAlbum"]) {
										uni.showToast({
											icon: 'success',
											title: '保存成功'
										})
										console.log("获取权限成功，再次点击图片保存到相册")
									} else {
										console.log("获取权限失败")
									}
								}
							})
						}
					}
				})
			},
			fail: function() {
				console.log('fail')
			}
		})
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
		margin-top: 40rpx;

		image {
			width: 100%;
			height: 100%;
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