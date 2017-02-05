import shop from '../api/shop';
import * as types from '../constants/ActionTypes';
import {hashHistory} from 'react-router';

//初始化获取购物车全部信息
const receiveProducts = products => ({
  type: types.ALL_CARTS_PRODUCTS,
  products: products
})
export const getAllProducts = (arg = false) => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  },0,arg)
}
//点击编辑按钮
export const editCart = cartId =>({
	type: types.EDIT_CART,
	cartId: cartId
})
//单选购物车
const chooseCartProduct = cartId =>({
	type: types.CHOOSE_CART,
	chooseId: cartId
})
export const chooseById = (cartId) => dispatch => {
	dispatch(chooseCartProduct(cartId))
}
//全选购物车
export const chooseAll = () =>({
	type: types.CHOOSE_ALL,
})
//新增购物车商品数量
const addCartProduct = (cartId) =>({
	type: types.ADD_CART_PRODUCT,
	cartId: cartId
})

export const addCartProductById = (cartId) => dispatch =>{
	shop.addCartProduct(cartId)
	dispatch(addCartProduct(cartId))
}

//减少购物车商品数量
const delCartProduct = (cartId) =>({
	type: types.DEL_CART_PRODUCT,
	cartId: cartId
})

export const delCartProductById = (cartId,number) => dispatch =>{
	if(number > 1){
		shop.delCartProduct(cartId)
		dispatch(delCartProduct(cartId))
	}
}
//通过购物车ID删除指定购物车商品信息
const removeCartProByIdDip = (cartId) => ({
	type: types.REMOVE_CART_BY_ID,
	cartId: cartId,
})
export const removeCartProById = (cartId) => dispatch =>{
	shop.removeCartProById(cartId,function(){
		dispatch(removeCartProByIdDip(cartId));
	});
}
//结算
const settleCartDispath = (cartIds) =>({
	type: types.ASSIGN_SETTLE_CHOOSEIDS,
	cartIds: cartIds
})
export const settleCart = (cartIds) => dispatch =>{
	if(!cartIds.length){
		$.alert('请选择商品');
		return;
	}
	shop.settleCart(cartIds,function(){
		dispatch(settleCartDispath(cartIds));
		hashHistory.push({pathname:"/confirmOrderWap"});
	});
}
//提交订单
export const handleSubmitOrder = (remark) => dispatch =>{
	shop.handleSubmitOrder(remark,function(order_sn,user_name,total_fee){
		hashHistory.push({ pathname: '/Wxpay',query: {order_sn:order_sn,user_name:user_name,total_fee:total_fee} });
	})
}

