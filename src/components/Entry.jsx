import Dropdown from './Dropdown';
import NavigateButton from './NavigateButton';
import classes from './Entry.module.css';

const Entry = () => {
	return (
		<div className={classes.Entry}>
			<Dropdown/>
			<NavigateButton/>
		</div>
	);
}

export default Entry;