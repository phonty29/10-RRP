const initialState = {
	number: 0
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_ONE':
			return {...state, number: state.number + 1};
		case 'SUB_ONE':
			return {...state, number: state.number - 1};	
		case 'ADD_BY':
			return {...state, number: state.number + action.payload};					
		default:
			return state;
	}
};

export default myReducer;