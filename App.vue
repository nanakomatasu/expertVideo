<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	@import '@/uni_modules/tuniaoui-vue3/index.css';

	page {
		height: 100%;
		background: linear-gradient(180deg, #E4DFD9 0%, #E7DBCD 36%, #E4D8C8 67%, #DDCAB0 100%);
		background-size: cover;
		font-size: 28rpx;
	}

	.navigation-bar-background {
		background: linear-gradient(270deg, #D9B97E 3%, #D9B97E 18%, #DFBE80 39%, #DCB375 62%, #BD954F 100%);
	}

	.text-color {
		font-size: 32rpx;
		color: #000000;
	}

	.center-box {
		width: calc(100% - 64rpx);
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.content-box {
		background: linear-gradient(180deg, #E4DFD9 0%, #E7DBCD 36%, #E4D8C8 67%, #DDCAB0 100%);
	}

	/*每个页面公共css */
</style>