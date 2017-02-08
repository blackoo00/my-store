import React,{PropTypes} from 'react';
import { connect } from 'react-redux'
import CartItem from '../../components/cart/cartItem';
import * as cartsActions from '../../actions/carts';
import {hashHistory} from 'react-router';
import '../../components/cart/_cart.scss';
import Cart from '../../components/cart/index';


const CartContainer = ({init,settle,products,editId,edit,chooseById,carts,chooseAll,addCartProductById,delCartProductById,removeCartProById}) => 
{
	if(products.length == 0){
		init();
	}
	return(
		<Cart
			carts = {carts}
			chooseAll = {chooseAll}
			settle = {() => settle(carts.chooseId)}
		>
		{products.map(product =>{
			if(product.delete == 0){
				return(
					<CartItem
						key = {product.id}
						elem = {product}
						editId = {editId}
						edit = {() => edit(product.id)}
						chooseById = {() => chooseById(product.id)}
						addCartProductById = {() => addCartProductById(product.id)}
						delCartProductById = {() => delCartProductById(product.id,product.number)}
						removeCartProById = {() => removeCartProById(product.id)}
						carts = {carts}
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