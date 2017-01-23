import React,{ Component, PropTypes } from 'react';
import { Link } from 'react-router';

export const FormList = ({value,icon,href,query}) =>(
	<Link to={{pathname:href,query:{info:query}}} className="weui_cell" >
		<div className="weui_cell_hd">
			<span className={"order-icons icon-"+icon}></span>
		</div>
		<div className="weui_cell_bd weui_cell_primary">
			<p>{value}</p>
		</div>
		<div className="weui_cell_ft"></div>
	</Link>
)

export const CommonHeader = ({value}) => (
	<div className="header">
		<span>购物车({value})</span>
	</div>
)