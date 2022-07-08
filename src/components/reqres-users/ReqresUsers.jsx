import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getReqresUsers} from '../../utils/utils';
import {reqresUsersCleared} from '../../actions/actions';
import Person from './Person';
import FlipPageButton from './FlipPageButton';
import ClearButton from './ClearButton';
import classes from './ReqresUsers.module.css';
import { bodyStyle } from '../../utils/utils';

const ReqresUsers = () => {
	const [page, setPage] = useState(0);
	const dispatch = useDispatch();
	const {fetched, users, stateMessage, commandMessage} = useSelector(state => state.reqresUsers);
	useEffect(() => {
	    bodyStyle.backgroundColor = '#f28ab2';
	    bodyStyle.color = 'hsl(209, 61%, 16%)';
		dispatch(getReqresUsers(page));
	}, [page]);

	return (
		<main className={classes.main}>
			<section className={classes.container}>
				<h3>{stateMessage}</h3>
				{fetched && users.map((user, index, userArray) => <Person key={user.id} imageSource={user.avatar} userEmail={user.email} userName={user.first_name + " " + user.last_name} className={classes.person}/>)}
				<FlipPageButton onClick={() => {setPage(page => !page)}} text={commandMessage}/>
				<ClearButton onClick={() => {dispatch(reqresUsersCleared())}}/>
			</section>
		</main>
	);
}

export default ReqresUsers;
