import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getReviewersForSlider } from '../../utils/utils';
import classes from './Slider.module.css';

const Slide = (props) => {
    const {className, imageSource,fullName, role, review} = {...props};

	return (
        <article className={`${className} ${classes.article}`}>
            <img src={imageSource} alt={fullName} className={classes.personImg}/>
            <h4 className={classes.h4}>{fullName}</h4>
            <p className={classes.title}>{role}</p>
            <p className={classes.text}>{review}</p>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={classes.icon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
        </article>
	);
}

export default Slide;