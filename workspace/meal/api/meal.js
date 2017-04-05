// const STORESERVER="http://127.0.0.1/wg_meal/index.php/Wap/Meal/";
// const STORESERVER="http://1979.tzwg.net/index.php?g=Wap&m=Meal&a=";
// const STORESERVER="http://192.168.1.119/wg_meal/index.php?g=Wap&m=Meal&a=";
const initialArr = {
	url:'',
	data:{},
	async:false,
	type:'get',
	server:STORESERVER,
}

const ajaxData = (arr = initialArr,callback = () => {}) => {
	var ajax_data;
	arr = {...initialArr,...arr}
	$.ajax({
		url:arr.server + arr.url,
		data:arr.data,
		async:arr.async,
		type:arr.type,
		dataType:'json',
		success:function(data){
			ajax_data = data;
			if(data.data == 'scan_finish'){
				callback()
			}
		}
	});
	return ajax_data;
}

const TIMEOUT = 100


export default {
	/*服务员结算*/
	waitressPay:(tid) => {
		window.location.href = STORESERVER + 'waitressPayResult&tid=' + tid;
	},
	/*结算*/
	settleInit:(cb) => {
		let _data = ajaxData({
			url:'orderDetail',
		})
		cb(_data)
	},
	payOrder:(oid) => {
		window.location.href = STORESERVER + 'payOrder&oid=' + oid;
	},
	/*结算*/

	/*我的订单*/
	myOrdes:(cb) => {
		let _data = ajaxData({
			url:'myOrders',
		})
		cb(_data.data);
	},
	myOrdersLoadMore:(cb,start,count) => {
		let _data = ajaxData({
			url:'myOrdersLoadMore',
			data:{start:start,count:count},
		})
		cb(_data.data);
	},
	LinkOrderDetail:(oid) => {
		window.location = STORESERVER + 'orderDetailPage&oid=' + oid;
	},
	/*我的订单*/

	/*订单详情页*/
	//长连接获取订单扫码结果
	orderScanResult:(oid,callback) => {
		ajaxData({
			url:'orderScanResult',
			data:{oid:oid},
			async:true,
		},() => {callback()})

	},
	//获取扫一扫参数
	getScanConfig:(cb) => {
		let _data = ajaxData({
			url:'scanConfig',
            data:{forwardurl:String(location.href)}
		})
		cb(_data.data);
	},
	//订单详情初始化
	LinkcopyOrder:(oid) => {
		window.location = STORESERVER + 'indexPage&cpid=' + oid;
	},
	orderDetailInit:(cb) => {
		let _data = ajaxData({
			url:'orderDetail',
		})
		cb(_data.data);
	},
	//取消订单
	cancelOrder:(oid) => {
		let _data = ajaxData({
			url:'cancelOrder',
			data:{oid:oid},
			type:'post',
		})
		return _data;
	},
	//缓存订单号
	copyOrder:(oid) => {
		let _data = ajaxData({
			url:'saveCartId',
			data:{oid:oid},
		})
		return _data;
	},
	/*订单详情页*/

	/*首页*/
	//获取复制订单信息
	getCopyInfo:(cb) => {
		let _data = ajaxData({
			url:'getCopyOrderDetail',
		})
		cb(_data.data);
	},
	//搜索商品
	searchProds:(cb,key) => {
		let _data = ajaxData({
			data:{key:key},
			url:'searchProds',
		})
		cb(_data.data);
	},
	//获取分类信息
	getCatInfo:(cb,callback) => {
		let _data = ajaxData({
			url:'homeCatsApi',
		})
		cb(_data.data);
	},
	//通过分类ID查询商品信息
	getProdInfo:(cb,cid) => {
		let _data = ajaxData({
			url:'homeProd',
			data:{cid:cid},
		})
		cb(_data.data);
	},
	//获取剩余商品（除已有商品）
	getSurplusProds:(cb,cids) => {
		let _data = ajaxData({
			url:'homeProd',
			data:{cids:cids}
		})
		cb(_data.data)
	},
	//提交订单信息
	orderSubmit:(info,remark) => {
		let _data = ajaxData({
			url:'orderSave',
			type:'post',
			data:{info:info,remark:remark},
		})
		return _data.data;
	},
	LinkToMyOrders:() => {
		window.location = STORESERVER + 'myOrdersPage';
	},
	LinkcartSubmit:(oid) => {
		window.location = STORESERVER + 'orderDetailPage&oid=' + oid;
	}
	/*首页*/
}
