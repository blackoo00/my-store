import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const CommonHeader = ({value,back,pathname,bgcolor}) => (
    <div styleName="header" style={{background:bgcolor}}>
        <Link to={{pathname:pathname}} styleName="headerLeft">
            <div styleName={back ? bgcolor ? 'back-white' : 'back' : ""}></div>
        </Link>
        <div style={{color:bgcolor ? '#fff' : ''}} styleName="headerCon">{value}</div>
        <div styleName="headerRight"></div>
    </div>
)

export default CSSModules(CommonHeader,styles)
