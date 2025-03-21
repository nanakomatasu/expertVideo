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
		<!-- 		<view class="user-gender content-item">
			<view class="content-item-title">性别</view>
			<view class="content-item-main" style="display: flex; justify-content: space-between;"
				@click="openGenderPicker">{{pickerValue}}<uv-icon name="arrow-down-fill"></uv-icon></view>
		</view> -->
		<view class="user-region content-item">
			<view class="content-item-title">地区</view>
			<view class="content-item-main" style="display: flex; justify-content: space-between;" @click="openRegion">
				{{regionValue[0]}} {{regionValue[1]}} {{regionValue[2]}}<uv-icon name="arrow-down-fill"></uv-icon>
			</view>
		</view>
		<!-- 		<view class="user-invite-id content-item">
			<view class="content-item-title">推荐ID</view>
			<view class="content-item-main">
				<input type="text" v-model="inviteCode" placeholder="请输入推荐ID" />
			</view>
		</view> -->
	</view>
	<view class="save-btn" @click="editUserInfo">
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

	import {
		onShow,
		onLoad
	} from '@dcloudio/uni-app'

	import {
		SERVERTAPI
	} from '../../config';

	import {
		useUserStore
	} from '../../store/user';

	import {
		changeUserInfoApi,
		userInfoApi,
		telnumberApi
	} from '../../request/api';

	const userStore = useUserStore()

	onLoad(() => {
		getUserInfo()
	})

	import {
		upload
	} from '../../request/api'

	const avatar = ref("")

	const openRegionPicker = ref(false)

	const openPicker = ref(false)

	const pickerValue = ref('男')

	const regionValue = ref(['河南省', '郑州市', '金水区'])

	// const pickerData = ['男', '女']

	const nick = ref("")

	const inviteCode = ref("")

	const uploadAvatar = () => {
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
						avatar.value = res.data.urlImg
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

	const editUserInfo = () => {
		changeUserInfoApi({
			uid: userStore.uid,
			token: userStore.token,
			nickname: nick.value,
			headimg: avatar.value,
			region_province: regionValue.value[0],
			region_city: regionValue.value[1],
			region_area: regionValue.value[2]
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
			nick.value = res.data.nickname
			avatar.value = res.data.headimg
			if (res.data.region_province != "") {
				regionValue.value[0] = res.data.region_province
				regionValue.value[1] = res.data.region_city
				regionValue.value[2] = res.data.region_area
			}
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
							uid:userStore.uid,
							code:loginRes.code,
							encryptedData:encryptedData,
							iv:iv
						}).then(res => {
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
				
				button {
					padding: 0;
					box-sizing: border-box;
					width: 500rpx;
					height: 88rpx;
					line-height: 88rpx;
					background: #F6F6F6;
					border-radius: 8rpx 8rpx 8rpx 8rpx;
					text-align: left;
					padding-left: 24rpx;
					font-size: 28rpx;
				}

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