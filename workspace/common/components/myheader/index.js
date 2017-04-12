import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import bg1 from './bg1.jpg';

const myheader = ({logourl}) => (
    <div styleName = 'publicPersonalHeader'>
        <div styleName = 'publicPersonalHeaderBg'>
            <img src={bg1}/>
        </div>
        <div styleName = 'publicPersonalHeaderLogo'>
            <img src={logourl}/>
        </div>
    </div>
)

export default CSSModules(myheader,styles)
