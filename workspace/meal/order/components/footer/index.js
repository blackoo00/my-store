import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './style.css';

const OrderFooter = ({children}) => (
	<div styleName="OrderFooterWrap">
		{children}
	</div>
)


export default CSSModules(OrderFooter,styles)