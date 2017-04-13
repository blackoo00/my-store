import React from 'react';
import Header from '../../../common/components/header/';
import Details from '../components/details';
import * as actions from '../actions/';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

class pay extends React.Component{
    componentWillMount(){
        let {init,data} = this.props;
        init(data.total_fee);
    }
    render(){
        let {...rest} = this.props;
        return(
            <div>
                <Header
                    value = {'支付中心'}
                    back = {true}
                    pathname = {'/settle'}
                    bgcolor = '#33bbaf'
                />
                <Details
                    themeColor = '#33bbaf'
                    data = {rest.data}
                    pay = {() => rest.pay(rest.data.id)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data:state.order
})

const mapDispatchToProps = dispatch => ({
    init:(total_fee) => {
        if(total_fee == 0){
            dispatch(actions.init())
        }
    },
    pay:(oid) => {
        if(oid != 0){
            window.location.href = SERVER + 'payOrder' + '&oid=' + oid;
        }else{
            $.alert('提交失败',() => {
                hashHistory.push({pathname:'/'});
            })
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pay)
