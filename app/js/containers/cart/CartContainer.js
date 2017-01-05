import React from 'react';
import { connect } from 'react-redux'
import Cart from '../../components/cart/cart';
import Test from '../../components/cart/test';
import {test2} from '../../actions/index';

// const CartContainer = () =>{
// 	return(
// 		<div>
// 			<Cart/>
// 		</div>
// 	)
// }

// CartContainer()
const mapStateToProps = (state) =>({
    lists: state
})

const mapDispatchToProps = (dispatch) =>({
	onClick: () => {
	  dispatch(test2())
	}
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)