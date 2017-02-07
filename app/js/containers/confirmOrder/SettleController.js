import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/carts';
import * as addactions from '../../actions/address';
import CartItem from '../../components/confirmOrder/cartitem';
import {CommonHeader} from '../../components/common/weui';
import '../../components/confirmOrder/_confirmOrder.scss';
import Settle from '../../components/confirmOrder/index';
let input
const SettleController = ({getDefaultAddress,address,carts,getCartsInfo,addCartProductById,delCartProductById,handleSubmitOrder}) => {
	componentWillMount:{
		if(carts.products.length == 0){
			getCartsInfo();
		}
		if(address.length == 0){
			 getDefaultAddress();
		}
	}
	render:{
		return(
			<Settle
				refs = {node => {input = node}}
				handleSubmitOrder = {handleSubmitOrder}
				carts = {carts}
			>
				{carts.products.map(cart =>{
					if(cart.choose == 1){
						return(
							<CartItem
								key = {cart.id}
								cart = {cart}
								addCartProductById = {() => addCartProductById(cart.id)}
								delCartProductById = {() => delCartProductById(cart.id,cart.number)}
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