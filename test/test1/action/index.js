import fetch from 'isomorphic-fetch';

export function fetchList(){
	return(dispatch) => {
		return fetch('/api/list')
			.then(res => res.json())
			.then(json => dispatch({type:'FETCH_LIST_SUCCESS',payload:json}));
	}
}

export function fetchItem(id){
	return (dispatch) => {
		return fetch(`/api/item/${id}`)
			.then(res => res.json())
			.then(json => dispatch({type: 'FETCH_ITEM_SUCCESS', payload:json}));
	}
}