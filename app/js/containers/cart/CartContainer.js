import React,{PropTypes} from 'react';
import { connect } from 'react-redux'
import CartList from '../../components/cart/cartList';
import CartItem from '../../components/cart/cartItem';
import Footer from '../../components/cart/footer';
import * as cartsActions from '../../actions/carts';
import {CommonHeader} from '../../components/common/weui';
import {hashHistory} from 'react-router';

const CartContainer = ({init,settle,products,editId,edit,chooseById,carts,chooseAll,addCartProductById,delCartProductById}) => 
{
	componentWillMount:{
		if(products.length == 0){
			init();
		}
	}
	render:return(
	<div className="cart-wrap">
		<CommonHeader
			value = {carts.chooseNum}
		/>
		<div className="cartbuy">
			<CartList>
					{products.map(product =>
						<CartItem
							key = {product.id}
							elem = {product}
							editId = {editId}
							edit = {() => edit(product.id)}
							chooseById = {() => chooseById(product.id)}
							addCartProductById = {() => addCartProductById(product.id)}
							delCartProductById = {() => delCartProductById(product.id)}
							carts = {carts}
						/>
					)}
			</CartList>
			<Footer
				carts = {carts}
				chooseAll = {chooseAll}
				settle = {() => settle(carts.chooseId)}
			/>
		</div>
	</div>
)}

const mapStateToProps = (state) =>({
    products: state.carts.products,
    editId: state.carts.editId,
    chooseNum: state.carts.chooseNum,
    carts:state.carts
})

const mapDispatchToProps = (dispatch) =>({
	edit: (cartId) => {
	  dispatch(cartsActions.editCart(cartId))
	},
	chooseById:(cartId) => {
		dispatch(cartsActions.chooseById(cartId))
	},
	chooseAll:()=>{
		dispatch(cartsActions.chooseAll())
	},
	addCartProductById:(cartId)=>{
		dispatch(cartsActions.addCartProductById(cartId))
	},
	delCartProductById:(cartId)=>{
		dispatch(cartsActions.delCartProductById(cartId))
	},
	settle:(cartIds)=>{
		//hashHistory.push({pathname:"/confirmOrderWap",query:{cart_id:'7,8'}});
		dispatch(cartsActions.settleCart(cartIds))
	},
	init:()=>{
		dispatch(cartsActions.getAllProducts());
	}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)