import React from 'react';
import SwiperDom from '../common/SwiperDom';
import YourLike from './yourlike';
import Cat from './cat';
import Foot from '../foot/index';
import styles from './style.css';
import CSSModules from 'react-css-modules';

const Index = ({...rest}) => (
	<div styleName="indexWrap">
		<div styleName="indexItem">
			<SwiperDom BanList={rest.ban}/>
			<Cat CatList={rest.cat}/>
		</div>
		<YourLike 
			ProList={rest.pro} 
		/>
		<Foot/>
	</div>
)

export default CSSModules(Index,styles)