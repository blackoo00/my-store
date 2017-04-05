import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import classNames from 'classnames';
import iScroll from "../main/iscroll";

class Footer extends React.Component{
	componentDidMount(){
	    document.getElementById('toCartWrap').ontouchmove=function(e){
		    e.preventDefault();
		}
	}
	render(){
		let {num,totalFee,showCartList,cartSettle,settle,onSubmit} = this.props;
		let cartIcon = classNames({
			'cartIcon': num != 0,
			'cartIconHide': num == 0
		})
		let cartSubmit = classNames({
			'cartSubmitChoose': num != 0,
			'cartSubmit': num == 0
		})
		return(
			<div styleName="toCartWrap" id="toCartWrap">
				<item styleName={cartIcon}>
					<span styleName="cart" onClick={showCartList}>
						<span styleName="cartNums">{num}</span>
					</span>
					<span styleName="totalFee">￥<label>{totalFee}</label></span>
				</item>
				{settle ? <item styleName="orderSettle" onClick={onSubmit}>点菜下单</item> : <item styleName={cartSubmit} onClick={() => {cartSettle(num)}}>选好了</item> }
			</div>
		)
	}
}

export default CSSModules(Footer,styles)
