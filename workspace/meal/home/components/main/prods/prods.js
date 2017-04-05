import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import iScroll from "../iscroll-probe";
import classNames from 'classnames';

class Prods extends React.Component{
	componentDidMount() {
		let wh = window.innerHeight - 100;
		this.refs.prodsScroller.style.height = wh + "px";
        // this.iScrollInstance = new iScroll('#prodsScroller', { mouseWheel: true });
    }
    componentDidUpdate() {
       	// this.iScrollInstance.refresh();
    }
    render(){
    	const {list,addToCart,chooses,delCartNums,showProdPic,searchkey} = this.props;
    	return(
			<div styleName="mainProds" id="prodsScroller" ref="prodsScroller">
				<ul>
					{
						list.map(item => {
							let showCartBtn = classNames({
								'Shopping': chooses[item.id],
								'ShoppingHide': !chooses[item.id]
							})
							return(
								<li key={item.id}>
									<section styleName="prodItem">
										<div>
											<img styleName="prodImg" src={item.logourl} onClick={() => {showProdPic(item,searchkey)}}/>
										</div>
										<div styleName="prodDetail">
											<div styleName="homeProdName">{item.name}</div>
											<div styleName="prodDesc">{item.des}</div>
											<div styleName="HomeProdPrice"><label>{item.price}</label>元/份</div>
											<div styleName={showCartBtn}>
												<div styleName="del" onClick={() => delCartNums(item)}></div>
												<div styleName="num">{chooses[item.id]}</div>
												<div styleName="add" onClick={() => addToCart(item,searchkey)}></div>
											</div>
										</div>
									</section>
								</li>
							)
						})
					}
				</ul>
			</div>
    	)
    }
}

export default CSSModules(Prods,styles)
