var React = require('react');

var Cat = React.createClass({
	render:function(){
		var cat = [];
		//分类信息
		this.props.CatList.map(function(item,index){
			cat.push(
				<div key={index} className="index-cat-item">
					<img src={item.icon}/>
					<p className="text-center">{item.name}</p>
				</div>
			)
		});
		return(
			<div className="flex-box index-cat-wrap">
				{cat}
			</div>
		);
	}
});

module.exports = Cat;