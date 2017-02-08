import React from 'react';
import {Link} from 'react-router';
import {CommonHeader} from '../common/weui';

const AddList = ({children}) => (
	<div className="my-order-list">
		<CommonHeader value="管理收货地址" back={true} pathname={'/confirmOrderWap'}/>
		<div className="weui_cells weui_cells_access" style={{"marginTop":0}}>
			<a className="weui_cell choose-address-item" href="javascript:;">
				<div className="weui_cell_bd weui_cell_primary">
					<p>选择代收货地址</p>
				</div>
				<div className="weui_cell_ft"></div>
			</a>
		</div>
		<ul id="addressList">
			{children}
		</ul>
		<Link to="/AddAddress">
			<button id="actionBtn">新增收货地址</button>
		</Link>
	</div>
)

export default AddList