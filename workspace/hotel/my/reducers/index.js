import * as types from '../../contants/ActionTypes';

const initialState = {
    name:'',
    tel:'',
    headimgurl:'',
    feedback:''
}

const my = (state = initialState, action) => {
    switch(action.type){
        case types.EDIT_FEEDBACK:
            return {
                ...state,
                feedback:action.info
            }
        case types.MYINFO:
            return {
                ...state,
                name:action.data.name,
                tel:action.data.tel,
                headimgurl:action.data.headimgurl,
            }
        case types.EDIT_NAME:
            return {
                ...state,
                name:action.info
            }
        case types.EDIT_TEL:
            return {
                ...state,
                tel:action.info
            }
        default:
            return state
    }
}

export default my
