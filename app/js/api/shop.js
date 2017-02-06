const ajaxData = (url,data,async = true,type = 'get' ,callback = function(){}) => {
	var ajax_data;
	$.ajax({
		url:STORESERVER + url,
		data:data,
		async:async,
		type:type,
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
	getProducts: (cb, timeout, arg) => setTimeout(() => {//获取购物车全部信息
		var _products = [];
		let carts = ajaxData('getCartList','',false);
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
		let pdetails = ajaxData('getProDetail',{pid:pid},false);
		cb(pdetails)
	},timeout || TIMEOUT),
	//收藏商品
	collectionProduct:(pid,callback) => {
		ajaxData('collection',{pid:pid},false,'get',callback());
	},
	//添加购物车商品数量
	addCartProduct: (cart_id, timeout) => setTimeout(() => {
	 	ajaxData('addCartProduct',{cid:cart_id})
	},timeout || TIMEOUT),
	//减少购物车商品数量
	delCartProduct: (cart_id, timeout) => setTimeout(() => {
	 	ajaxData('delCartProduct',{cid:cart_id})
	},timeout || TIMEOUT),
	//删除购物车指定商品
	removeCartProById: (cart_id,callback) => {
		ajaxData('deleteCartById',{cid:cart_id},true,'get',callback())
	},
	//保存选择的购物车商品
	settleCart: (cart_ids,callback) => {
		ajaxData('settleCart',{cart_ids:cart_ids},true,'get',callback())
	},
	//加入购物车
	addCart: (pid,did,num,callback) =>{
		ajaxData('addProductToCart',{pid:pid,did:did,num:num},true,'get',callback())
	},
	//提交订单
	handleSubmitOrder:(remark,callback) =>{
		let return_data = ajaxData('orderSave',{postscript:remark},false,'post');
		if(Object.keys(return_data).length > 0){
			callback(return_data.order_sn,return_data.user_name,return_data.total_fee)
		}
	}
}