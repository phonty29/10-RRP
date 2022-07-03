import React from 'react';
import { useDispatch } from 'react-redux';
import { actionAdd, actionSub, actionAddBy } from '../actions/actions';

const Buttons = () => {
	const dispatch = useDispatch();
	const buttonStyles = {
		width: '100px',
		height: '50px',
		color: 'red',
		textAlign: 'center',
		fontSize: '20px'
	};
	const increment = () => {
		dispatch(actionAdd());
	};
	const decrement = () => {
		dispatch(actionSub());
	};
	const addBy = () => {
		dispatch(actionAddBy(Number(prompt())));
	};	

	return (
		<div className="buttonBlock">
			<button style={buttonStyles} onClick={increment}>+</button>
			<button style={buttonStyles} onClick={decrement}>-</button>
			<button style={buttonStyles} onClick={addBy}>Add By</button>
		</div>
	);
}

export default Buttons;
