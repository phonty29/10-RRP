import Dropdown from './Dropdown';
import NavigateButton from './NavigateButton';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Entry = () => {
	return (
		<div className="Entry">
			<Dropdown/>
			<NavigateButton/>
		</div>
	);
}

export default Entry;