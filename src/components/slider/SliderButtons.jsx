import {useDispatch} from 'react-redux';
import classes from './Slider.module.css';
import {nextSlide, prevSlide} from '../../slices/slices';

const SliderButtons = () => {
    const dispatch = useDispatch(); 

	return (
        <>
            <button className={classes.prev} onClick={() => {dispatch(prevSlide())}}><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <button className={classes.next} onClick={() => {dispatch(nextSlide())}}><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
        </>
	);
}

export default SliderButtons;