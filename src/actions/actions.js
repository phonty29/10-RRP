export const actionAdd = () => ({
	type: 'ADD_ONE',
	payload: '0'
});

export const actionSub = () => ({
	type: 'SUB_ONE',
	payload: '0'
});

export const actionAddBy = (addBy) => ({
	type: 'ADD_BY',
	payload: addBy
});
