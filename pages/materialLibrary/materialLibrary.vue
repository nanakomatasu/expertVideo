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
				{{item.title}}
			</view>
		</view>
		<view class="material-content-right">
			<view class="material-content-right-tabs">
				<uv-tabs :list="tabsData" @click="click" activeStyle="color: #FAA82C" lineColor="#FAA82C"></uv-tabs>
			</view>
			<view class="material-content-right-tabs-main">
				<scroll-view scroll-y="true" class="scroll-view">
					<view class="image-content" v-if="leftTabsId == 1">
						<view class="image-item" v-for="item in imageList">
							<image :src="item" mode="aspectFill"></image>
						</view>
					</view>
					<view class="text-item" v-for="(item, index) in textList" v-if="leftTabsId == 2">
						<view class="serial-number">{{index + 1}}</view>
						<view class="text-content">{{ item.content }}</view>
						<tn-icon name="copy-fill" color="#FAA82C" size="60rpx" style="position: absolute; right: 0;"
							@click="copy(item.content)"></tn-icon>
					</view>
					<view class="music-item" v-for="(item, index) in musicList" v-if="leftTabsId == 3">
						<view class="serial-number">{{index + 1}}</view>
						<view class="text-content">
							<view class="music-name">{{item.name}}</view>
							<view class="singer">{{item.singer}}</view>
						</view>
						<tn-icon name="copy-fill" color="#FAA82C" size="60rpx" style="position: absolute; right: 0;"
							@click="copy(item.name)"></tn-icon>
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
	onLoad(() => {

	})
	const leftTabsId = ref(1)
	const leftTabsList = ref([{
			id: 1,
			title: "图片素材"
		},
		{
			id: 2,
			title: "文字素材"
		},
		{
			id: 3,
			title: "音乐素材"
		}
	])
	const currentTabIndex = ref(0)
	const tabsData = ref([{
		name: '关注',
	}, {
		name: '推荐',
	}, {
		name: '电影'
	}, {
		name: '科技'
	}, {
		name: '音乐'
	}, {
		name: '美食'
	}, {
		name: '文化'
	}, {
		name: '财经'
	}, {
		name: '手工'
	}])
	const imageList = ref([
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
		"https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
	])
	const textList = ref([{
			id: 1,
			content: "曾经以为，爱情是永不落幕的烟火， 可当烟火熄灭，只剩我在黑暗中，独 自守着回忆的残烬。"
		},
		{
			id: 2,
			content: "曾经以为，爱情是永不落幕的烟火， 可当烟火熄灭，只剩我在黑暗中，独 自守着回忆的残烬。"
		},
		{
			id: 3,
			content: "曾经以为，爱情是永不落幕的烟火， 可当烟火熄灭，只剩我在黑暗中，独 自守着回忆的残烬。"
		},
		{
			id: 4,
			content: "曾经以为，爱情是永不落幕的烟火， 可当烟火熄灭，只剩我在黑暗中，独 自守着回忆的残烬。"
		}
	])
	const musicList = ref([{
			id: 1,
			name: "爱错",
			singer: "王力宏"
		},
		{
			id: 2,
			name: "爱错",
			singer: "王力宏"
		},
		{
			id: 3,
			name: "爱错",
			singer: "王力宏"
		},
		{
			id: 4,
			name: "爱错",
			singer: "王力宏"
		},
		{
			id: 5,
			name: "爱错",
			singer: "王力宏"
		}
	])
	const backPage = () => {
		uni.navigateBack()
	}
	const click = (item) => {
		console.log('item', item);
	}
	const changeLeftTabsId = (id) => {
		leftTabsId.value = id
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
						justify-content: space-between;
						align-items: center;
						flex-wrap: wrap;

						.image-item {
							width: 220rpx;
							height: 220rpx;
							border-radius: 8rpx 8rpx 8rpx 8rpx;
							margin-bottom: 32rpx;
							overflow: hidden;

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
							height: 102rpx;
							font-size: 24rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 3;
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