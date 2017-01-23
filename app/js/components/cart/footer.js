import React from 'react';

const Footer = ({carts,chooseAll,settle}) =>(
	<div className="footer">
		<div className="f-fx">
			<div>
				<div className="ft-cb">
					<p>
						<input id="cb-footer" type="checkbox" className="cb o-t-cb" onChange={chooseAll} checked={carts.chooseAll}/>
						<label htmlFor="cb-footer"></label>
					</p>
				</div>
				<div className="qx">全选</div>
				<div className="pay">
					<div>
						<div>
							<span className="hj">合计：</span>
							<p className="o-t-price" data-symbol="￥">
								<span>{carts.totalFee}</span>
							</p>
						</div>
						<p>不含运费</p>
					</div>
				</div>
				<div className="btn" onClick={settle}>
					<p>
						<span>结算({carts.chooseNum})</span>
					</p>
				</div>
			</div>
		</div>
	</div>
)
export default Footer;


