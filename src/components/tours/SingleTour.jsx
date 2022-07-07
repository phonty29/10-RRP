import TourContent from './TourContent';
import classes from './TourPage.module.css';

const SingleTour = ({tour}) => {
	return (
		<article className={classes.singleTour}>
			<img src={tour.image} alt="Best of Paris in 7 Days Tour"/>
			<TourContent tour={tour}/>
		</article>
	);
}

export default SingleTour;