var React = require('react');
import { Link } from 'react-router';


var YourLike = React.createClass({
	render:function(){
		var prolist = [];
		this.props.ProList.map(function(item,index){
			prolist.push(
				<Link key={index} to={{ pathname: '/pdetail', query: { id: item.id } }}>
					<div key={index} className="u-lk-pro-item">
						<img src={item.logo}/>
						<p className="pro-name">{item.name}</p>
						<p className="pro-price">￥{item.price}</p>
					</div>
				</Link>
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