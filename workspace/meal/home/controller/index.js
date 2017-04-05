import React from 'react';
import Search from './search';
import '../../common/css/style.css';
import '../../common/css/iconfont.css';
import Main from '../components/main/main';
import FooterController from './footer';
import CatsController from './cats';
import ProdsController from './prods';
import CartController from './cart';
import BigPicController from './bigpic';
import {connect} from 'react-redux';

import * as actions from '../actions/'
import * as wxActions from '../../actions/wx.sdk';

const getPhoneType = () =>{
    //正则,忽略大小写
    var pattern_phone = new RegExp("iphone","i");
    var pattern_android = new RegExp("Android","i");
    var userAgent = navigator.userAgent.toLowerCase();
    var isAndroid = pattern_android.test(userAgent);
    var isIphone = pattern_phone.test(userAgent);
    var phoneType="phoneType";
    if(isAndroid){
        var zh_cnIndex = userAgent.indexOf("-");
        var spaceIndex = userAgent.indexOf("build",zh_cnIndex+4);
        var fullResult = userAgent.substring(zh_cnIndex,spaceIndex);
        phoneType=fullResult.split(";")[1];
        }else if(isIphone){
        //6   w=375    6plus w=414   5s w=320     5 w=320
            var wigth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(wigth>400){
            phoneType = "iphone6 plus";
        }else if(wigth>370){
            phoneType = "iphone6";
            }else if(wigth>315){
        phoneType = "iphone5 or iphone5s";
        }else{
            phoneType = "iphone 4s";
        }
    }else{
        phoneType = "您的设备太先进了";
    }

    return phoneType;
}

class Home extends React.Component{
	componentWillMount(){
		let {init,phoneType} = this.props;
        phoneType(getPhoneType())
		init();
	}
	render(){
		return(
			<div>
				<Search/>
				<Main>
					<CatsController/>
					<ProdsController/>
				</Main>
				<FooterController/>
				<CartController/>
				<BigPicController/>
			</div>
		)
	}
}

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
	init:() => {
		dispatch(actions.getCopyInfo());
        dispatch(wxActions.wxShare());
	},
    phoneType:(type) => {
        dispatch(actions.phoneType(type));
    }
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
