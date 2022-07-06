import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

const NavigateButton = () => {
	const path = useSelector(state => state.route.path);
	const navigate = useNavigate();

	return (
		<button type="button" className="btn btn-primary mt-5" onClick={() => {navigate(path)}}>Navigate</button>
	);
}

export default NavigateButton;