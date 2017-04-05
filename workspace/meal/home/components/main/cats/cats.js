import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import iScroll from "../iscroll";
import classNames from 'classnames';

class Cats extends React.Component{
	componentDidMount() {
		let wh = window.innerHeight - 100;
		this.refs.tabsScroller.style.height = wh + "px";
        // this.iScrollInstance2 = new iScroll('#tabsScroller', { mouseWheel: true, click:true,});
    }
    componentDidUpdate() {
       	// this.iScrollInstance2.refresh();
    }
	render(){
		let {list,ChooseCat,chooseId,cnums,prods} = this.props;
		return(
			<div styleName="mainTabs" id="tabsScroller" ref="tabsScroller">
				<ul>
					{
						list.map(item => {
							let checkChoose = classNames({
								'mainTabsLi':chooseId != item.id,
								'mainTabsLiChoose':chooseId == item.id
							})
							let cartNums = classNames({
								'cartNums':cnums[item.id],
								'cartNumsHide':!cnums[item.id]
							})
							return(
								<li key={item.id} styleName={checkChoose} onClick={() => ChooseCat(item.id,prods)}>
									<span styleName={cartNums}>{cnums[item.id]}</span>
									{item.name}
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default CSSModules(Cats,styles)