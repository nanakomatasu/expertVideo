<template>
	<view class="course-cover">
		<image src="https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg" mode="aspectFill"
			v-if="courseType == '1'"></image>
		<video src="" v-if="courseType == '2'"></video>
	</view>
	<view class="course-detail">
		<rich-text :nodes="defaultContent"></rich-text>
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
	onLoad((options) => {
		console.log(options);
		courseId.value = options.id
		courseType.value = options.type
	})
	const courseId = ref("")
	const courseType = ref("")
	const defaultContent = ref(`
		<p>露从今夜白，月是故乡明</p>
		<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
	`)
</script>

<style lang="scss">
	.course-cover {
		width: 100%;
		height: 560rpx;
		background-color: red;
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