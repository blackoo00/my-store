import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const footer = ({data,clicknum,clickcolor = '#ddd'}) => (
    <div styleName="publicFotoer">
        {data.map((item,index) => (
            <div key={'publicfooter'+index} style={{color:clicknum == index ? clickcolor: ''}}>
                <p className={item[0] + ' iconfont'}></p>
                <p>{item[1]}</p>
            </div>
        ))}
    </div>
)

export default CSSModules(footer,styles)
