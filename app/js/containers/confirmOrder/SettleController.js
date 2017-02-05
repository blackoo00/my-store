import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/carts';
import CartList from '../../components/confirmOrder/cartlist';
import CartItem from '../../components/confirmOrder/cartitem';
import {CommonHeader} from '../../components/common/weui';
let input
const SettleController = ({carts,getCartsInfo,addCartProductById,delCartProductById,handleSubmitOrder}) => {
	componentWillMount:{
		if(carts.products.length == 0){
			getCartsInfo();
		}
	}
	render:{
		return(
			<div className="confirm-order-wrapper">
				<CommonHeader value="下单结算"/>
				<div className="order-order">
					<div className="weui_cells_title">商品描述</div>
					<div className="weui_cells">
						<CartList>
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
						</CartList>
						<div className="weui_cell">
							<div className="weui_cell_bd weui_cell_primary">
								<p>留言</p>
							</div>
							<div className="weui_cell_ft order-remark">
								<input ref={node => {input = node}} className="amount" placeholder="选填:你填一个试试？"/>
							</div>
						</div>
					</div>
				</div>
				<div className="order-submitOrder" id="submitOrder_1">
					<div className="mui-flex align-center" >
						<div className="cell realPay" >
							<div className="realPay-wrapper">
								<span >共</span>
								<span className="count" >{carts.totalNum}</span>
								<span >件，</span>
								<span>总金额</span>
								<span className="price">
									<span className="dollar">￥</span>
									<span className="main-price" >{carts.totalFee}</span>
								</span>
							</div>
						</div>
						<div className="cell fixed action">
							<div className="mui-flex align-center" onClick={handleSubmitOrder}>
								<span title="提交订单">提交订单</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
	carts:state.carts,
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
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettleController);