import classes from './TourPage.module.css';

const LoadToursButton = ({setLoadAgain}) => {
	return (
		<div className={classes.loadBtn} onClick={() => {setLoadAgain(prev => !prev)}}>
			Load tours
		</div>
	);
}

export default LoadToursButton;