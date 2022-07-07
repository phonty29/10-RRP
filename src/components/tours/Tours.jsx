import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTours} from '../../utils/utils'
import SingleTour from './SingleTour';
import Loading from './Loading';

const Tours = () => {
	const dispatch = useDispatch();
	const {loading, tours} = useSelector(state => state.tours);
	useEffect(() => {
		getTours(dispatch);
	}, []);
	return (
		<div>
			{loading ? <Loading/> : tours.map((tour, index, tourArray) => <SingleTour key={tour.id} tour={tour}/>)}
		</div>
	);
}

export default Tours;