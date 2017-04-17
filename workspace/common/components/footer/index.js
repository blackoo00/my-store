import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import {Link} from 'react-router';

const footer = ({data,clicknum,clickcolor = '#ddd',paths}) => (
    <div styleName="publicFotoer">
        {data.map((item,index) => (
            <Link styleName='publicFotoerItem' key={'publicfooter'+index} to = {paths[index]} style={{color:clicknum == index ? clickcolor: '#333'}}>
                <div>
                    <p className={item[0] + ' iconfont'}></p>
                    <p>{item[1]}</p>
                </div>
            </Link>
        ))}
    </div>
)

export default CSSModules(footer,styles)
