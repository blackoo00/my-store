import * as types from '../../contants/ActionTypes';
import hotel from '../../api/hotel';
import {hashHistory} from 'react-router';

//结算选项初始化
export const infoInit = () => ({
    type:types.SETTLE_INFO_INIT,
})

//初始化
const initDip = data =>({
    type:types.SETTLE_INIT,
    data:data
})
export const init = () => dispatch => {
    hotel.orderInfo(data => {
        dispatch(initDip(data))
    })
}

export const chooseRoomNum = (num) => ({
    type:types.CHOOSE_ROOMNUM,
    num:num
})

export const chooseKeepTime = (time) => ({
    type:types.CHOOSE_KEEPTIME,
    time:time
})

export const signInName = (name) => ({
    type:types.SIGN_IN_NAME,
    name:name
})

export const signInTel = (tel) => ({
    type:types.SIGN_IN_TEL,
    tel:tel
})
//提交
export const settle = (data) => dispatch => {
    hotel.settle(result => {
        if(result){
            hashHistory.push({pathname:'/pay'})
        }else{
            $.alert('提交失败',() => {
                hashHistory.push({pathname:'/'})
            })
        }
    },data)
}
