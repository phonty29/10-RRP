const Person = ({imageSource, userEmail, userName}) => {
	return (
		<article className="person">
			<img src={imageSource} alt="person_1"/>
			<div>
				<h4>{userName}</h4>
				<p>{userEmail}</p>
			</div>
		</article>
	);
}

export default Person;