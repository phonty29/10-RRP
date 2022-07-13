import { SWITCH_ROUTE, REQRES_USERS_FETCHED, TOURS_TWITCHED, TOURS_EMPTY, SWITCH_REVIEWER, SHOW_ALL, BREAKFAST_REMAINED, LUNCH_REMAINED, SHAKES_REMAINED } from './types.js';
import routes from '../routes/routes';

export const switchRoute = (route) => ({type: SWITCH_ROUTE, payload: route});
export const reqresUsersFetched = (users) => ({type: REQRES_USERS_FETCHED, payload: { data: users, stateMessage: "Six users received", commandMessage: "Flip the page" }});
export const reqresUsersCleared = () => ( {type: REQRES_USERS_FETCHED, payload: { data: [], stateMessage: "Users are cleared", commandMessage: "Fetch users" }});
export const toursTwitched = (tours) => ( {type: TOURS_TWITCHED, payload: tours} );
export const toursEmpty = () => ( {type: TOURS_EMPTY, payload: []} );
export const switchReviewer = (reviewer, role, review) => ( {type: SWITCH_REVIEWER, payload: {reviewer, role, review}} );
export const showAllMenu = (menu) => ( {type: SHOW_ALL, payload: {menu: menu}} );
export const breakfastRemained = (menu) => ( {type: BREAKFAST_REMAINED, payload: {menu: menu}} );
export const lunchRemained = (menu) => ( {type: LUNCH_REMAINED, payload: {menu: menu}} );
export const shakesRemained = (menu) => ( {type: SHAKES_REMAINED, payload: {menu: menu}} );
