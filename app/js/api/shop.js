const ajaxData = (url,data,async = true) => {
	var ajax_data;
	$.ajax({
		url:STORESERVER + url,
		data:data,
		async:async,
		success:function(data){
			ajax_data = data.data;
		}
	});
	return ajax_data;
}

const TIMEOUT = 100

export default {
	getProducts: (cb, timeout) => setTimeout(() => {//获取购物车全部信息
		var _products = [];
		let carts = ajaxData('getCartList','',false);
		carts.map(function(elem, index) {
			carts[index]['number'] = parseInt(carts[index]['number']);
			carts[index]['goods_price'] = parseFloat(carts[index]['goods_price']);
		})
		_products = carts;
		cb(_products);
	}, timeout || TIMEOUT),

	addCartProduct: (cart_id, timeout) => setTimeout(() => {//添加购物车商品数量
	 	ajaxData('addCartProduct',{cid:cart_id})
	},timeout || TIMEOUT),

	delCartProduct: (cart_id, timeout) => setTimeout(() => {//减少购物车商品数量
	 	ajaxData('delCartProduct',{cid:cart_id})
	},timeout || TIMEOUT),

	// chooseCartProduct: (cart_id, timeout) => setTimeout(() => {//单选购物车商品
	// 	ajaxData('chooseCartProduct',{cart_id:cart_id})
	// },timeout || TIMEOUT),
	
	settleCart: (cart_ids) => {//保存选择的购物车商品
		ajaxData('settleCart',{cart_ids:cart_ids})
	},
	getCartsInfo: (cb, timeout) => setTimeout(() => {
		var _carts = [];
		let carts = ajaxData('getCartInfoById','',false);
		// console.log(carts);
		_carts = carts;
		cb(carts);
	},timeout || TIMEOUT),
}