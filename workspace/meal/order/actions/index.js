import * as types from '../../contants/ActionTypes';
import meal from '../../api/meal';

const orderDetailInitDip = (data) => ({
	type:types.GET_ORDER_DETAILS,
	data:data
})

export const orderDetailInit = () => dispatch =>{
	meal.orderDetailInit(data => {
		dispatch(orderDetailInitDip(data));
	})
}

//取消订单
const cancelOrderDip = () => ({
	type:types.CANCEL_ORDER
})

export const cancelOrder = (oid) => dispatch =>{
	let re = meal.cancelOrder(oid);
	if(re.status == 1){
		dispatch(cancelOrderDip());
	}else{
		$.alert(re.info)
	}
}

//复制订单
export const copyOrder = (oid) => dispatch =>{
	meal.LinkcopyOrder(oid);
}

//获取扫码结果
const orderScanResultDip = () => ({
	type:types.SCAN_FINISHED
})

export const orderScanResult = (oid) => dispatch => {
	meal.orderScanResult(oid,() => {
		dispatch(orderScanResultDip());
		dispatch(toggleQrcode());
	})
}

//显示二维码
export const toggleQrcode = () => ({
	type:types.TOGGLE_QRCODE
})
