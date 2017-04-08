import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const footer = ({icons}) => (
    <div styleName="publicFotoer">
        {icons.map((item,index) => (
            <div key={'publicfooter'+index}>
                <p className={item + ' iconfont'}></p>
                <p>名称</p>
            </div>
        ))}
    </div>
)

export default CSSModules(footer,styles)
