import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './style.css';

const Detail = ({orderid,company,time,orderScanResult,table_id,wxscan}) => (
	<section styleName="detailWrap">
		<section styleName="detailIcon"></section>
		<section styleName="orderDetail">
			<div>
				{/*<span styleName="orderNo">
					NO:1#
				</span> | */}
				<span>
					流水:{orderid}
				</span>
			</div>
			<div>
                {table_id == 0 ? company:"桌位号#"+table_id}
                {table_id == 0 ? "":<span onClick={wxscan} styleName="changeTable">(更换座位)</span>}
			</div>
			<div>
				<span>{time}</span>
			</div>
		</section>
		<section onClick={orderScanResult} styleName="orderQrcode" className="open-popup" data-target="#half">

		</section>
	</section>
)

export default CSSModules(Detail,styles)
