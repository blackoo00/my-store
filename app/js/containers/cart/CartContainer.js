import React,{PropTypes} from 'react';
import { connect } from 'react-redux'
import CartItem from '../../components/cart/cartItem';
import * as cartsActions from '../../actions/carts';
import {hashHistory} from 'react-router';
import '../../components/cart/_cart.scss';
import Cart from '../../components/cart/index';


const CartContainer = ({...rest}) => 
{
	if(rest.products.length == 0){
		rest.init();
	}
	return(
		<Cart
			carts = {rest.carts}
			chooseAll = {rest.chooseAll}
			settle = {() => rest.settle(rest.carts.chooseId)}
		>
		{rest.products.map(product =>{
			if(product.delete == 0){
				return(
					<CartItem
						key = {product.id}
						elem = {product}
						editId = {rest.editId}
						edit = {() => rest.edit(product.id)}
						chooseById = {() => rest.chooseById(product.id)}
						addCartProductById = {() => rest.addCartProductById(product.id)}
						delCartProductById = {() => rest.delCartProductById(product.id,product.number)}
						removeCartProById = {() => rest.removeCartProById(product.id)}
						carts = {rest.carts}
					/>
				)
			}
		})}
		</Cart>
	)
}

const mapStateToProps = (state) =>({
    products: state.carts.products,
    editId: state.carts.editId,
    chooseNum: state.carts.chooseNum,
    carts:state.carts
})

const mapDispatchToProps = (dispatch) =>({
	//点击编辑按钮
	edit: (cartId) => {
	  dispatch(cartsActions.editCart(cartId))
	},
	//单选
	chooseById:(cartId) => {
		dispatch(cartsActions.chooseById(cartId))
	},
	//全选
	chooseAll:()=>{
		dispatch(cartsActions.chooseAll())
	},
	//增加购物车商品数量
	addCartProductById:(cartId)=>{
		dispatch(cartsActions.addCartProductById(cartId))
	},
	//减少购物车商品数量
	delCartProductById:(cartId,number)=>{
		dispatch(cartsActions.delCartProductById(cartId,number))
	},
	//结算
	settle:(cartIds)=>{
		dispatch(cartsActions.settleCart(cartIds))
	},
	//购物车初始化
	init:()=>{
		dispatch(cartsActions.getAllProducts(true));
	},
	removeCartProById:(cartId) => {
		dispatch(cartsActions.removeCartProById(cartId));
	}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)