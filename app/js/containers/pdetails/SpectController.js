import React from 'react';
import Paramenter from '../../components/pdetail/parameter';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as actions from '../../actions/pdetails';

const SpectContainer = ({pdetails,handleHidePra,chooseAttr,addNumber,delNumber,clickSubmit}) => (
	<ReactCSSTransitionGroup
	  component="div"
      transitionName="mui"
      className={pdetails.paranimate}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
	    <Paramenter 
	    	pdetails={pdetails} 
	    	clickSubmit={()=>{clickSubmit(pdetails.buy,pdetails.pro.id,pdetails.chooseDid,pdetails.number,pdetails.dprice)}} 
	    	handleHidePra={handleHidePra} 
	    	addNumber={addNumber} 
	    	delNumber={delNumber}
	    >
	    	{pdetails.spec.map((item,index)=>{
	    		if(item.attr.length != 0){
			    	return(
			      		<li key={item.id} id="J_SkuGroup_-1" className="J_SkuGroup mui-sku-group">
			      			<h2>{item.value}</h2>
			      				<div className="items">
			      					{item.attr.map((item2,index2) =>(
			      						<label className={pdetails.chooseId[index] == index2 ? "checked" : ""} onClick={()=>{chooseAttr(index,index2)}} key={item2.id}>{item2.value}</label>
			      					))}
			      				</div>
			      		</li>
			    	)
	    		}
	    	})}
	    </Paramenter>
    </ReactCSSTransitionGroup>
)

const mapStateToProps = (state) => ({
	pdetails:state.pdetails
})

const mapDispatchToProps = (dispatch,state) => ({
	//关闭商品规格选项
	handleHidePra:() => {
		dispatch(actions.handleHidePra())
	},
	//选择商品规格
	chooseAttr:(sid,aid) => {
		dispatch(actions.chooseAttr(sid,aid))
	},
	//增加商品数量
	addNumber:()=>{
		dispatch(actions.addNumber())
	},
	//减少商品数量
	delNumber:()=>{
		dispatch(actions.delNumber())
	},
	//点击确认按钮
	clickSubmit:(arg,pid,did,num,dprice)=>{
		if(arg){//立即购买
			dispatch(actions.addCart(arg,pid,did,num,dprice))
		}else{//加入购物车
			dispatch(actions.addCart(arg,pid,did,num,dprice))
		}
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SpectContainer)