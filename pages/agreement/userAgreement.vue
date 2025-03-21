<template>
	<view class="data-center-content">
		<rich-text :nodes="nodeData"></rich-text>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {onLoad} from '@dcloudio/uni-app'
	import {
		dataCenter
	} from '../../request/api';
	onLoad(() => {
		getData()
	})
	import {
		useUserStore
	} from '../../store/user';
	const userStore = useUserStore()
	const nodeData = ref("")
	const getData = () => {
		dataCenter({
			content: "YHXY"
		}).then(res => {
			nodeData.value = res.data.content
		})
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 32rpx;
	}
</style>