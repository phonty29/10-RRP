import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {toursTwitched} from '../../actions/actions';

const DeleteButton = (props) => {
	const [del, setDel] = useState(false);
	const dispatch = useDispatch();
	const tours = useSelector(state => state.tours.tours);
	useEffect(() => {
		dispatch(toursTwitched(tours.filter((tour) => tour!=props.tour)));
	}, [del]);
	return (
		<button className={props.className} onClick={() => {setDel(true)}}>not interested</button>
	);
}

export default DeleteButton;