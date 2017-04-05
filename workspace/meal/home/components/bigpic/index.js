import React from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const BigPic = ({name,price,logourl,show,closeProdPic}) => {
	let teststyles = {zIndex:20};
	let BigPicWrap = classNames({
		BigPicWrap:show,
		BigPicWrapHide:!show
	})
	return(
		<div styleName={BigPicWrap} style = {teststyles}>
			<div styleName="BigPicWrapBG"></div>
			<div styleName="PicBox">
				<section styleName="BigPicImg">
					<img src={logourl}/>
				</section>
				<section styleName="BigPicDetail">
					<item styleName="BigPicName">{name}</item>
					<item styleName="BigPicPirce">{price}</item>
				</section>
				<span styleName="BigPicClose" onClick={closeProdPic}>×</span>
			</div>
		</div>
	)
}

export default CSSModules(BigPic,styles)