<template>
	<view class="course-cover">
		<image :src="courseDetail.cover" mode="aspectFill" v-if="courseType == '1' || hideStatus == '1'"></image>
		<video :src="courseDetail.video" v-if="courseType == '2' && hideStatus != '1'"></video>
	</view>
	<view class="course-detail">
		<rich-text :nodes="courseDetail.content"></rich-text>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		BusinessCollegeDetailApi,
		getTzt
	} from '../../request/api';
	import {
		useUserStore
	} from '../../store/user';

	onLoad((options) => {
		courseId.value = options.id
		courseType.value = options.type
		getDetail(options.id)
		getT()
	})
	const hideStatus = ref('1')
	const userStore = useUserStore()
	const courseId = ref("")
	const courseType = ref("")
	const courseDetail = ref({})
	const getDetail = (id) => {
		BusinessCollegeDetailApi({
			uid: userStore.uid,
			token: userStore.token,
			id: id
		}).then(res => {
			courseDetail.value = res.data
		})
	}
	const getT = () => {
		getTzt().then(res => {
			hideStatus.value = res.data
		})
	}
</script>

<style lang="scss">
	.course-cover {
		width: 100%;
		height: 560rpx;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}

		video {
			width: 100%;
			height: 100%;
		}
	}

	.course-detail {
		margin-top: 40rpx;
		padding: 0 32rpx;
		background: transparent;
	}
</style>