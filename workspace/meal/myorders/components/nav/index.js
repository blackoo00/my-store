import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './style.css';

const Nav = () => (
	<div styleName="nav">
		<item>点菜单</item>
	</div>
)

export default CSSModules(Nav,styles)