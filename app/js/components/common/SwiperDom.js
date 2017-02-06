var React = require('react');
var swiper = require('swiper');

var SwiperDom = React.createClass({
	// componentWillMount:function(){
 //        //this.addCssByLink('css/swiper-3.4.0.min.css');
 //        //this.addJsByScript('js/swiper-3.4.0.jquery.min.js');
	// },
	// addCssByLink:function(url){
	//     var doc=document;  
	//     var link=document.createElement("link");  
	//     link.setAttribute("rel", "stylesheet");  
	//     link.setAttribute("href", url);  
	  
	//     var heads = doc.getElementsByTagName("head");  
	//     if(heads.length)  
	//         heads[0].appendChild(link);  
	//     else  
	//         doc.documentElement.appendChild(link);  
	// },
	// addJsByScript:function(url){
	// 	var script = document.createElement('script');
 //        script.src = url;
 //        document.body.appendChild(script);
	// },
	componentDidUpdate:function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    autoplay: 2000,//可选选项，自动滑动
		    pagination:'.swiper-pagination',
		})
	},
	render:function(){
		var ban = [];
		this.props.BanList.map(function(item,index){
			ban.push(
				<div key={index} className="swiper-slide"><img src={item.url}/></div>
			);
		})
		return(
			<div>
				<div className="swiper-container">
				  <div className="swiper-wrapper">
				    {ban}
				  </div>
				  <div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
})

module.exports = SwiperDom;