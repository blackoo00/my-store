import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/settle';
import CartList from '../../components/confirmOrder/cartlist';
import CartItem from '../../components/confirmOrder/cartitem';

const SettleController = ({carts,getCartsInfo,settle}) => {
	componentWillMount:{
		if(settle.choose_ids.length == 0){
			getCartsInfo();
		}
	}
	render:{
		return(
			<div className="confirm-order-wrapper">
				<CartList>
					{carts.products.map(cart =>
						<CartItem
							key = {cart.id}
							cart = {cart}
						/>
					)}
				</CartList>
				<div className="order-submitOrder" id="submitOrder_1">
					<div className="mui-flex align-center" >
						<div className="cell realPay" >
							<div className="realPay-wrapper">
								<span >共</span>
								<span className="count" >{carts.total_num}</span>
								<span >件，</span>
								<span>总金额</span>
								<span className="price">
									<span className="dollar">￥</span>
									<span className="main-price" >{carts.total_fee}</span>
								</span>
							</div>
						</div>
						<div className="cell fixed action">
							<div className="mui-flex align-center" >
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
	settle:state.settle,
})
const mapDispatchToProps = (dispatch) =>({
	getCartsInfo:() => {
		dispatch(actions.getCartsInfo())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettleController);