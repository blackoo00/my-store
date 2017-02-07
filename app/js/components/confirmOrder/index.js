import React from 'react';
import {CommonHeader} from '../../components/common/weui';
import {Link} from 'react-router';


const Settle = ({children,refs,handleSubmitOrder,carts}) => (
	<div className="confirm-order-wrapper">
		<CommonHeader value="下单结算"/>
		<div className="order-address weui_cells weui_cells_access">
			<Link className="weui_cell" to={{pathname:'/'}}>
				<div className="weui_cell_hd">
					<div className="address-icon iconfont">&#xe617;</div>
				</div>
				<div className="weui_cell_bd weui_cell_primary">
					<p>收货人:</p>
					<p>
						
					</p>
				</div>
				<div className="weui_cell_ft"></div>
			</Link>
		</div>
		<div className="order-order">
			<div className="weui_cells_title">商品描述</div>
			<div className="weui_cells">
				{children}
				<div className="weui_cell">
					<div className="weui_cell_bd weui_cell_primary">
						<p>留言</p>
					</div>
					<div className="weui_cell_ft order-remark">
						<input ref={refs} className="amount" placeholder="选填:你填一个试试？"/>
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

export default Settle;