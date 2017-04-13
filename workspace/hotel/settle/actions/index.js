import * as types from '../../contants/ActionTypes';
import hotel from '../../api/hotel';
import {hashHistory} from 'react-router';

//结算选项初始化
export const infoInit = (keeptime) => ({
    type:types.SETTLE_INFO_INIT,
    keeptime:keeptime
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
const settleDip = (defaultkeeptime,defaulttotal) => ({
    type:types.SETTLE,
    defaultkeeptime:defaultkeeptime,
    defaulttotal:defaulttotal
})

export const settle = (data,defaultkeeptime,defaulttotal) => dispatch => {
    hotel.settle(result => {
        if(result){
            dispatch(settleDip(defaultkeeptime,defaulttotal));
            hashHistory.push({pathname:'/pay'})
        }else{
            $.alert('提交失败',() => {
                hashHistory.push({pathname:'/'})
            })
        }
    },data)
}
