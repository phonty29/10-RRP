import {useEffect} from 'react';
import TextForm from './TextForm';
import TextParagraph from './TextParagraph';
import classes from './TextGenerator.module.css';
import { bodyStyle } from '../../utils/utils';

const TextGenerator = () => {
    useEffect(() => {
        bodyStyle.backgroundColor = '#f1f5f8';
	    bodyStyle.color = '#102a42';
    }, []);

	return (
		<section className={`${classes.sectionCenter} ${classes.section}`}>
			<h3 className={classes.h3}>tired of boring lorem ipsum?</h3>
			<TextForm/>
			<TextParagraph className={classes.loremText}/>
		</section>
	);
}

export default TextGenerator;