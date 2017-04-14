import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/carts';
import * as addactions from '../../actions/address';
import CartItem from '../../components/confirmOrder/cartitem';
import {CommonHeader} from '../../components/common/weui';
import '../../components/confirmOrder/_confirmOrder.scss';
import Settle from '../../components/confirmOrder/index';
let input
const SettleController = ({...rest}) => {
	componentWillMount:{
		if(rest.carts.products.length == 0){
			rest.getCartsInfo();
		}
		if(rest.address.length == 0){
			 rest.getDefaultAddress();
		}
	}
	render:{
		return(
			<Settle
				refs = {node => {input = node}}
				handleSubmitOrder = {rest.handleSubmitOrder}
				carts = {rest.carts}
				address={rest.address}
			>
				{rest.carts.products.map(cart =>{
					if(cart.choose == 1){
						return(
							<CartItem
								key = {cart.id}
								cart = {cart}
								addCartProductById = {() => rest.addCartProductById(cart.id)}
								delCartProductById = {() => rest.delCartProductById(cart.id,cart.number)}
							/>
						)
					}
				}
				)}
			</Settle>
		)
	}
}

const mapStateToProps = (state) =>({
	carts:state.carts,
	address:state.address.defaultAdd
})
const mapDispatchToProps = (dispatch) =>({
	getCartsInfo:() => {
		dispatch(actions.getAllProducts())
	},
	addCartProductById:(cartId)=>{
		dispatch(actions.addCartProductById(cartId))
	},
	delCartProductById:(cartId,number)=>{
		dispatch(actions.delCartProductById(cartId,number))
	},
	//提交订单
	handleSubmitOrder:()=>{
		dispatch(actions.handleSubmitOrder(input.value))
	},
	//获取默认地址
	getDefaultAddress:() => {
		dispatch(addactions.getDefaultAddress())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettleController);