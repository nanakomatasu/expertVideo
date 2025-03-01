<template>
	<view class="login-title center-box">
		{{typeStatus == 1 ? "欢迎登录" : "欢迎注册"}}
	</view>
	<view class="account-number-input login-center-box">
		<uv-input customStyle="background-color: #F8F9FD; height: 88rpx; padding: 0 24rpx;" placeholder="请输入账号"
			maxlength="11" type="number" shape="square " border="none" v-model="accountNumber" prefixIcon="account">
			<!-- 			<template v-slot:prefix>
				<uv-text text="+86" margin="0 3px 0 0" type="tips"></uv-text>
			</template> -->
		</uv-input>
	</view>
	<view class="password-input login-center-box">
		<uv-input customStyle="background-color: #F8F9FD; height: 88rpx; box-sizing: border-box; padding: 0 24rpx;"
			v-model="password" placeholder="请输入密码" shape="square" border="none" prefixIcon="eye"
			prefixIconStyle="font-size: 22px;color: #909399" password="true" />
	</view>
	<view class="invite-code-input login-center-box" v-if="typeStatus == 2">
		<uv-input customStyle="background-color: #F8F9FD; height: 88rpx; box-sizing: border-box; padding: 0 24rpx;"
			v-model="inviteCode" placeholder="请输入邀请码" shape="square" border="none" prefixIcon="file-text"
			prefixIconStyle="font-size: 22px;color: #909399" password="true" />
	</view>
	<view class="forget-options login-center-box" v-if="typeStatus == 1" @click="navForget">
		忘记密码?
	</view>
	<view class="login-btn login-center-box" v-if="typeStatus == 1">
		登录
	</view>
	<view class="register-btn login-center-box" v-if="typeStatus == 2">
		注册
	</view>
	<view class="agreement-content login-center-box">
		<view class="agreement-status">
			<view class="status-radios" @click="changeAgreementStatus"><uv-icon name="checkmark" size="20rpx"
					style="position: absolute; top: 55%; left: 50%; transform: translate(-50%, -50%);" color="#fff"
					v-if="agreementStatus == 1" :class="[agreementStatus == 1 ? 'check-status' : '']"></uv-icon></view>
		</view>
		<view class="agreement-content">已阅读并同意以下用户注册协议《隐私权政策》和《注册相关协议》</view>
	</view>
	<view class="change-login-register login-center-box">
		<view class="change-item" v-for="item in accountTypeList" :class="[item.id == typeStatus ? 'select-item' : '']"
			@click="changeAccountType(item.id)">
			{{item.title}}
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const agreementStatus = ref(0)
	const typeStatus = ref(1)
	const accountNumber = ref("")
	const password = ref("")
	const inviteCode = ref("")
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
</script>

<style lang="scss" scoped>
	page {
		background: #F5F6F9;
		overflow: hidden;
	}

	.login-title {
		font-size: 48rpx;
		color: #FAA82C;
		text-align: center;
		margin-top: 200rpx;
	}

	.account-number-input {
		margin-top: 76rpx;
	}

	.password-input {
		margin-top: 24rpx;
	}

	.invite-code-input {
		margin-top: 24rpx;
	}

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
		margin-top: 48rpx;
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
		align-items: end;
		height: 68rpx;

		.agreement-status {
			box-sizing: border-box;
			padding: 9rpx 4rpx;
			width: 40rpx;
			height: 68rpx;

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
		}

		.agreement-content {
			width: calc(100% - 40rpx);
			height: 100%;
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