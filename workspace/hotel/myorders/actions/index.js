import * as types from '../../contants/ActionTypes';
import hotel from '../../api/hotel';

const myOrdersDip = (data) => ({
    type:types.MYORDERS_LIST,
    data:data
})

export const myOrders = () => dispatch =>{
    hotel.myOrders(data => {
        dispatch(myOrdersDip(data))
    })
}

//选择类型
export const chooseLive = (lived) => ({
    type:types.CHOOSE_LIVE_TYPE,
    lived:lived
})
