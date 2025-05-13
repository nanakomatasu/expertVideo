import {
	SERVERTAPI
} from "../config";
import { useUserStore } from "../store/user";
const userStore = useUserStore()

// 处理需要登录的情况
const handleLoginRequired = () => {
	return new Promise((resolve) => {
		uni.showModal({
			title: '请先去登陆吧',
			success(res) {
				if (res.confirm) {
					uni.navigateTo({
						url: "/pages/account/login"
					});
				} else {
					return
				}
				resolve();
			}
		});
	});
};

// 处理错误提示
const showErrorToast = (message) => {
	uni.showToast({
		icon: 'none',
		title: message
	});
};

export const request = (options = {}) => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('token');
		const header = {
			'Content-Type': 'application/json',
			...options.header,
		};

		if (token) {
			header['Authorization'] = `Bearer ${token}`;
		}
		uni.request({
			url: SERVERTAPI + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			timeout: 100000,
			header: header,
			success: async (res) => {
				if (res.statusCode === 200) {
					// 处理需要登录的情况
					if (res.data.code === 300 || res.data.code === 100) {
						await handleLoginRequired();
						reject(res);
						return;
					}

					// 处理业务错误
					if (res.code === 0) {
						showErrorToast(res.info);
						reject(res);
						return;
					}

					// 成功情况
					resolve(res.data);
				} else {
					// 处理未授权情况
					if (res.statusCode === 401) {
						await handleLoginRequired();
					} else {
						showErrorToast(`请求失败，状态码：${res.statusCode}`);
					}
					reject(res);
				}
			},
			fail: (err) => {
				showErrorToast('网络请求失败');
				console.log(SERVERTAPI + options.url, err);
				reject(err);
			},
		});
	});
};