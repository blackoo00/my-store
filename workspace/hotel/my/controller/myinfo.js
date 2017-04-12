import React from 'react';
import MyInfo from '../components/myinfo';
import {connect} from 'react-redux';
import * as actions from '../actions/';

class myinfo extends React.Component{
    componentWillMount(){
        if(name == ''){
            let {init} = this.props;
            init();
        }
    }
    render(){
        let {...rest} = this.props;
        return(
            <MyInfo
                name = {rest.name}
                tel = {rest.tel}
                editName = {rest.editName}
                editTel = {rest.editTel}
                editMyInfo = {() => {rest.editMyInfo(rest.data)}}
            />
        )
    }
}

const mapStateToProps = state => ({
    name:state.my.name,
    tel:state.my.tel,
    data:state.my
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.myInfo());
    },
    editName:(name) => {
        dispatch(actions.editName(name));
    },
    editTel:(tel) => {
        dispatch(actions.editTel(tel));
    },
    editMyInfo:(data) => {
        dispatch(actions.editMyInfo(data))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(myinfo);
