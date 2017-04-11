import * as types from '../../contants/ActionTypes';

const initialStata = {
    data:[]
}

const index = (state = initialStata, action) => {
    switch(action.type){
        case types.PAY_INIT:
            return {
                ...state,
                data:action.data
            }
        default:
            return state
    }
}

export default index
