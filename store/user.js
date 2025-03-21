import {
	defineStore
} from "pinia";
import {
	ref
} from "vue";
export const useUserStore = defineStore(
	"user",
	() => {
		const token = ref("");
		const uid = ref("");
		const userInfo = ref({});
		const currentVideo = ref("")
		const taskVideoCode = ref("")
		const orderNumber = ref("")
		// 方法
		const setToken = (newToken) => {
			token.value = newToken;
		};
		const setUid = (newUid) => {
			uid.value = newUid;
		};
		const setUserInfo = (userInfo) => {
			userInfo.value = userInfo
		};
		const setCurrentVideo = (video) => {
			currentVideo.value = video
		}
		const setTaskVideoCode = (code) => {
			taskVideoCode.value = code
		}
		const setOrderNumber = (orderSn) => {
			orderNumber.value = orderSn
		}

		// 返回状态和方法
		return {
			token,
			uid,
			userInfo,
			currentVideo,
			taskVideoCode,
			setTaskVideoCode,
			setCurrentVideo,
			orderNumber,
			setOrderNumber,
			setToken,
			setUid,
			setUserInfo
		};
	}, {
		persist: true
	}
);