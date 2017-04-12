import * as types from '../../contants/ActionTypes';
import hotel from '../../api/hotel';

const myInfoDip = (data) => ({
    type:types.MYINFO,
    data:data
})

export const myInfo = () => dispatch => {
    hotel.myInfo(data => {
        dispatch(myInfoDip(data));
    })
}
//修改姓名
export const editName = (name) => ({
    type:types.EDIT_NAME,
    info:name
})

//修改电话
export const editTel = (tel) => ({
    type:types.EDIT_TEL,
    info:tel
})

//编辑编辑个人信息
export const editMyInfo = (data) => dispatch => {
    hotel.editMyInfo(status => {
        if(status == 1){
            $.alert('修改成功');
        }else{
            $.alert('修改失败');
        }
    },data)
}

//编辑留言
export const editFeedback = (info) => ({
    type:types.EDIT_FEEDBACK,
    info:info
})

//上传留言
export const feedback = (info) => dispatch => {
    hotel.feedback(status => {
        if(status == 1){
            $.alert('留言成功',() => {
                dispatch(editFeedback(''))
            });
        }else{
            $.alert('留言失败');
        }
    },info)
}
