import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getReviewersForSlider } from '../../utils/utils';
import {nextSlide} from '../../slices/slices';
import Slide from './Slide';
import SliderButtons from './SliderButtons';

const SliderBody = ({className}) => {
    const dispatch = useDispatch();
    const {fetched, reviewers} = useSelector(state => state.slider);
    useEffect(() => {
        if (fetched) {
            let interval = setInterval(() => {
              dispatch(nextSlide());
            }, 3000);
            return () => {
              clearInterval(interval);
            };            
        }
        else 
            dispatch(getReviewersForSlider());    
    }, [reviewers]);

	return (
        <div className={className}>
            {fetched && reviewers.map((person, index, array) => (<Slide key={index} className={person.className} imageSource={person.imageSource} fullName={person.fullName} role={person.role} review={person.review}/>))}
            <SliderButtons/>
        </div>
	);
};

export default SliderBody;

