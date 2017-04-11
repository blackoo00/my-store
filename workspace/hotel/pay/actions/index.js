import * as types from '../../contants/ActionTypes';
import hotel from '../../api/hotel';

const initDip = (data) => ({
    type:types.PAY_INIT,
    data:data
})
export const init = () => dispatch => {
    hotel.orderInfo(data => {
        dispatch(initDip(data))
    })
}
