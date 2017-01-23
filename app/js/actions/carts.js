import shop from '../api/shop';
import * as types from '../constants/ActionTypes';
import {hashHistory} from 'react-router';

const receiveProducts = products => ({
  type: types.ALL_CARTS_PRODUCTS,
  products: products
})
//初始化获取购物车全部信息
export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
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

export const delCartProductById = (cartId) => dispatch =>{
	shop.delCartProduct(cartId)
	dispatch(delCartProduct(cartId))
}
//结算
const settleCartDispath = (cartIds) =>({
	type: types.ASSIGN_SETTLE_CHOOSEIDS,
	cartIds: cartIds
})
export const settleCart = (cartIds) => dispatch =>{
	shop.settleCart(cartIds);
	dispatch(settleCartDispath(cartIds));
	hashHistory.push({pathname:"/confirmOrderWap",query:{cart_id:'7,8'}});
}

