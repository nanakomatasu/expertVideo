<template>
	<view class="content-box">
		<view class="navigation-bar navigation-bar-background">
			<view class="navgation-bar-content text-color">
				商学院
			</view>
		</view>
		<view class="search-box center-box">
			<view class="search-content">
				<tn-search-box v-model="searchValue" shape="square" @input="searchInputEvent"
					@search="searchBtnClickEvent" :border="false" search-button-text-color="#FFFFFF"
					search-button-bg-color="#FAA82C" />
			</view>
		</view>
		<view class="switch-tab-content">
			<view class="switch-item" v-for="item in switchList" :key="item.id"
				:class="[item.id == switchId ? 'select-switch-item' : '']" @click="changeSwitchId(item)">
				{{item.title}}
			</view>
		</view>
		<view class="course-list">
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="course-item" v-for="item in courseList" :key="item.id" @click="navCourseDetail(item)">
					<view class="course-cover">
						<view class="play-icon"><uv-icon name="play-circle" class="play-icon" size="50rpx" color="#fff"
								v-if="switchId == 2"></uv-icon></view>
						<image :src="item.cover" mode="aspectFill"></image>
					</view>
					<view class="course-info">
						<view class="course-title">{{item.title}}</view>
						<view class="course-introduction">{{item.introduction}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const switchId = ref(1)
	const switchList = ref([{
			id: 1,
			title: "图文"
		},
		{
			id: 2,
			title: "视频"
		}
	])
	const courseList = ref([{
			id: 1,
			title: "高等数学",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
			introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
		},
		{
			id: 2,
			title: "高等数学",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
			introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
		},
		{
			id: 3,
			title: "高等数学",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
			introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
		},
		{
			id: 4,
			title: "高等数学",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
			introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
		},
		{
			id: 5,
			title: "高等数学",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
			introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
		},
		{
			id: 6,
			title: "高等数学",
			cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
			introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
		},
	])
	const changeSwitchId = (item) => {
		switchId.value = item.id
	}
	const navCourseDetail = (item) => {
		uni.navigateTo({
			url: "/pages/course/courseDetail?id=" + item.id + "&type=" + switchId.value
		})
	}
</script>

<style lang="scss" scoped>
	.navigation-bar {
		overflow: hidden;
		width: 100%;
		height: 196rpx;

		.navgation-bar-content {
			margin-top: 88rpx;
			width: 100%;
			height: 108rpx;
			text-align: center;
		}

		.text-color {
			color: #fff;
		}
	}

	.search-box {
		padding: 8rpx 20rpx;
		width: 100%;
		background-color: #fff;

		.search-content {
			width: 100%;
			background-color: #F6F6F6;
		}
	}

	.switch-tab-content {
		box-sizing: border-box;
		width: 100%;
		height: 104rpx;
		background-color: #fff;
		margin: 8rpx 0 0 0;
		padding: 10rpx 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.switch-item {
			cursor: pointer;
			width: 49%;
			height: 84rpx;
			line-height: 84rpx;
			background-color: #fff;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			text-align: center;
			font-size: 32rpx;
			color: #1A1A1A;
		}

		.select-switch-item {
			background-color: #FFD293;
			color: #fff;
		}
	}

	.course-list {
		width: 100%;
		height: 70vh;
		background-color: #fff;
		margin-top: 16rpx;

		.scroll-view {
			width: 100%;
			height: 100%;

			.course-item {
				width: 100%;
				padding: 24rpx 32rpx;
				display: flex;
				justify-content: space-between;

				.course-cover {
					position: relative;
					width: 120rpx;
					height: 120rpx;
					border-radius: 8rpx 8rpx 8rpx 8rpx;
					background-color: red;

					.play-icon {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						z-index: 2;
					}

					image {
						width: 100%;
						height: 100%;
					}
				}

				.course-info {
					width: calc(100% - 120rpx - 24rpx);
					height: 120rpx;

					.course-title {
						font-size: 28rpx;
						color: #1A1A1A;
					}

					.course-introduction {
						margin-top: 12rpx;
						font-size: 24rpx;
						color: #4C4C4C;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
</style>