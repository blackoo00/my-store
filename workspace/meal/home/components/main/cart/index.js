import React from 'react';
import styles from './style.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

const Cart = ({list,addToCart,delCartNums,clearAll,totalFee,showlist,settle,remark,refs,cartRemak}) => {
	let myCarts = classNames({
		'myCarts':showlist,
		'myCartsHiden':!showlist
	})
	let goSettle = classNames({
		'goSettle':settle,
		'goSettleHide':!settle
	})
	return(
		<div styleName="cartListWrap">
			<section styleName={myCarts}>
				<section styleName="cartListCon">
					<header>
						<div styleName ="title">列表</div>
						<div styleName ="clear" onClick={clearAll}>清空</div>
					</header>
					<section>
						{
							list.map(item=>{
								if(item){
									return(
										<div key={item.pinfo.id} styleName="cartLists">
											<span styleName="prodName">{item.pinfo.name}</span>
											<div styleName="Shopping">
												<div styleName="del" onClick={() => delCartNums(item.pinfo)}></div>
												<div styleName="num">{item.num}</div>
												<div styleName="add" onClick={() => addToCart(item.pinfo)}></div>
											</div>
											<span styleName="prodPrice"><label>{item.pinfo.price * item.num}</label>元</span>
										</div>
									)
								}
							})
						}
					</section>
				</section>
			</section>
			<section styleName={goSettle}>
				<section styleName="cartRemak">
					<header>备注要求</header>
					<textarea placeholder="请输入您要备注的信息" value={remark} ref={refs} onChange={cartRemak}>{remark}</textarea>
				</section>
				<section styleName="cartListCon">
					<header>
						<div styleName ="title">列表</div>
					</header>
					<section>
						{
							list.map(item=>{
								if(item){
									return(
										<div styleName="cartLists" key={item.pinfo.id}>
											<span styleName="prodName">{item.pinfo.name}</span>
											<span styleName="prodNum">×<label>{item.num}</label></span>
											<span styleName="prodPrice"><label>{item.pinfo.price * item.num}</label>元</span>
										</div>
									)
								}
							})
						}
						<div styleName="cartSettle">
							小计:<label>{totalFee}</label>元
						</div>
					</section>
				</section>
			</section>
		</div>
	)
}

export default CSSModules(Cart,styles)