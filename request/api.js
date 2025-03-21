import {
	request
} from './request.js';

export const upload = "api/Upload/Uploads"

//登录
export const loginApi = (params) => {
	return request({
		url: 'api/Register/wxlogin',
		method: 'POST',
		data: params,
	});
};

//获取手机号
export const telnumberApi = (params) => {
	return request({
		url: 'api/Register/wxtel',
		method: 'POST',
		data: params,
	});
};

//数据中心
export const dataCenter = (params) => {
	return request({
		url: 'api/Index/get_data_center',
		method: 'POST',
		data: params,
	});
};

//获取素材顶级分类
export const topCategory = (params) => {
	return request({
		url: 'api/SourceMaterial/getMaterialCategory',
		method: 'POST',
		data: params,
	});
};

//获取子级分类
export const childrenCategory = (params) => {
	return request({
		url: 'api/SourceMaterial/getMaterialSubCategory',
		method: 'POST',
		data: params,
	});
};

//获取素材列表
export const materialListApi = (params) => {
	return request({
		url: 'api/SourceMaterial/getMaterialList',
		method: 'POST',
		data: params,
	});
};

//获取个人信息
export const userInfoApi = (params) => {
	return request({
		url: 'api/Index/get_user_info',
		method: 'POST',
		data: params,
	});
};

//获取商学院数据
export const BusinessCollegeApi = (params) => {
	return request({
		url: 'api/BusinessCollege/getBusinessCollege',
		method: 'POST',
		data: params,
	});
};

//获取商学院详情
export const BusinessCollegeDetailApi = (params) => {
	return request({
		url: 'api/BusinessCollege/getBusinessCollegeDetail',
		method: 'POST',
		data: params,
	});
};

//修改个人信息
export const changeUserInfoApi = (params) => {
	return request({
		url: 'api/Index/modify_personal_information',
		method: 'POST',
		data: params,
	});
};

//首页视频教程列表
export const teachVideoList = (params) => {
	return request({
		url: 'api/VideoTutorial/getVideoTutorial',
		method: 'POST',
		data: params,
	});
};

//获取视频教程详情
export const teachVideoDetail = (params) => {
	return request({
		url: 'api/VideoTutorial/getVideoTutorialDetail',
		method: 'POST',
		data: params,
	});
};

//我的团队
export const myteamApi = (params) => {
	return request({
		url: 'api/Index/my_team',
		method: 'POST',
		data: params,
	});
};

//获取任务列表
export const taskListApi = (params) => {
	return request({
		url: 'api/Chuchuang/get_my_task',
		method: 'POST',
		data: params,
	});
};

//创建任务详情订单
export const createTask = (params) => {
	return request({
		url: 'api/Chuchuang/create_order',
		method: 'POST',
		data: params,
	});
};

//获取公告列表
export const noticeList = (params) => {
	return request({
		url: 'api/index/get_notice_list',
		method: 'POST',
		data: params,
	});
};

//获取公告详情
export const noticeDetail = (params) => {
	return request({
		url: 'api/index/get_notice_detail',
		method: 'POST',
		data: params,
	});
};

//获取滚动通知
export const rollingNotice = (params) => {
	return request({
		url: 'api/index/get_rolling_notice',
		method: 'POST',
		data: params,
	});
};

//完成订单
export const completeTaskApi = (params) => {
	return request({
		url: 'api/Chuchuang/check_order_payment',
		method: 'POST',
		data: params,
	});
};

//隐藏视频教学
export const getTzt = (params) => {
	return request({
		url: 'api/index/getzt',
		method: 'POST',
		data: params,
	});
};

//获取用户邀请码
export const getInviterCode = (params) => {
	return request({
		url: 'api/Index/user_invitation_code',
		method: 'POST',
		data: params,
	});
};

//退单
export const tuidanList = (params) => {
	return request({
		url: 'api/index/get_refund_list',
		method: 'POST',
		data: params,
	});
};

//退单消息通知
export const tuidanNotify = (params) => {
	return request({
		url: 'api/index/get_message_notification',
		method: 'POST',
		data: params,
	});
};

//获取一条最新消息通知
export const newNotify = (params) => {
	return request({
		url: 'api/index/get_newest_unread_message',
		method: 'POST',
		data: params,
	});
};