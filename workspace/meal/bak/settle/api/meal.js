const STORESERVER = "http://127.0.0.1/wg_meal/index.php/Wap/Store/";
const initialArr = {
	url:'',
	data:{},
	async:false,
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
	settleInit:(cb) => {
		let _data = ajaxData({
			url:'orderDetail',
		})
		cb(_data)
	}
}