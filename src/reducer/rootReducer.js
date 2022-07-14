import { combineReducers } from "redux";
import { SWITCH_ROUTE, REQRES_USERS_FETCHED, REQRES_USERS_CLEARED, TOURS_TWITCHED, TOURS_EMPTY, SWITCH_REVIEWER, SHOW_ALL, BREAKFAST_REMAINED, LUNCH_REMAINED, SHAKES_REMAINED } from '../actions/types.js';
import { sliderReducer } from "../slices/slices.js";

const routeReducer = (state = { name: 'Something else here', path: '/entry' }, action) => {
	switch (action.type) {
		case SWITCH_ROUTE: return {name: action.payload.name, path: action.payload.path};				
		default: return state;
	}
};

const reqresUsersReducer = (state = { fetched: false, users: [], stateMessage: "Users are receiving", commandMessage: "Fetch users" }, action) => {
	switch (action.type) {
		case REQRES_USERS_FETCHED: return { fetched: true, users: action.payload.data, stateMessage: action.payload.stateMessage, commandMessage: action.payload.commandMessage };
		case REQRES_USERS_CLEARED: return { fetched: false, users: action.payload.data, stateMessage: action.payload.stateMessage, commandMessage: action.payload.commandMessage };
		default: return state;
	}
};

const toursReducer = (state = { loading: true, tours: [] }, action) => {
	switch (action.type) {
		case TOURS_TWITCHED: return { loading: false, tours: action.payload };
		case TOURS_EMPTY: return { loading: false, tours: [] };
		default: return state;
	}
};

const reviewReducer = (state = { fetched: false, reviewer: {}, role: "", review: "" }, action) => {
	switch (action.type) {
		case SWITCH_REVIEWER: return { fetched: true, reviewer: action.payload.reviewer, role: action.payload.role, review: action.payload.review };
		default: return state;
	}
};

const menuReducer = (state = { menu: [] }, action) => {
	switch (action.type) {
		case SHOW_ALL: return { menu: action.payload.menu.map((menuItem, index, array) => ({...menuItem})) };
		case BREAKFAST_REMAINED: return { menu: action.payload.menu.filter((menuItem, index, array) => { if (menuItem.category == 'breakfast') return {...menuItem} })};
		case LUNCH_REMAINED: return { menu: action.payload.menu.filter((menuItem, index, array) => { if (menuItem.category == 'lunch') return {...menuItem} })};
		case SHAKES_REMAINED: return { menu: action.payload.menu.filter((menuItem, index, array) => { if (menuItem.category == 'shakes') return {...menuItem} })};
		default: return state;
	}
};

const rootReducer = combineReducers({
    route: routeReducer, 
    reqresUsers: reqresUsersReducer,
    tours: toursReducer,
    review: reviewReducer,
    menu: menuReducer,
	slider: sliderReducer
});

export default rootReducer;