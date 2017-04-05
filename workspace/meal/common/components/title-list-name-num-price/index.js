import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './style.css';

const OrderProdList = ({list,total,totalFee,title}) => (
	<div styleName="OrderProdListWrap">
		{title ? <header>{title}
			{total ? <item>{total}</item> : ''}
		</header> : ''}
		<ul>
			{list.map(item => (
				<li key={item.id} styleName="OrderProdLi">
					<div styleName="OrderProdName">{item.name}</div>
					<div styleName="OrderProdNum">×{item.num}</div>
					<div styleName="OrderProdPrice"><label>{item.price}</label>元</div>
				</li>
			))}
		</ul>
		<section styleName="OrderSettle">小计：<label styleName="OrderTotalFee">{totalFee}</label>元</section>
	</div>
)

export default CSSModules(OrderProdList,styles)