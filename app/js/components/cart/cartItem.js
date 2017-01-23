import React from 'react';

const CartItem = ({elem,editId,edit,chooseById,carts,addCartProductById,delCartProductById}) => (
	<div className="bundlev2">
		<div className="shop">
			<div className="o-t-title-shop">
				<div className="tcont">
					<div className="state">
						<div className="state-cont" onClick={edit}>
							<p>{(editId.includes(elem.id) ? "完成" : "编辑")}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={(editId.includes(elem.id) ? "edit-true" : "edit-false") + " item-list o-t-item undefined"}>
			<div className="item-cb">
				<p >
					<input id={"cb-" + (elem.id)} type="checkbox" className="cb o-t-cb"  checked={carts.chooseId.includes(elem.id)} onChange={chooseById}/>
					<label htmlFor={"cb-" + (elem.id)} ></label>
				</p>
			</div>
			<div className="item-detail" >
				<div>
					<div className="item-img" >
						<a href="//a.m.taobao.com/i538664564931.htm" >
							<img className="" src={elem.goods_logo} data-src-checked="true"/></a>
					</div>
					<div className="item-info">
						<a href="//a.m.taobao.com/i538664564931.htm">
							<h3 className="title">{elem.goods_name}</h3>
							<div className="sku">
								<p>{elem.goods_attr}</p>
							</div>
						</a>
						<div className="pay">
							<div className="pay-price">
								<div className="price">
									<p className="o-t-price">
										<span>
											{elem.goods_price}
										</span>
									</p>
								</div>
								<div className="originPrice">
									<p> <del>￥{elem.market_price}</del>
									</p>
								</div>
							</div>
							<div className="quantity">
								<p>
									<span>x</span>
									<span>{elem.number}</span>
								</p>
							</div>
						</div>
					</div>
					<div className="item-info2">
						<div className="edit-quantity">
							<p className="btn-minus">
								<a className="btn minus off" min="1" onClick={delCartProductById}></a>
							</p>
							<p className="btn-input">
								<input type="tel" value={elem.number} readOnly/></p>
							<p className="btn-plus">
								<a className="btn plus" onClick={addCartProductById}></a>
							</p>
						</div>
						<div className="edit-sku">
							<div>
								<p>{elem.goods_attr}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="item-del c-edit-delhide">
				<p>删除</p>
			</div>
		</div>
	</div>
)
export default CartItem;