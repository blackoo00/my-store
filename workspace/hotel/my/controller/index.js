import React from 'react';
import MyHeader from '../../../common/components/myheader/';
import MyList from '../components/mylist';
import * as actions from '../actions/';
import {connect} from 'react-redux';

class my extends React.Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        let {headimgurl} = this.props;
        return(
            <div>
                <MyHeader
                    logourl = {headimgurl}
                />
                <MyList/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    headimgurl:state.my.headimgurl
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.myInfo());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(my);
