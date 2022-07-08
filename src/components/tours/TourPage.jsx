import {useEffect} from 'react';
import Title from '../GLOBALS/Title';
import Tours from './Tours';
import classes from './TourPage.module.css';
import { bodyStyle } from '../../utils/utils';

const TourPage = () => {
	useEffect(() => {
		bodyStyle.backgroundColor = 'hsl(210, 36%, 96%)';
		bodyStyle.color = 'hsl(209, 61%, 16%)';
	}, []);
	return (
		<main className={classes.main}>
			<section>
				<Title classNames={{title: classes.title, underline: classes.underline}} titleText={"Our tours"}/>
				<Tours/>
			</section>
		</main>
	);
}

export default TourPage;