const STORESERVER="http://127.0.0.1/my-store/index.php/Home/Store/",
ADDRESSSERVER="http://127.0.0.1/my-store/index.php/Home/Address/",
MYSERVER="http://127.0.0.1/my-store/index.php/Home/My/";
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
	//首页初始化
	indexInit:(cb) => {
		let data = {
			url:'index',
			async:false
		}
		let _data = ajaxData(data);
		cb(_data);
	},
	//搜索页滚动加载更多
	getMorePro:({cb,count,load_num}) => {
		let data = {
			url:'scrollLoadPro',
			async:false,
			data:{count:count,load_num:load_num}
		}
		let _pros = ajaxData(data)
		cb(_pros);
	},
	//获取商品列表
	getProList:(cb,timeout) => {
		let _prolist = ajaxData({
			url:'proList',
			async:false
		})
		cb(_prolist);
	},
	//添加地址
	addAddress:(cb,name,tel,address,callback) => {
		let _address = ajaxData({
			server:ADDRESSSERVER,
			url:'add',
			data:{consignee:name,tel:tel,address:address},
			type:'post',
			callback:callback(),
			async:false,
		})
		cb(_address);
	},
	//设置默认地址
	setDefaultAddress:(aid,callback) => {
		ajaxData({
			server:ADDRESSSERVER,
			url:'choose',
			data:{id:aid},
			callback:callback()
		})
	},
	//获取个人地址列表
	getMyAddresses:(cb,timeout) => setTimeout(() => {
		let _addresses = ajaxData({server:ADDRESSSERVER,async:false,url:'showList'});
		cb(_addresses);
	},timeout || TIMEOUT),
	//获取默认地址
	getDefaultAddress:(cb, timeout, callback) => setTimeout(() => {
		let _address = ajaxData({server:ADDRESSSERVER,url:'getDefaultAddress',async:false});
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