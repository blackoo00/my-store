import {hashHistory} from 'react-router';

export const LinkToPdetails = (pid) =>{
	hashHistory.push({pathname:'/pdetail',query:{id:pid}})
}