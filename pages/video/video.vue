<template>
	<video :src="userStore.currentVideo" style="width: 100%; height: 100%;" v-if="hideStatus != '1'"></video>
	<tn-empty mode="data" color="#333" v-if="hideStatus == 1">
		<template #tips>暂未开放</template>
	</tn-empty>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import { getTzt } from '../../request/api';
	import { useUserStore } from '../../store/user';
	import {onLoad, onShow} from '@dcloudio/uni-app'
	onShow(() => {
		getT()
	})
	const hideStatus = ref("")
	const userStore = useUserStore()
	const videoUrl = ref("")
	const getT = () => {
		getTzt().then(res => {
			hideStatus.value = res.data
		})
	}
</script>

<style lang="scss">
</style>