import { SWITCH_ROUTE, REQRES_USERS_FETCHED } from './types.js';
import routes from '../routes/routes';

export const switchRoute = (route) => ({type: SWITCH_ROUTE, payload: route});
export const reqresUsersFetched = (users) => ({type: REQRES_USERS_FETCHED, payload: { data: users, stateMessage: "Six users received", commandMessage: "Flip the page" }});
export const reqresUsersCleared = () => ( {type: REQRES_USERS_FETCHED, payload: { data: [], stateMessage: "Users are cleared", commandMessage: "Fetch users" }});