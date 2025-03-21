<template>
	<view class="data-center-content">
		<uv-parse :content="nodeData"></uv-parse>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {onLoad} from '@dcloudio/uni-app'
	import {
		dataCenter,
		getTzt
	} from '../../request/api';
	onLoad(() => {
		getData()
		getTzt()
	})
	import {
		useUserStore
	} from '../../store/user';
	const userStore = useUserStore()
	const nodeData = ref("")
	const hideStatus = ref("")
	const getData = () => {
		dataCenter({
			content: "SPJC"
		}).then(res => {
			nodeData.value = res.data.content
		})
	}
	const getStatus = () => {
		getTzt().then(res => {
			hideStatus.value = res.data
			if(res.data != "1") {
				uni.setNavigationBarTitle({
					title: '视频教学'
				})
			}
		})
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 32rpx;
	}
	
	.data-center-content {
		width: 100%;
		height: 100%;
	}
</style>