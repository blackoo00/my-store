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
	//获取默认地址
	getDefaultAddress:(cb, timeout, callback) => setTimeout(() => {
		let _address = ajaxData({server:ADDRESSSERVER,url:'getDefaultAddress'});
		cb(_address);
	},timeout || TIMEOUT),
	//获取购物车全部信息
	getProducts: (cb, timeout, arg) => setTimeout(() => {
		var _products = [];
		let carts = ajaxData({url:'getCartList',async:false});
		carts.map(function(elem, index) {
			carts[index]['number'] = parseInt(carts[index]['number']);
			carts[index]['goods_price'] = parseFloat(carts[index]['goods_price']);
			if(arg){
				carts[index]['choose'] = 0;
			}
		})
		_products = carts;
		cb(_products);
	}, timeout || TIMEOUT),
	//获取商品详情
	getProDetails:(cb,pid,timeout) => setTimeout(() => {
		let pdetails = ajaxData({url:'getProDetail',data:{pid:pid},async:false});
		cb(pdetails)
	},timeout || TIMEOUT),
	//收藏商品
	collectionProduct:(pid,callback) => {
		ajaxData({url:'collection',data:{pid:pid},async:false},callback());
	},
	//添加购物车商品数量
	addCartProduct: (cart_id, timeout) => setTimeout(() => {
	 	ajaxData({url:'addCartProduct',data:{cid:cart_id}})
	},timeout || TIMEOUT),
	//减少购物车商品数量
	delCartProduct: (cart_id, timeout) => setTimeout(() => {
	 	ajaxData({url:'delCartProduct',data:{cid:cart_id}})
	},timeout || TIMEOUT),
	//删除购物车指定商品
	removeCartProById: (cart_id,callback) => {
		ajaxData({url:'deleteCartById',data:{cid:cart_id}},callback())
	},
	//保存选择的购物车商品
	settleCart: (cart_ids,callback) => {
		ajaxData({url:'settleCart',data:{cart_ids:cart_ids}},callback())
	},
	//加入购物车
	addCart: (pid,did,num,callback) =>{
		ajaxData({url:'addProductToCart',data:{pid:pid,did:did,num:num}},callback())
	},
	//提交订单
	handleSubmitOrder:(remark,callback) =>{
		let return_data = ajaxData({url:'orderSave',data:{postscript:remark},async:false,type:'post'});
		if(Object.keys(return_data).length > 0){
			callback(return_data.order_sn,return_data.user_name,return_data.total_fee)
		}
	},
}