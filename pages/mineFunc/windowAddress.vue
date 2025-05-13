<template>
	<image src="/static/task/taskBackground.png" mode="aspectFit" class="window-address-background"></image>
	<view class="navigation-bar">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx; z-index: 2;"> <uv-icon name="arrow-left"
					color="#fff" @click="backPage"></uv-icon></view>
			橱窗名称
		</view>
	</view>
	<view class="window-address-content center-box">
		<view class="window-address-content-title" style="margin-bottom: 32rpx; margin-top: 32rpx;">
			<span style="color: #FF4343;">*</span> 橱窗名称
		</view>
		<uv-input v-model="inputValue" placeholder="请输入标题" style="margin-top: 32rpx; font-weight: bold;">
			<template v-slot:prefix>
				<uv-text text="蚂蚁联盟-" margin="0 3px 0 0" type="tips"></uv-text>
			</template>
		</uv-input>
	</view>
	<view class="window-address-content center-box" style="margin-top: 24rpx;">
		<view class="window-address-content-title" style="margin-bottom: 32rpx; margin-top: 32rpx;">
			<span style="color: #FF4343;">*</span> 视频号ID
		</view>
		<uv-input v-model="videoId" placeholder="请输入视频号" style="margin-top: 32rpx; font-weight: bold;">
		</uv-input>
	</view>
	<view class="window-address-content center-box" style="margin-top: 24rpx;">
		<view class="window-address-content-title" style="margin-bottom: 32rpx; margin-top: 32rpx;">
			<span style="color: #FF4343;">*</span> 手机号
		</view>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"
			style="font-size: 28rpx; text-align: left;">{{phone == "" ? "获取手机号" : phone}}</button>
		<!-- 		<uv-input v-model="videoId" placeholder="请输入视频号" style="margin-top: 32rpx; font-weight: bold;">
		</uv-input> -->
	</view>
	<view class="save-btn center-box" @click="editUserInfo">确认</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const inputValue = ref("")
	const windowsCode = ref("")
	const videoId = ref("")
	const phone = ref("")
	import {
		SERVERTAPI
	} from '../../config';
	import {
		useUserStore
	} from '../../store/user';
	import {
		onShow,
		onLoad
	} from '@dcloudio/uni-app'
	import {
		changeUserInfoApi,
		userInfoApi,
		telnumberApi
	} from '../../request/api';
	const userStore = useUserStore()
	import {
		upload
	} from '../../request/api'
	onLoad(() => {
		getUserInfo()
	})
	const uploadImage = () => {
		uni.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				const tempFilePaths = res.tempFilePaths[0];
				uni.uploadFile({
					url: SERVERTAPI + upload,
					filePath: tempFilePaths,
					name: 'file',
					formData: {
						'uid': userStore.uid,
						'token': userStore.token
					},
					success: (uploadRes) => {
						const res = JSON.parse(uploadRes.data)
						if (res.code != 1) {
							uni.showToast({
								icon: 'none',
								title: res.info
							})
							return
						}
						uni.showToast({
							icon: 'success',
							title: '上传成功'
						})
						windowsCode.value = res.data.urlImg
					}
				});
			}
		});
	}

	const editUserInfo = () => {
		if (inputValue.value == "" || videoId.value == "" || phone.value == "") {
			uni.showToast({
				icon: 'none',
				title: '请完整填写信息'
			})
			return
		}
		changeUserInfoApi({
			uid: userStore.uid,
			token: userStore.token,
			window_goods_name: "蚂蚁联盟-" + inputValue.value,
			nickname:"蚂蚁联盟-" + inputValue.value,
			video_account: videoId.value,
			phone: phone.value,
		}).then(res => {
			if (res.code == 1) {
				uni.showToast({
					icon: 'success',
					title: '修改成功'
				})
				setTimeout(() => {
					uni.navigateBack()
				}, 500)
			}
		})
	}

	const getUserInfo = () => {
		userInfoApi({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			inputValue.value = res.data.window_goods_name.replace(new RegExp("蚂蚁联盟", 'g'), '');
			windowsCode.value = res.data.window_qr_code
			videoId.value = res.data.video_account
			phone.value = res.data.phone
		})
	}

	const getPhoneNumber = (e) => {
		if (e.detail.errMsg === 'getPhoneNumber:ok') {
			const encryptedData = e.detail.encryptedData;
			const iv = e.detail.iv;
			uni.login({
				success: (loginRes) => {
					if (loginRes.code) {
						telnumberApi({
							uid: userStore.uid,
							code: loginRes.code,
							encryptedData: encryptedData,
							iv: iv
						}).then(res => {
							console.log(res);
							phone.value = res.data
						})
					} else {
						// 获取登录凭证失败
						console.error('获取登录凭证失败：', loginRes.errMsg);
						uni.showToast({
							title: '获取登录凭证失败，请稍后重试',
							icon: 'none'
						});
					}
				},
				fail: (err) => {
					// 登录失败
					console.error('登录失败：', err);
					uni.showToast({
						title: '登录失败，请检查网络',
						icon: 'none'
					});
				}
			});
		} else {
			// 用户拒绝授权
			console.log('用户拒绝授权获取手机号');
			uni.showToast({
				title: '你拒绝了授权，无法获取手机号',
				icon: 'none'
			});
		}
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
		overflow: hidden;
		position: relative;
		z-index: 1;
		box-sizing: border-box;
		height: 220rpx;
		background-color: #fff;
		margin-top: -240rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		padding: 0 24rpx;

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