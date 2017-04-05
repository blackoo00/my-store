const initialArr = {
	url:'',
	data:{},
	async:true,
	type:'get',
	server:LOGSERVER,
}

const on = true;

const ajaxData = (arr = initialArr,callback = () => {}) => {
	if(on){
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
			}
		});
		return ajax_data;
	}
}

const TIMEOUT = 100


export default {
    //手机型号
    phoneType:(type) => {
        ajaxData({
            url:'phoneTypeAjax',
            data:{phoneType:type}
        })
    },
	//搜索商品
	ProdSearch:(pid,searchkey) => {
		ajaxData({
			url:'ProdSearchAjax',
			data:{pid:pid,searchkey:searchkey},
		})
	},
	//点击商品
	ProdClick:(pid) => {
		ajaxData({
			url:'ProdClickAjax',
			data:{pid:pid},
		})
	},
	//加入购物车
	ProdAddToCart:(pid,action) => {
		ajaxData({
			url:'ProdAddToCartAjax',
			data:{pid:pid,action:action}
		})
	},
	//分类点击
	CatClick:(cid) => {
		ajaxData({
			url:'CatClickAjax',
			data:{cid:cid}
		})
	}
}
