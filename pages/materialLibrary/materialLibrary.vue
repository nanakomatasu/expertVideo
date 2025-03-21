<template>
	<view class="navigation-bar navigation-bar-background">
		<view class="navgation-bar-content text-color">
			<view style="position: absolute; left: 32rpx; top: 11rpx;"> <uv-icon name="arrow-left" color="#fff"
					@click="backPage"></uv-icon></view>
			素材动态
		</view>
	</view>
	<view class="material-content">
		<view class="material-content-left">
			<view class="material-content-left-item" v-for="item in leftTabsList" :key="item.id"
				:class="[item.id == leftTabsId ? 'select-material-content-left-item' : '']"
				@click="changeLeftTabsId(item.id)">
				<view class="left-line" v-if="item.id == leftTabsId"></view>
				{{item.name}}
			</view>
		</view>
		<view class="material-content-right">
			<view class="material-content-right-tabs">
				<uv-tabs :list="tabsData" @click="click" activeStyle="color: #FAA82C" lineColor="#FAA82C"></uv-tabs>
			</view>
			<view class="material-content-right-tabs-main">
				<tn-empty mode="data" v-if="list.length == 0"></tn-empty>
				<scroll-view scroll-y="true" class="scroll-view" refresher-enabled="true"
					@refresherrefresh="handleRefresh" :refresher-triggered="triggered"
					scrolltolower="handleScrollTolower" v-if="list.length >0">
					<view class="image-content" v-if="leftTabsId == 1">
						<view class="image-item" v-for="item in list">
							<view class="download-icon" @click="posterSure(item)">
								<tn-icon name="download" color="#FAA82C" size="50rpx"></tn-icon>
							</view>
							<image :src="item.cover" mode="aspectFill" @click="previewSingleImage(item.cover)"></image>
						</view>
						<view class="image-item" style="text-align: center; line-height: 440rpx; font-size: 28rpx;">没有更多了..</view>
					</view>
					<view class="text-item" v-for="(item, index) in list" v-if="leftTabsId == 2">
						<view class="serial-number">{{index + 1}}</view>
						<view class="text-content">{{ item.remarks }}</view>
						<tn-icon name="copy-fill" color="#FAA82C" size="60rpx" style="position: absolute; right: 0;"
							@click="copy(item.remarks)"></tn-icon>
					</view>
					<view class="music-item" v-for="(item, index) in list" v-if="leftTabsId == 3">
						<view class="serial-number">{{index + 1}}</view>
						<view class="text-content">
							<view class="music-name">{{item.title}}</view>
							<view class="singer">{{item.remarks}}</view>
						</view>
						<tn-icon name="copy-fill" color="#FAA82C" size="60rpx" style="position: absolute; right: 0;"
							@click="copy(item.title)"></tn-icon>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		topCategory,
		childrenCategory,
		materialListApi
	} from '../../request/api'
	import {
		useUserStore
	} from '../../store/user'
	import index from '../../uni_modules/uv-ui-tools'
	const userStore = useUserStore()
	onLoad(() => {
		getTop()
		getChildren()
	})
	const leftTabsId = ref("")
	const leftTabsList = ref([])
	const currentTabIndex = ref(0)
	const tabsData = ref([])
	const goodsPage = ref(1)
	const triggered = ref(false)
	const list = ref([])
	const backPage = () => {
		uni.navigateBack()
	}
	const click = (item) => {
		currentTabIndex.value = tabsData.value.findIndex(i => {
			return i.id == item.id
		})
		goodsPage.value = 1
		list.value = []
		getClassifyGods(item.id)
	}
	const changeLeftTabsId = (id) => {
		leftTabsId.value = id
		goodsPage.value = 1
		list.value = []
		getChildren(id)
	}
	const copy = (data) => {
		uni.setClipboardData({
			data: data,
			success: function() {
				uni.showToast({
					icon: "success",
					title: "复制成功"
				})
			}
		});
	}

	const getTop = () => {
		topCategory({
			uid: userStore.uid,
			token: userStore.token
		}).then(res => {
			leftTabsList.value = res.data
			leftTabsId.value = res.data[0].id
			getChildren(res.data[0].id)
		})
	}

	const getChildren = (id) => {
		childrenCategory({
			uid: userStore.uid,
			token: userStore.token,
			cate_id: id
		}).then(res => {
			tabsData.value = res.data
			getClassifyGods(res.data[currentTabIndex.value].id)
			console.log(res);
		})
	}

	const getClassifyGods = (id) => {
		uni.showLoading({
			title:'加载中'
		})
		materialListApi({
			uid: userStore.uid,
			token: userStore.token,
			cate_id: id,
			page: goodsPage.value,
		}).then(res => {
			uni.hideLoading()
			if (goodsPage.value > 1) {
				res.data.forEach(i => {
					list.value.push(i)
				})
			} else {
				list.value = res.data
			}
			if (res.data.length == 0) {
				uni.showToast({
					icon: 'none',
					title: '暂无更多内容了'
				})

			}
			triggered.value = false
		})
	}

	const handleRefresh = () => {
		if (!triggered.value) {
			triggered.value = true;
			goodsPage.value = 1
			getClassifyGodss()
		}
	}

	const handleScrollTolower = () => {
		goodsPage.value++
		getClassifyGodss()
	}

	const posterSure = (item) => {
		uni.downloadFile({
			url: item.cover,
			success: function(res) {
				console.log(res)
				wx.saveImageToPhotosAlbum({
					filePath: res.tempFilePath,
					success: function(res) {
						console.log(res)
						console.log('success')
						uni.showToast({
							icon:'success',
							title:'保存成功'
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
													icon:'success',
													title:'保存成功'
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

	const previewSingleImage = (url) => {
		uni.previewImage({
			urls: [url]
		});
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

	.material-content {
		width: 100%;
		height: calc(100vh - 196rpx);
		display: flex;
		justify-content: space-between;
		align-items: center;

		.material-content-left {
			width: 200rpx;
			height: 100%;
			background-color: #FAF7F5;

			.left-line {
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 4rpx;
				height: 28rpx;
				background-color: #FAA82C;
			}

			.material-content-left-item {
				position: relative;
				box-sizing: border-box;
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 28rpx;
				color: #4C4C4C;
			}

			.select-material-content-left-item {
				background-color: #fff;
				color: #FAA82C;
			}

		}

		.material-content-right {
			width: calc(100% - 200rpx);
			height: 100%;

			.material-content-right-tabs {
				width: 100%;
				height: 80rpx;
				background-color: #fff;
			}

			.material-content-right-tabs-main {
				width: 100%;
				height: calc(100% - 80rpx);

				.scroll-view {
					width: 100%;
					height: 100%;
					padding: 28rpx 24rpx;
					box-sizing: border-box;

					.image-content {
						box-sizing: border-box;
						padding: 0 15rpx;
						width: 100%;
						height: 100%;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-around;
						align-content: flex-start;

						.image-item {
							width: 220rpx;
							height: 440rpx;
							border-radius: 8rpx 8rpx 8rpx 8rpx;
							overflow: hidden;
							position: relative;
							margin-bottom: 22rpx;

							.download-icon {
								z-index: 1;
								position: absolute;
								right: 0;
								top: 0;
							}

							image {
								width: 100%;
								height: 100%;
							}
						}
					}

					.text-item {
						position: relative;
						width: 100%;
						display: flex;
						align-items: center;
						color: #000000;
						margin-bottom: 28rpx;

						.serial-number {
							text-align: left;
							width: 56rpx;
							font-size: 40rpx;
						}

						.text-content {
							width: 75%;
							max-height: 402rpx;
							font-size: 24rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 10;
							-webkit-box-orient: vertical;
						}
					}

					.music-item {
						position: relative;
						width: 100%;
						display: flex;
						align-items: center;
						color: #000000;
						margin-bottom: 28rpx;

						.serial-number {
							text-align: left;
							width: 56rpx;
							font-size: 40rpx;
						}

						.text-content {
							width: 75%;
							height: 72rpx;
							font-size: 28rpx;
							color: #000000;

							.music-name {
								width: 100%;
							}

							.singer {
								width: 100%;
								font-size: 20rpx;
								color: #7E7E7E;
								margin-top: 4rpx;
							}
						}
					}
				}
			}
		}
	}
</style>