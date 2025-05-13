<template>
	<view class="login-title center-box">
		{{typeStatus == 1 ? "欢迎登录" : "欢迎注册"}}
	</view>
	{{options}}
	<view class="login-avatar center-box">
		<image src="/static/login/loginIcon.png" mode="aspectFill"></image>
	</view>
	<view class="login-btn login-center-box" v-if="typeStatus == 1" @click="getPhoneNumber">
		微信一键登录
	</view>
	<view class="agreement-content login-center-box">
		<view class="status-radios" @click="changeAgreementStatus"
			:class="[agreementStatus == 1 ? 'check-status' : '']">
			<uv-icon name="checkmark" size="20rpx" color="#fff" v-if="agreementStatus == 1"></uv-icon>
		</view>
		<view class="agreement-text-content">我已阅读并同意<span class="agreement-title"
				@click="navUserAgreement">《用户协议》</span>和<span class="agreement-title" @click="navPrivacy">《隐私政策》</span>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		loginApi,
		telnumberApi
	} from '../../request/api';
	import {
		useUserStore
	} from '../../store/user';
	const userStore = useUserStore()
	const agreementStatus = ref(0)
	const typeStatus = ref(1)
	const accountNumber = ref("")
	const password = ref("")
	const inviteCode = ref("")
	const showPopup = ref(false)
	const devId = ref("")
	const options = ref("")
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	onLoad((options) => {
		if (options.q) {
			let codeStr = decodeURIComponent(options.q)
			options.value = codeStr
			console.log(options.value);
			const codeId = codeStr.match(/[?&]inviter=(\d+)/)
			devId.value = codeId ? codeId[1] : ''
			console.log(devId.value);
		}
	})

	const changeAgreementStatus = () => {
		if (agreementStatus.value == 0) {
			agreementStatus.value = 1
		} else {
			agreementStatus.value = 0
		}
	}
	const accountTypeList = ref([{
			id: 1,
			title: "登录"
		},
		{
			id: 2,
			title: "注册"
		}
	])
	const changeAccountType = (id) => {
		typeStatus.value = id
	}
	const navForget = () => {
		uni.navigateTo({
			url: '/pages/account/forget'
		})
	}
	const navPrivacy = () => {
		uni.navigateTo({
			url: '/pages/agreement/privacyPolicy'
		})
	}
	const navUserAgreement = () => {
		uni.navigateTo({
			url: '/pages/agreement/userAgreement'
		})
	}
	const getPhoneNumber = () => {
		if(agreementStatus.value == 0) {
			uni.showToast({
				icon:'none',
				title: '请阅读并同意《用户协议》和《隐私政策》'
			})
			return
		}
		uni.showLoading({
			title: '登陆中',
			mask: false
		})
		uni.login({
			success(loginRes) {
				loginApi({
					code: loginRes.code,
					pid: devId.value
				}).then(res => {
					if (res.code != 1) {
						uni.showToast({
							icon: 'none',
							title: res.info
						})
						return
					} else {
						userStore.setUid(res.data.id)
						userStore.setToken(res.data.token)
						userStore.setUserInfo(res.data)
						uni.showToast({
							icon: 'success',
							title: '登录成功'
						})
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/tabbar/index'
							})
						}, 500)
					}
				})
			}
		})
	}
</script>

<style lang="scss" scoped>
	page {
		box-sizing: border-box;
		background: #F5F6F9;
		overflow: hidden;
	}

	.login-title {
		padding-top: 48rpx;
		font-size: 48rpx;
		color: #FAA82C;
		text-align: center;
	}

	.login-avatar {
		margin-top: 100rpx;
		width: 320rpx;
		height: 320rpx;
		border-radius: 50%;
		overflow: hidden;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.agreement-title {
		color: #007AFF;
	}

	// .account-number-input {
	// 	margin-top: 76rpx;
	// }

	// .password-input {
	// 	margin-top: 24rpx;
	// }

	// .invite-code-input {
	// 	margin-top: 24rpx;
	// }

	.login-center-box {
		width: calc(100% - 140rpx);
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.forget-options {
		text-align: right;
		font-size: 24rpx;
		color: #737373;
		margin-top: 24rpx;
	}

	.login-btn {
		margin-top: 200rpx;
		height: 80rpx;
		background-color: #FAA82C;
		text-align: center;
		line-height: 80rpx;
		font-size: 32rpx;
		color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
	}

	.get-phone-btn {
		height: 80rpx;
		background-color: #FAA82C;
		text-align: center;
		line-height: 80rpx;
		font-size: 32rpx;
		color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
	}

	.register-btn {
		margin-top: 48rpx;
		height: 80rpx;
		background-color: #FAA82C;
		text-align: center;
		line-height: 80rpx;
		font-size: 32rpx;
		color: #fff;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
	}

	.agreement-content {
		margin-top: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.status-radios {
			position: relative;
			width: 25rpx;
			height: 25rpx;
			border-radius: 50%;
			border: 2rpx solid #00E000;
		}

		.check-status {
			background-color: #00E000;
		}

		.agreement-text-content {
			margin-left: 20rpx;
			font-size: 24rpx;
			color: #737373;
		}
	}

	.change-login-register {
		margin-top: 56rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #737373;

		.change-item {
			width: 100rpx;
			text-align: center;
		}

		.select-item {
			color: #FAA82C;
		}
	}
</style>