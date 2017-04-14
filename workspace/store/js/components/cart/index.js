import React from 'react';
import {CommonHeader} from '../common/weui';
import Footer from './footer';
import {Link} from 'react-router';

const Cart = ({children,carts,chooseAll,settle}) => (
	<div className="cart-wrap">
		<CommonHeader
			value={'购物车(' + carts.chooseNum + ')'}
			back = {true}
			pathname = {'/'}/>
		<div className="cartbuy">
			{children}
			<Footer
				carts = {carts}
				chooseAll = {chooseAll}
				settle = {settle}
			/>
		</div>
	</div>
)

export default Cart