const TourInfo = ({classeNames, tourInfo}) => {
	return (
		<div className={classeNames.tourInfo}>
			<h4>{tourInfo.tourName}</h4>
			<h4 className={classeNames.tourPrice}>${tourInfo.tourPrice}</h4>
		</div>
	);
}

export default TourInfo;