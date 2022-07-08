import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from './Reviews.module.css';
import ImageContainer from './ImageContainer';
import ButtonContainer from './ButtonContainer';
import {getReviewer, getReviewer_role, getReviewer_review} from '../../utils/utils';

const ReviewContent = ({className}) => {
	const [index, setIndex] = useState(0);
	const dispatch = useDispatch();
	const {fetched, reviewer, role, review} = useSelector(state => state.review);
	useEffect(() => {
		dispatch(getReviewer(index))
	}, [index]);

	return (
			fetched 
			&&
			<article className={className}>
				<ImageContainer imageSource={reviewer.avatar}/>
				<h4 className={classes.author}>{reviewer.first_name + " " + reviewer.last_name}</h4>
				<p className={classes.job}>{role}</p>
				<p className={classes.info}>{review}</p>
				<ButtonContainer classNames={{buttonContainer: classes.buttonContainer, prevBtn: classes.prevBtn, nextBtn: classes.nextBtn}} reviewer={{number: index, setNumber: setIndex}}/>
				<button className={classes.randomBtn} onClick={() => {setIndex(Math.ceil(Math.random()*5))}}>surprise me</button>
			</article>
	);
}

export default ReviewContent;