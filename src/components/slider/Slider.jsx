import { useEffect } from "react";
import SliderBody from "./SliderBody";
import Title from "./Title";
import classes from './Slider.module.css';
import { bodyStyle } from '../../utils/utils';

const Slider = () => {
    useEffect(() => {
        bodyStyle.backgroundColor = '#f1f5f8';
	    bodyStyle.color = '#102a42';
    }, []);

	return (
        <section className={classes.section}>
            <Title className={classes.title}/>
            <SliderBody className={classes.sectionCenter}/>
        </section>
	);
};

export default Slider;