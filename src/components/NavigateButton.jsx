import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import classes from './Entry.module.css';

const NavigateButton = () => {
	const path = useSelector(state => state.route.path);
	const navigate = useNavigate();

	return (
		<button type="button" className={classes.navigateButton} onClick={() => {navigate(path)}}>Navigate</button>
	);
}

export default NavigateButton;