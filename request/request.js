import {
	SERVERTAPI
} from "../config";

export const request = (options = {}) => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('token'); // 假设 token 存储在本地存储中

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
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res.data); 
				} else {
					if (res.statusCode === 401) {
						uni.showToast({
							icon: 'none',
							title: '登录已过期，请重新登录',
						});
						uni.navigateTo({
							url: '/pages/login/login',
						});
					} else {
						uni.showToast({
							icon: 'none',
							title: `请求失败，状态码：${res.statusCode}`,
						});
					}
					reject(res);
				}
			},
			fail: (err) => {
				uni.showToast({
					icon: 'none',
					title: '网络请求失败',
				});
				console.log(SERVERTAPI + options.url, err);
				reject(err);
			},
		});
	});
};