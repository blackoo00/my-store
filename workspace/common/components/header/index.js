import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const CommonHeader = ({value,back,pathname,bgcolor}) => (
    <div styleName="header" style={{background:bgcolor}}>
        <Link to={{pathname:pathname}}>
            <span styleName={back ? bgcolor ? 'back-white' : 'back' : ""}></span>
        </Link>
        <span style={{color:bgcolor ? '#fff' : ''}}>{value}</span>
    </div>
)

export default CSSModules(CommonHeader,styles)
