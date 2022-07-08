import {useEffect} from 'react';
import Title from '../GLOBALS/Title';
import ReviewContent from './ReviewContent';
import classes from './Reviews.module.css';
import { bodyStyle } from '../../utils/utils';

const Reviews = () => {
	useEffect(() => {
		bodyStyle.backgroundColor = '#f1f5f8';
		bodyStyle.color = '#102a42';		
	}, []);

	return (
		<main className={classes.main}>
			<section className={classes.container}>
				<Title classNames={{title: classes.title , underline: classes.underline}} titleText={"our reviews"}/>
				<ReviewContent className={classes.review}/>
			</section>
		</main>
	);
}

export default Reviews;