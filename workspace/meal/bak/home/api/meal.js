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
			ajax_data = data.data;
			callback()
		}
	});
	return ajax_data;
}

const TIMEOUT = 100


export default {
	//获取复制订单信息
	getCopyInfo:(cb) => {
		let _data = ajaxData({
			url:'getCopyOrderDetail',
			async:false,
		})
		cb(_data);
	},
	//搜索商品
	searchProds:(cb,key) => {
		let _data = ajaxData({
			data:{key:key},
			url:'searchProds',
			async:false
		})
		cb(_data);
	},
	//获取分类信息
	getCatInfo:(cb) => {
		let _data = ajaxData({
			url:'homeCatsApi',
			async:false
		})
		cb(_data);
	},
	//通过分类ID查询商品信息
	getProdInfo:(cb,cid) => {
		let _data = ajaxData({
			url:'homeProdByCid',
			data:{cid:cid},
			async:false
		})
		cb(_data);
	},
	//提交订单信息
	orderSubmit:(info,remark) => {
		let _data = ajaxData({
			url:'orderSave',
			type:'post',
			data:{info:info,remark:remark},
			async:false,
		})
		return _data;
	}
}