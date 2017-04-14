import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './style.css';

class List extends React.Component{
    render(){
    	let {list,OrderDetail} = this.props;
    	return(
                <div>
					{
						list.map(item => {
							let myOrdersStatusIcon = classNames({
								'myOrdersStatusIconTrue': item.status == 1,
								'myOrdersStatusIconUntrue': item.status == 0,
								'myOrdersStatusIconCancel': item.status == 2
							})
							return(
								<li key={item.id} styleName="myOrdersItem" onClick={() => {OrderDetail(item.id)}}>
									<section styleName={myOrdersStatusIcon}></section>
									<section styleName="myOrdersDetails">
										<div styleName="myOrdersPName">{item.company}</div>
										<div styleName="myOrdersTime">{item.time}{item.price}元</div>
										<div styleName="myOrdersStatus">状态：<label>{item.statusinfo}</label></div>
									</section>
								</li>
							)
						})
					}
                </div>
    	)
    }
}

export default CSSModules(List,styles)
