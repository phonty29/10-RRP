import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reqresUsersFetched, reqresUsersCleared} from '../../actions/actions';
import cookies from '../../cookies/cookies';
import Person from './Person';
import FlipPageButton from './FlipPageButton';
import ClearButton from './ClearButton';

const ReqresUsers = () => {
	const [page, setPage] = useState(0);
	const dispatch = useDispatch();
	const fetched = useSelector(state => state.reqresUsers.fetched);
	const users = useSelector(state => state.reqresUsers.data);
	const stateMessage = useSelector(state => state.reqresUsers.stateMessage);
	const commandMessage = useSelector(state => state.reqresUsers.commandMessage);
	useEffect(() => {
		fetch(cookies.get(`page_${page+1}`))
		  .then(response => response.json())
		  .then(users => {
		  	dispatch(reqresUsersFetched(users.data));
		  });		
	}, [page]);

	return (
		<main>
			<section className="container">
				<h3>{stateMessage}</h3>
				{fetched && users.map((user, index, userArray) => <Person key={user.id} imageSource={user.avatar} userEmail={user.email} userName={user.first_name + " " + user.last_name}/>)}
				<FlipPageButton onClick={() => {setPage(page => !page)}} text={commandMessage}/>
				<ClearButton onClick={() => {dispatch(reqresUsersCleared())}}/>
			</section>
		</main>
	);
}

export default ReqresUsers;
