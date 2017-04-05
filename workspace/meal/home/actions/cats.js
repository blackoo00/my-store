import * as types from '../../contants/ActionTypes';
import meal from '../../api/meal';
import log from '../../api/log';
//分类初始化
const CatInfoDip = cats =>({
	type:types.CATS_INIT,
	cats:cats
})

export const CatInfo = () => dispatch =>{
	meal.getCatInfo(cats => {
		dispatch(CatInfoDip(cats));
	})
}
//选择分类
const ChooseCatDip = cid => ({
	type:types.CHOOSE_CAT,
	cid:cid
})

export const ChooseCat = cid => dispatch => {
	log.CatClick(cid);
	dispatch(ChooseCatDip(cid));
}

