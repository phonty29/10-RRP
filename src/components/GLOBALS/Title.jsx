const Title = ({classNames, titleText}) => {
	return (
		<div className={classNames.title}>
			<h2>{titleText}</h2>
			<div className={classNames.underline}></div>
		</div>
	);
}

export default Title;