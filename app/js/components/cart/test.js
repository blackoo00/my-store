import React from 'react';

const TodoList = ({lists,onClick}) => (
	<div onClick={e => {
         onClick()
       }}>{lists}</div>
)

// export default React.createClass({
//     render(){
//       return(
//         <div>123</div>
//       )
//     }
// })
export default TodoList
