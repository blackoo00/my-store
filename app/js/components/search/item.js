import React from 'react';
import {Link} from 'react-router';

const proItem = ({elem,ProDetails}) => (
	<li onClick={ProDetails}>
		<div className="list-item">
			<div className="p">
				<img className="p-pic" src={elem.logo}/>
				<span className="flag c-icon-pt"></span>
			</div>
			<div className="d">
				<h3 className="d-title">{elem.name}</h3>
				<p className="d-price"> <em className="h"><span className="price-icon">¥</span>
						<span className="font-num">{elem.price}</span></em>  <del><span className="price-icon">¥</span>
						<span className="font-num">{elem.market_price}</span></del> 
				</p>
				<div className="d-main">
					<p className="d-freight">{(elem.mail_price > 0 ? elem.mail_price : '免运费')}</p>
					<p className="d-num">
						<span className="font-num">{elem.sales_count}</span>
						人付款
					</p>
					<p className="d-area">台州</p>
				</div>
			</div>
		</div>
		<div className="icons-group"></div>
	</li>
)

export default proItem