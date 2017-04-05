import meal from '../../api/meal.js';
export const PayOrder = (tid) => dispatch => {
	meal.waitressPay(tid)
}