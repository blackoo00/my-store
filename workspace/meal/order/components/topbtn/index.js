import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import cannel from './cannel.png';
import untrue from './untrue.png';
import truep from './true.png';
import styles from './style.css';

const TopBtn = ({cancelOrder,copyOrder,status}) => {
	let cancelClass = classNames({
		'cancel': status != 2,
		'cancelHide': status == 2,
	})
	return(
		<div styleName="topBtnWrap">
			<item styleName="topIcon">
			{
				status == 2 ? <img src={cannel}/> : status == 1? <img src={truep}/> : <img src={untrue}/>
			}
			</item>
			{
				status == 1 ? '' : <a href="javascript:;" styleName={cancelClass} onClick={cancelOrder}>取消订单</a>
			}

			<a href="javascript:;" styleName="copy" onClick={copyOrder}>复制订单</a>
		</div>
	)
}
export default CSSModules(TopBtn,styles);