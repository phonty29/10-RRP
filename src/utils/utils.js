import axios from 'axios';
import cookies from '../cookies/cookies';
import {reqresUsersFetched, reqresUsersCleared} from '../actions/actions';

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