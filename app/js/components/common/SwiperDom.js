import React from 'react';
import {swiper} from 'swiper';

class SwiperDom extends React.Component{
	componentDidUpdate(){
		new Swiper ('.swiper-container', {
		    autoplay: 2000,//可选选项，自动滑动
		    pagination:'.swiper-pagination',
		})
	}
	render(){
		let {BanList} = this.props;
		return(
			<div>
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{BanList.map(item => (
							<div key={item.id} className="swiper-slide"><img src={item.url}/></div>
						))} 
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
}

export default SwiperDom