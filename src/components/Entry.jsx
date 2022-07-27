import Dropdown from './Dropdown';
import NavigateButton from './NavigateButton';
import classes from './Entry.module.css';

const Entry = () => {
	return (
		<div className={classes.Entry}>
			<div className={classes.EntryCenter}>
				<Dropdown/>
				<NavigateButton/>	
			</div>
		</div>
	);
}

export default Entry;