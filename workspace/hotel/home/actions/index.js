import * as types from '../../contants/ActionTypes';
import hotel from '../../api/hotel';

const indexInitDip = (data) => ({
    type:types.INDEX_INIT,
    data:data
})

export const indexInit = () => dispatch => {
    hotel.indexInit(data => {
        dispatch(indexInitDip(data))
    })
}
