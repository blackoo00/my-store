import * as types from '../../contants/ActionTypes';
import meal from '../../api/meal';

const settleInitDip = (data) => ({
	type:types.SETTLE_INIT,
	data:data.data
}) 

export const settleInit = () => dispatch =>{
	meal.settleInit(data => {
		dispatch(settleInitDip(data))
	})
}

export const payOrder = (oid) => dispatch => {
	meal.payOrder(oid);
}