<template>
	<view class="navigation-bar">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"><uv-icon name="arrow-left" color="#1A1A1A"
					@click="backPages"></uv-icon></view>
			我的团队
		</view>
	</view>
	<view class="team-card center-box">
		<view class="card-title">我的团队</view>
		<view class="card-total">
			<view class="card-total-item">
				<view class="card-total-item-title">团队总人数</view>
				<view class="card-total-item-data">{{teamInfo.total_number_of_my_team}}</view>
			</view>
			<view class="card-total-item">
				<view class="card-total-item-title">直推总人数</view>
				<view class="card-total-item-data">{{teamInfo.total_number_of_my_direct_push}}</view>
			</view>
		</view>
		<!-- 		<view class="card-efficient">
			<view class="card-efficient-item">
				<view class="card-efficient-item-title">团队有效人数</view>
				<view class="card-efficient-item-data">29</view>
			</view>
			<view class="card-efficient-item">
				<view class="card-efficient-item-title">我的团队业绩</view>
				<view class="card-efficient-item-data">2090.00</view>
			</view>
			<view class="card-efficient-item">
				<view class="card-efficient-item-title">直推有效人数</view>
				<view class="card-efficient-item-data">1</view>
			</view>
		</view> -->
	</view>
	<view class="switch-tabs center-box">
		<view class="switch-tab-item" v-for="item in switchTabsList" :key="item.id"
			:class="[selectTabId == item.id ? 'select-tab-item' : '']" @click="changeTabId(item.id)">{{item.title}}
		</view>
	</view>
	<scroll-view scroll-y="true" class="scroll-view center-box">
		<view class="team-user">
			<view class="team-user-info-item" v-for="item in teamList">
				<view class="first-line">
					<view class="user-avatar">
						<image :src="item.headimg" mode="">
						</image>
					</view>
					<view class="user-info">
						<view class="user-nick">
							{{item.nickname}}
							<span style="margin-left: 15rpx;">{{item.phone}}</span>
						</view>
						<view class="zhitui-user" v-if="selectTabId == 1">
							由{{item.pid_user.nickname}}直推</view>
						<view class="join-time">{{item.create_at}}</view>
					</view>
					<view class="user-level" v-if="item.ievel == 0">普通用户</view>
					<view class="user-level" v-if="item.ievel == 1">创客</view>
					<view class="user-level" v-if="item.ievel == 2">推客</view>
					<view class="user-level" v-if="item.ievel == 3">团长</view>
					<view class="user-level" v-if="item.ievel == 4">服务商</view>
				</view>
				<view class="second-line">
					<view class="second-line-content">
						<view class="second-line-item">
							<view class="second-line-item-title">团队总人数</view>
							<view class="second-line-item-data">{{item.total_number_of_my_team}}</view>
						</view>
						<view class="second-line-item">
							<view class="second-line-item-title">直推总人数</view>
							<view class="second-line-item-data">{{item.total_number_of_my_direct_push}}</view>
						</view>
					</view>
					<view class="status-lights">
						<view class="user-status" v-if="item.light_status == 3">
							<image src="/static/team/red.png" mode=""></image>
						</view>
						<view class="user-status" v-if="item.light_status == 2">
							<image src="/static/team/green.png" mode=""></image>
						</view>
						<view class="user-status" v-if="item.light_status == 1">
							<image src="/static/team/yellow.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		myteamApi
	} from '../../request/api';
	import {
		useUserStore
	} from '../../store/user';
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	const userStore = useUserStore()
	const selectTabId = ref(1)
	const switchTabsList = [{
			id: 1,
			title: "团队"
		},
		{
			id: 2,
			title: "直推"
		}
		// {
		// 	id: 3,
		// 	title: "间推"
		// }
	]
	const teamList = ref([])
	const teamInfo = ref({})
	onLoad(() => {
		getTeamList()
	})

	const changeTabId = (id) => {
		selectTabId.value = id
		getTeamList()
	}


	const backPages = () => {
		uni.navigateBack()
	}

	const getTeamList = () => {
		myteamApi({
			uid: userStore.uid,
			token: userStore.token,
			type: selectTabId.value
		}).then(res => {
			teamInfo.value = res.data
			teamList.value = res.data.array
			console.log(teamList.value);
		})
	}
