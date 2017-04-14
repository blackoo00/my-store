import React from 'react';
import {CommonHeader} from '../common/weui';

const AddAddress = ({handleAddAddress,name,tel,address}) =>(
	<div className="my-address-add-wrap">
		<CommonHeader value="管理收货地址"/>
		<div className="weui_cells weui_cells_access">
		  <a className="weui_cell" href="javascript:;">
		    <div className="weui_cell_bd weui_cell_primary">
		      <p><input className="weui_input" ref={name} type="text" placeholder="姓名"/></p>
		    </div>
		    <div className="weui_cell_ft"></div>
		  </a>
		  <a className="weui_cell" href="javascript:;">
		    <div className="weui_cell_bd weui_cell_primary">
		      <p><input className="weui_input" ref={tel} type="tel" placeholder="电话"/></p>
		    </div>
		    <div className="weui_cell_ft"></div>
		  </a>
		  <a className="weui_cell" href="javascript:;">
		    <div className="weui_cell_bd weui_cell_primary">
		      <p><input className="weui_input" ref={address} type="text" placeholder="详细地址"/></p>
		    </div>
		    <div className="weui_cell_ft"></div>
		  </a>
		</div>
		<button id="actionBtn" onClick={handleAddAddress}>保存地址</button>
	</div>
)

export default AddAddress