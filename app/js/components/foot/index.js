var React = require('react');
import { Link } from 'react-router';

var Foot = React.createClass({
	render:function(){
		return(
			<div className="footer weui_tabbar">
				<a href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
					<div className="weui_tabbar_icon">
					  <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
					</div>
					<p className="weui_tabbar_label">首页</p>
				</a>
				<div className="weui_tabbar_item">
					<Link to="/Search">
					    <div className="weui_tabbar_icon">
					      	<img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_msg.png"/>
					    </div>
					    <p className="weui_tabbar_label">活动</p>
				    </Link>
				</div>
				<div className="weui_tabbar_item">
					<Link to="/Cart">
						<div className="weui_tabbar_icon">
						  <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_article.png"/>
						</div>
						<p className="weui_tabbar_label">购物车</p>
					</Link>
				</div>
				<div className="weui_tabbar_item">
					<Link to="/My">
						<div className="weui_tabbar_icon">
						  <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_cell.png"/>
						</div>
						<p className="weui_tabbar_label">我</p>
					</Link>
				</div>
			</div>
		);
	}
});

module.exports = Foot;