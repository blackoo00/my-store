import React from 'react';
import styles from './style.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

const ActionSheet = ({children,show,toggleActionSheet,hasHeader,title}) => {
	let actionSheetWrapBGC = classNames({
		'actionSheetWrapBGC':show,
		'actionSheetWrapBGCHide':!show
	})
	let actionSheetCon = classNames({
		'actionSheetEnter':show,
		'actionSheetLeave':!show
	})
	let actionSheetHeader = classNames({
		'actionSheetHeader':hasHeader,
		'actionSheetHeaderHide':!hasHeader
	})
	return(
		<div>
			<div styleName={actionSheetWrapBGC} onClick={toggleActionSheet}></div>
			<div styleName={actionSheetCon}>
				<header styleName={actionSheetHeader}>
					<item></item>
					<item styleName="actionSheetTitle">{title}</item>
					<item styleName="actionSheetClose" onClick={toggleActionSheet}>关闭</item>
				</header>
				{children}
			</div>
		</div>
	)
}

export default CSSModules(ActionSheet,styles)
