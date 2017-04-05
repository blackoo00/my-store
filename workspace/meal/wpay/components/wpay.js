import React from 'react';
import {PageHeader,FormGroup,FormControl,Button} from 'react-bootstrap';
import classNames from 'classnames';
import styles from './style.css';
import CSSModules from 'react-css-modules';


const Wpay = ({PayOrder,refs}) => (
	<div styleName="WaitressPayWrap">
		<PageHeader styleName="WaitressPayHeader">下单结算</PageHeader>
		<FormGroup bsSize="large" styleName="WaitressPayInput">
			<input type="text" placeholder="输入餐桌号" ref={refs}/>
			<Button bsStyle="success" bsSize="large" block onClick={PayOrder}>确认下单</Button>
		</FormGroup>
	</div>
)

export default CSSModules(Wpay,styles)