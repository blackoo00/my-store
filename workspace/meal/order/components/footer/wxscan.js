import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './style.css';

const WxScan = ({wxscan}) =>(
	<div styleName="scanCodeWrap" onClick={wxscan}>
		<div styleName="scanCode"></div>
	</div>
)

export default CSSModules(WxScan,styles)