import React from 'react';
import SwiperDom from '../../components/common/SwiperDom';
import Spec from '../../containers/pdetails/SpectController';

const Pdetail = ({pdetails,handleCollection,addToCart,buyNow}) => (
	<div className="pro-detail-wrapper">
		<div className="pro-banner">
			<SwiperDom BanList = {pdetails.ban}/>
		</div>
		<div className="pro-detail">
			<div className="page-module-item">
				<div className="pro-name">{pdetails.pro.name}</div>
				<div className="pro-price">￥{pdetails.pro.price}</div>
			</div>
			<div className="page-module-item">
				<div dangerouslySetInnerHTML={{__html: pdetails.pro.desc}} />
			</div>
		</div>
		<div className="bottom_bar">
			<div className="bottom_bar_icon service">客服</div>
			<div className={(pdetails.col ?"active":"") + " bottom_bar_icon collection iconfont"} onClick={handleCollection}>
			{(pdetails.col ? '已收藏' : '收藏')}
			</div>
			<div className="sys_button cart" onClick={addToCart}>加入购物车</div>
			<div className="sys_button buy" onClick={buyNow}>立即购买</div>
		</div>
		<Spec/>
	</div>
)

export default Pdetail;