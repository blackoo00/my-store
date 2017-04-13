import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const myheader = ({logourl}) => (
    <div styleName = 'publicPersonalHeader'>
        <div styleName = 'publicPersonalHeaderBg'>
            <img src="http://mystore-1251466962.cosgz.myqcloud.com/hotel/personal_01.jpg"/>
        </div>
        <div styleName = 'publicPersonalHeaderLogo'>
            <img src={logourl}/>
        </div>
    </div>
)

export default CSSModules(myheader,styles)
