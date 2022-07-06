import { combineReducers } from "redux";
import { SWITCH_ROUTE, REQRES_USERS_FETCHED, REQRES_USERS_CLEARED } from '../actions/types.js';

const routeReducer = (state = { name: 'Something else here', path: '/entry' }, action) => {
	switch (action.type) {
		case SWITCH_ROUTE: return {name: action.payload.name, path: action.payload.path};				
		default: return state;
	}
};

const reqresUsersReducer = (state = { fetched: false, data: [] }, action) => {
	switch (action.type) {
		case REQRES_USERS_FETCHED: return { fetched: true, data: action.payload };
		case REQRES_USERS_CLEARED: return { fetched: false, data: action.payload };
		default: return state;
	}
};

const rootReducer = combineReducers({
    route: routeReducer, 
    reqresUsers: reqresUsersReducer
});

export default rootReducer;