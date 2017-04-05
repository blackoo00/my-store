import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Main = ({children}) => (
	<div styleName="mainWrap">
		{children}
	</div>
)

export default CSSModules(Main,styles)