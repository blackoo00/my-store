import React from 'react';

const AddItem = ({elem,handleChoose}) => (
	<li className={(elem.choose == 1 ? "active" : "") + " address-row"} onClick={handleChoose}>
		<div className="font0-75">
			<label>收货人:</label>
			<label>{elem.consignee}</label>
			<label className="address-tel">{elem.tel}</label>
		</div>
		<div>
			<label>收货地址:</label>
			<label>{elem.address}</label>
		</div>
		<span className="right-icons"> 
			<i className="iconfont icon-check"></i> 
			<i className="iconfont icon-right"></i>
		</span>
	</li>
)

export default AddItem