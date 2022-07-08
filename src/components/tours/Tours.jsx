import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTours} from '../../utils/utils'
import SingleTour from './SingleTour';
import Loading from './Loading';
import LoadToursButton from './LoadToursButton';

const Tours = () => {
	const [loadAgain, setLoadAgain] = useState(false);
	const dispatch = useDispatch();
	const {loading, tours} = useSelector(state => state.tours);
	useEffect(() => {
		dispatch(getTours());
	}, [loadAgain]);

	return (
		<div>
			{loading ? <Loading/> : tours.map((tour, index, tourArray) => <SingleTour key={tour.id} tour={tour}/>)}
			{loading == false && tours.length == 0 && <LoadToursButton setLoadAgain={setLoadAgain}/>}
		</div>
	);
}

export default Tours;