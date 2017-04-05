import * as types from '../../contants/ActionTypes';
import meal from '../../api/meal';

const myOrdersDip = (data) => ({
	type:types.GET_MYORDERS,
	data:data
})

export const myOrders = () => dispatch => {
	meal.myOrdes(data => {
		dispatch(myOrdersDip(data))
	})
}

const myOrdersLoadMoreDip = (data) => ({
	type:types.LOAD_MORE_ORDERS,
	data:data
})

export const myOrdersLoadMore = (start, nomore, count) => dispatch => {
	if(!nomore){
		meal.myOrdersLoadMore(data => {
			dispatch(myOrdersLoadMoreDip(data))
		},start,count)
	}
}

//跳转到订单详情
export const OrderDetail = (oid) => dispatch => {
	meal.LinkOrderDetail(oid);
}