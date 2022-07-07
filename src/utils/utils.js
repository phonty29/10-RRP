import axios from 'axios';
import cookies from '../cookies/cookies';
import {reqresUsersFetched, reqresUsersCleared, toursTwitched} from '../actions/actions';

export async function getReqresUsers(dispatch, page) {
	try {
		const response = await axios.get(cookies.get(`page_${page+1}`));
		const users = response.data;
		dispatch(reqresUsersFetched(users.data));    
	} catch (error) {
		console.error(error);
	}
}

export function clearReqresUsers(dispatch) {
	dispatch(reqresUsersCleared())
}

export const bodyStyle = document.body.style;

export async function getTours(dispatch) {
	try { 
		const response = await axios.get(cookies.get('tours'));
		const tours = response.data;
		dispatch(toursTwitched(tours));  		
	} catch (error) {
		console.error(error);
	}
}