import React from 'react';

const CartItem = ({cart}) => (
	<div className="pro-list">
		<div className="weui_cell">
			<div className="weui_cell_hd">
				<img className="product-logo" src={cart.goods_logo} alt="" width="20"/>
			</div>
			<div className="weui_cell_bd weui_cell_primary">
				<p className="order-product-name">{cart.goods_name}</p>
				<p className="sku-info">{cart.goods_attr}</p>
			</div>
			<div className="weui_cell_ft">
				<p className="main-price">￥{cart.goods_price}</p>
				<p>X{cart.number}</p>
			</div>
		</div>
		<div className="weui_cell">
			<div className="weui_cell_bd weui_cell_primary">
				<p>购买数量</p>
			</div>
			<div className="weui_cell_ft order-quantity">
				<div className="content cell">
					<a className="btn minus off"></a>
					<input className="amount" type="number" value={cart.number || ''} readOnly/>
					<a className="btn plus"></a>
				</div>
			</div>
		</div>
	</div>
)

export default CartItem;