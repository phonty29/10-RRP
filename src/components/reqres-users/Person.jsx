import classes from './ReqresUsers.module.css';

const Person = ({imageSource, userEmail, userName, className}) => {
	return (
		<article className={className}>
			<img src={imageSource} alt="person"/>
			<div>
				<h4>{userName}</h4>
				<p>{userEmail}</p>
			</div>
		</article>
	);
}

export default Person;