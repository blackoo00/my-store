export const test = type1 => ({
    type: 'TEST',
})
export const test2 = () => {
	return (dispatch) => setTimeout(() =>{
		dispatch(test())
	},500)
}