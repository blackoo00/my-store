var React = require('react');
import { Link,hashHistory } from 'react-router';


var YourLike = React.createClass({
	LinkTo(){
		hashHistory.push({pathname:'/pdetail',query:{id:1}})
	},
	render:function(){
		var prolist = [];
		var _self = this;
		this.props.ProList.map(function(item,index){
			prolist.push(
				<div key={index} className="u-lk-pro-item" onClick={_self.LinkTo}>
					<img src={item.logo}/>
					<p className="pro-name">{item.name}</p>
					<p className="pro-price">￥{item.price}</p>
				</div>
			);
		})
		return(
			<div className="page-module-item">
				<div className="your-like-products" id="your-like-products" ref="youlike">
					{prolist}
				</div>
			</div>
		);
	}
});

module.exports = YourLike;