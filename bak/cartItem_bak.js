import React from 'react';
import styles from './style.css';
import CSSModules from 'react-css-modules'
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
const CartItem = ({...rest}) => (
	<div className="bundlev2">
		<div className="shop">
			<div className="o-t-title-shop">
				<div className="tcont">
					<div className="state">
						<div className="state-cont" onClick={rest.edit}>
							<p>{(rest.editId.includes(rest.elem.id) ? "完成" : "编辑")}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={(rest.editId.includes(rest.elem.id) ? "edit-true" : "edit-false") + " item-list o-t-item undefined"}>
			<div className="item-cb">
				<p >
					<input id={"cb-" + (rest.elem.id)} type="checkbox" className="cb o-t-cb"  checked={rest.chooseId.includes(rest.elem.id)} onChange={rest.chooseById}/>
					<label htmlFor={"cb-" + (rest.elem.id)} ></label>
				</p>
			</div>
			<div className="item-detail" >
				<div>
					<div className="item-img" >
						<a href="//a.m.taobao.com/i538664564931.htm" >
							<img className="" src={rest.elem.goods_logo} data-src-checked="true"/></a>
					</div>
					<div className="item-info">
						<a href="//a.m.taobao.com/i538664564931.htm">
							<h3 className="title">{rest.elem.goods_name}</h3>
							<div className="sku">
								<p>{rest.elem.goods_attr}</p>
							</div>
						</a>
						<div className="pay">
							<div className="pay-price">
								<div className="price">
									<p className="o-t-price">
										<span>
											{rest.elem.goods_price}
										</span>
									</p>
								</div>
								<div className="originPrice">
									<p> <del>￥{rest.elem.market_price}</del>
									</p>
								</div>
							</div>
							<div className="quantity">
								<p>
									<span>x</span>
									<span>{rest.elem.number}</span>
								</p>
							</div>
						</div>
					</div>
					<div className="item-info2">
						<div className="edit-quantity">
							<p className="btn-minus">
								<a className="btn minus off" min="1" onClick={rest.delCartProductById}></a>
							</p>
							<p className="btn-input">
								<input type="tel" value={rest.elem.number} readOnly/></p>
							<p className="btn-plus">
								<a className="btn plus" onClick={rest.addCartProductById}></a>
							</p>
						</div>
						<div className="edit-sku">
							<div>
								<p>{rest.elem.goods_attr}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="item-del c-edit-delhide" onClick={rest.removeCartProById}>
				<p>删除</p>
			</div>
		</div>
	</div>
)
export default CartItem;