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

		// 方法
		const setToken = (newToken) => {
			token.value = newToken;
		};
		const setUid = (newUid) => {
			uid.value = newUid;
		};

		// 返回状态和方法
		return {
			token,
			uid,
			userInfo,
			setToken,
			setUid,
		};
	}, {
		persist: true
	}
);