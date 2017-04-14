import * as types from '../constants/ActionTypes';

//记录滑动位置
export const scrollPosition = (x,y,hash) => ({
	type:types.SCROLL_POSITION,
	scrollX:x,
	scrollY:y,
	hash:hash,
})