</script>

<style lang="scss" scoped>
	page {
		background: linear-gradient(180deg, #E4DFD9 0%, #E7DBCD 36%, #E4D8C8 67%, #DDCAB0 100%);
		background-size: cover;
	}

	.navigation-bar {
		background: transparent;
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
			color: #1A1A1A;
		}
	}

	.team-card {
		box-sizing: border-box;
		// height: 348rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		background: linear-gradient(270deg, #D9B97E 3%, #D9B97E 18%, #DFBE80 39%, #DCB375 62%, #BD954F 100%);
		color: #fff;
		padding: 32rpx;

		.card-title {
			font-size: 32rpx;
			font-weight: bold;
		}

		.card-total {
			width: 100%;
			box-sizing: border-box;
			padding: 0 32rpx;
			font-size: 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 108rpx;
			margin-top: 32rpx;

			.card-total-item {
				height: 108rpx;
				display: flex;
				flex-direction: column;
				align-items: center;

				.card-total-item-title {}

				.card-total-item-data {
					margin-top: 20rpx;
				}
			}
		}

		.card-efficient {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 24rpx;

			.card-efficient-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;


				.card-efficient-item-data {
					margin-top: 8rpx;
				}
			}
		}
	}

	.switch-tabs {
		margin-top: 32rpx;
		display: flex;
		align-items: center;

		.switch-tab-item {
			margin-right: 20rpx;
			padding: 14rpx 78rpx;
			border-radius: 60rpx 60rpx 60rpx 60rpx;
			border: 2rpx solid #FAA82C;
			text-align: center;
			font-size: 28rpx;
			color: #FAA82C;
		}

		.select-tab-item {
			background: #FAA82C;
			color: #fff;
		}
	}

	.scroll-view {
		box-sizing: border-box;
		padding: 32rpx 0;
		height: 63vh;

		.team-user {
			width: 100%;

			.team-user-info-item {
				width: 100%;
				padding-bottom: 32rpx;
				border-bottom: 1px dashed #FAA82C;
				margin-bottom: 32rpx;
				font-weight: bold;

				.first-line {
					display: flex;
					align-items: center;
					position: relative;

					.user-avatar {
						width: 104rpx;
						height: 104rpx;
						border-radius: 50%;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.user-info {
						margin-left: 24rpx;
						font-size: 24rpx;

						.user-nick {
							color: #1A1A1A;
							display: flex;
							align-items: center;
						}

						.join-time {
							margin-top: 24rpx;
							color: #787878;
						}
					}

					.user-level {
						position: absolute;
						right: 0;
						width: 144rpx;
						height: 46rpx;
						border-radius: 44rpx 44rpx 44rpx 44rpx;
						background: #FAA82C;
						font-size: 24rpx;
						color: #fff;
						text-align: center;
						line-height: 46rpx;
					}
				}

				.second-line {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 24rpx;
					padding: 0 20rpx;
					box-sizing: border-box;
					position: relative;

					.second-line-content {
						display: flex;
						justify-content: center;
						flex: 1;

						.second-line-item {
							color: #1A1A1A;
							font-size: 24rpx;
							width: 200rpx;
							text-align: center;

							.second-line-item-title {
								color: #666;
								font-size: 22rpx;
								margin-bottom: 8rpx;
							}

							.second-line-item-data {
								font-size: 28rpx;
								font-weight: bold;
								color: #333;
							}
						}
					}

					.status-lights {
						position: absolute;
						right: 60rpx;
						top: 50%;
						transform: translateY(-50%);
						display: flex;
						align-items: center;

						.user-status {
							width: 28rpx;
							height: 28rpx;
							margin-left: 8rpx;

							image {
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
		}
	}
</style>