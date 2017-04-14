import React from 'react';
import styles from './style.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
/*
	*参数说明
	*elem：购书车信息
	*editId：是否点击编辑按钮
	*edit：编辑时间
	*chooseById：选择事件
	*chooseId：是否选择
	*addCartProductById：添加购物车数量
	*delCartProductById：减少购物车数量
	*removeCartProById：删除购物车
 */
const CartItem = ({...rest}) => {
	let cartItemInfo1 = classNames({
		'cart-item-info-dn':rest.editId.includes(rest.elem.id),
		'cart-item-info':!rest.editId.includes(rest.elem.id)
	})
	let cartItemInfo2 = classNames({
		'cart-item-info2-dn':!rest.editId.includes(rest.elem.id),
		'cart-item-info2':rest.editId.includes(rest.elem.id)
	})
	let cartItemDel = classNames({
		'cart-item-del-dn':!rest.editId.includes(rest.elem.id),
		'cart-item-del':rest.editId.includes(rest.elem.id),
	})
	let editName = rest.editId.includes(rest.elem.id) ? "完成" : "编辑";
	return(<div styleName="cart-list">
		<div>
			<div styleName="title">
				<div styleName="title-cont">
					<div styleName="title-state">
						<div styleName="title-state-cont" onClick={rest.edit}>
							<p styleName="title-state-cont-text">{editName}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div styleName="cart-item">
			<div styleName="cart-item-cb">
				<p styleName="cart-item-cb-p">
					<input styleName="cart-item-cb-p-cb" id={"cb-" + (rest.elem.id)} type="checkbox"  checked={rest.chooseId.includes(rest.elem.id)} onChange={rest.chooseById}/>
					<label htmlFor={"cb-" + (rest.elem.id)} ></label>
				</p>
			</div>
			<div styleName="cart-item-detail" >
					<div styleName="cart-item-img-item" >
						<img styleName="cart-item-img" src={rest.elem.goods_logo}/>
					</div>
					<div styleName={cartItemInfo1}>
						<h3 styleName="cart-item-info-title">{rest.elem.goods_name}</h3>
						<div styleName="cart-item-info-sku">
							<p>{rest.elem.goods_attr}</p>
						</div>
						<div styleName="cart-item-info-pay">
							<div styleName="cart-item-info-pay-price">
								<div>
									<p styleName="cart-item-info-price">
										<span>
											{rest.elem.goods_price}
										</span>
									</p>
								</div>
								<div styleName="cart-item-info-originPrice">
									<p> <del>￥{rest.elem.market_price}</del>
									</p>
								</div>
							</div>
							<div styleName="cart-item-info-quantity">
								<p>
									<span>x</span>
									<span>{rest.elem.number}</span>
								</p>
							</div>
						</div>
					</div>
					<div styleName={cartItemInfo2}>
						<div styleName="cart-item-info2-edit-quantity">
							<p styleName="cart-item-info2-btn-minus">
								<a styleName="cart-item-info2-btn" min="1" onClick={rest.delCartProductById}></a>
							</p>
							<p styleName="cart-item-info2-btn-input">
								<input styleName="cart-item-info2-input" type="tel" value={rest.elem.number} readOnly/></p>
							<p styleName="cart-item-info2-btn-plus">
								<a styleName="cart-item-info2-plus" onClick={rest.addCartProductById}></a>
							</p>
						</div>
						<div styleName="cart-item-info2-edit-sku">
							<div>
								<p>{rest.elem.goods_attr}</p>
							</div>
						</div>
					</div>
					<div styleName={cartItemDel} onClick={rest.removeCartProById}>
						<p>删除</p>
					</div>
			</div>
		</div>
	</div>
)}
export default CSSModules(CartItem,styles);