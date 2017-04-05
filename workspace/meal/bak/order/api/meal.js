const STORESERVER="http://127.0.0.1/wg_meal/index.php/Wap/Store/";
const initialArr = {
	url:'',
	data:{},
	async:true,
	type:'get',
	server:STORESERVER,
}

const ajaxData = (arr = initialArr,callback = function(){}) => {
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
			callback()
		}
	});
	return ajax_data;
}

const TIMEOUT = 100


export default {
	//订单详情初始化
	orderDetailInit:(cb) => {
		let _data = ajaxData({
			url:'orderDetail',
			async:false
		})
		cb(_data.data);
	},
	//取消订单
	cancelOrder:(oid) => {
		let _data = ajaxData({
			url:'cancelOrder',
			data:{oid:oid},
			type:'post',
			async:false
		})
		return _data;
	},
	//缓存订单号
	copyOrder:(oid) => {
		let _data = ajaxData({
			url:'saveCartId',
			data:{oid:oid},
			async:false,
		})
		return _data;
	}
}