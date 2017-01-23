import React from 'react';

const CartList = ({children}) => (
	<div className="order-order">
		<div className="weui_cells_title">商品描述</div>
		<div className="weui_cells">
			<div>
				{children}
			</div>
			<div className="weui_cell">
				<div className="weui_cell_bd weui_cell_primary">
					<p>留言</p>
				</div>
				<div className="weui_cell_ft order-remark">
					<input className="amount" placeholder="选填:你填一个试试？"/>
				</div>
			</div>
		</div>
	</div>
)

export default CartList;