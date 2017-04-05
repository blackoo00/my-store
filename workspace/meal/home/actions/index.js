import * as types from '../../contants/ActionTypes';
import meal from '../../api/meal';
import log from '../../api/log';

const getCopyInfoDip = data => ({
	type:types.GET_COPY_ORDER_DETAIL,
	data:data
})

export const getCopyInfo = () => dispatch =>{
	meal.getCopyInfo(data => {
		if(data.length != 0 ){
			dispatch(getCopyInfoDip(data));
		}
	})
}
//跳转到我的订单
export const LinkToMyOrders = () => dispatch =>{
	meal.LinkToMyOrders();
}

//保存手机型号
export const phoneType = (type) => dispatch => {
    log.phoneType(type)
}
