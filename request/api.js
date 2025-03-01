import {
	request
} from './request.js';

//发送短信
export const sendMessage = (params) => {
	return request({
		url: 'api/Register/send',
		method: 'POST',
		data: params,
	});
};

//注册
export const registerApi = (params) => {
	return request({
		url: 'api/Register/register',
		method: 'POST',
		data: params,
	});
};

//登录
export const loginApi = (params) => {
	return request({
		url: 'api/Register/land',
		method: 'POST',
		data: params,
	});
};

//商品分类
export const indexCatrgory = (params) => {
	return request({
		url: 'api/Goods/get_concentration',
		method: 'POST',
		data: params,
	});
};

//精选商品
export const selectedProducts = (params) => {
	return request({
		url: 'api/Goods/get_concentration_goods',
		method: 'POST',
		data: params,
	});
};

//获取商品详情
export const goodsDetail = (params) => {
	return request({
		url: 'api/Goods/get_goods_detail',
		method: 'POST',
		data: params
	})
}

//商品收藏/取消收藏
export const collectionGoods = (params) => {
	return request({
		url: 'api/Index/goods_collection',
		method: 'POST',
		data: params
	})
}

//商品分类
export const goodsClassify = (params) => {
	return request({
		url: 'api/Goods/get_category',
		method: 'POST',
		data: params
	})
}

//获取子分类
export const goodsChildrenClassify = (params) => {
	return request({
		url: 'api/Goods/get_sub_category',
		method: 'POST',
		data: params
	})
}

//获取分类下的商品
export const classifyGoods = (params) => {
	return request({
		url: 'api/Goods/get_category_goods',
		method: 'POST',
		data: params
	})
}
