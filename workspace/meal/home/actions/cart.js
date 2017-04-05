import * as types from '../../contants/ActionTypes';
import meal from '../../api/meal';

export const toggleCart = () => ({
	type:types.TOGGLE_CART,
})

const clearCartDip = () => ({
	type:types.CLEAR_ALL
})

export const clearCart = () => dispatch =>{
	dispatch(clearCartDip());
}
export const showCartList = () => ({
	type:types.SHOW_CART_LIST
})

export const cartSettle = () => ({
	type:types.CART_SETTLE
})

export const cartSubmit = (clist,remark) => dispatch => {
	let data_list = [];
	clist.map(item => {
		if(item){
			data_list.push({'pid':item.pinfo.id,'num':item.num})
		}
	})
	let re = meal.orderSubmit(JSON.stringify(data_list),remark);
	if(re != -1){
		$.alert('下单成功');
		meal.LinkcartSubmit(re);
	}else{
		dispatch(clearCartDip());
		$.alert('下单失败');
	}
}

//留言
export const cartRemak = (remark) => ({
	type:types.CART_REMARK,
	remark:remark
})