import { SWITCH_ROUTE, REQRES_USERS_FETCHED } from './types.js';
import routes from '../routes/routes';

export const switchRoute = (route) => ({type: SWITCH_ROUTE, payload: route});
export const reqresUsersFetched = (usersData) => ({type: REQRES_USERS_FETCHED, payload: usersData});
export const reqresUsersCleared = () => ({type: REQRES_USERS_FETCHED, payload: []});