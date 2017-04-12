import React from 'react';
import CommonHeader from '../../../common/components/header/';
import {connect} from 'react-redux';
import * as actions from '../actions/';

class companyIntro extends React.Component{
    componentWillMount(){
        let {info,init} = this.props;
        if(info == ''){
            init();
        }
    }
    render(){
        let {info} = this.props;
        return(
            <div>
                <CommonHeader
                    value = '酒店简介'
                    back = {true}
                    pathname = '/'
                    bgcolor = {THEME_COLOR}
                />
                <article className="weui_article">
                    {info.intro}
                </article>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    info:state.home.info
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.indexInit());
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(companyIntro)
