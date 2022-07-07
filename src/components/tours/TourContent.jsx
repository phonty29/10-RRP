import TourInfo from './TourInfo';
import TourText from './TourText';
import DeleteButton from './DeleteButton';
import classes from './TourPage.module.css';

const TourContent = ({tour}) => {
	return (
		<footer>
			<TourInfo classeNames={{tourInfo: classes.tourInfo, tourPrice: classes.tourPrice}} tourInfo={{tourName: tour.name, tourPrice: tour.price}}/>
			<TourText tourText={tour.info}/>
			<DeleteButton className={classes.deleteBtn} tour={tour}/>
		</footer>
	);
}

export default TourContent;
