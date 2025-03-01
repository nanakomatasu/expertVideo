import {
	createPinia
} from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
// 创建 pinia 实例
const pinia = createPinia();
const persistedState = createPersistedState({
	storage: {
		getItem: (key) => uni.getStorageSync(key),
		setItem: (key, value) => uni.setStorageSync(key, value),
		removeItem: (key) => uni.removeStorageSync(key),
	},
});
// 使用持久化存储插件
pinia.use(persistedState);
// 默认导出
export default pinia;