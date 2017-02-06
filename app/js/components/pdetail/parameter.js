import React from 'react';
const Paramenter = ({pdetails,children,handleHidePra,addNumber,delNumber,clickSubmit}) => (
	<div className="mui-cover" id="product-parameter-wrapper">
		<div className="summary">
			<div className="img">
				<img src={pdetails.pro.logo} alt=""/>
			</div>
			<div className="main">
				<div className="priceContainer">
					<span className="price">¥{pdetails.price > 0 ? pdetails.price : pdetails.pro.price}
					</span>
				</div>
				<div className="stock-control">
					<span className="stock">
						<label className="label">库存</label>
						{pdetails.pro.number}件
					</span>
					<span className="limitTip"></span>
				</div>
				<div key="choose_attr" className="sku-dtips">
					已选择:{pdetails.chooseAttr}
				</div>
			</div>
			<a className="sback" onClick={handleHidePra}></a>
		</div>
		<div className="body">
			<section id="s-decision">
				<div className="sku-control">
					<ul className="mui-sku">
						{children}
					</ul>
				</div>
				<div className="number">
					<h2>数量</h2>
					<div className="content">
						<div className="number-control">
							<div className="mui-number">
								<button type="button" className="decrease disabled" onClick={delNumber}>-</button>
								<input type="number" readOnly className="num" value={pdetails.number} min='1' max='2' step="" name="quantity"/>
								<button type="button" className="increase" onClick={addNumber}>+</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div className="option mui-flex">
			<button className="ok cell" onClick={clickSubmit}>确定</button>
			<button className="cart cell" style={{display: 'none'}}>加入购物车</button>
			<button className="buy cell" style={{display: 'none'}}>立即购买</button>
		</div>
	</div>
)
export default Paramenter;