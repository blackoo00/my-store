import React from 'react';
import styles from './style.css';
import CSSModules from 'react-css-modules';

const Footer = ({carts,chooseAll,settle}) =>(
	<div styleName="cart-item-f-fx">
		<div styleName="cart-item-ft-cb">
			<p>
				<input id="cb-footer" type="checkbox" onChange={chooseAll} checked={carts.chooseAll}/>
				<label htmlFor="cb-footer"></label>
			</p>
		</div>
		<div styleName="cart-item-qx">全选</div>
		<div styleName="cart-item-pay">
			<div>
				<div>
					<span styleName="cart-item-hj">合计：</span>
					<span styleName="cart-item-total-fee">{carts.totalFee}</span>
				</div>
				<p>不含运费</p>
			</div>
		</div>
		<div styleName="cart-item-btn" onClick={settle}>
			<p>
				<span>结算({carts.chooseNum})</span>
			</p>
		</div>
	</div>
)
export default CSSModules(Footer,styles)


