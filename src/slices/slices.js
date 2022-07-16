import {createSlice} from '@reduxjs/toolkit';
import classes from '../components/slider/Slider.module.css';
import { reviewer_roles, reviewer_reviews, getInitialClassnamesForSlider, getNextSlider, getPrevSlider } from '../utils/utils';

export const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        fetched: false,
        reviewers: []
    },
    reducers: {
        sliderReviewersFetched: (state, action) => {
            state.fetched = true;
            state.reviewers = action.payload.persons.map((person, index, array) => ({className: getInitialClassnamesForSlider(index, array.length-1, classes), imageSource: person.avatar, fullName: person.first_name + " " + person.last_name, role: reviewer_roles[index], review: reviewer_reviews[index] }));
        },
        nextSlide: (state, action) => {
            state.fetched = true;
            state.reviewers = state.reviewers.map((reviewer, index, array) => ({...reviewer, className: getNextSlider(index, array.length-1, classes, array)}))
        },
        prevSlide: (state, action) => {
            state.fetched = true;
            state.reviewers = state.reviewers.map((reviewer, index, array) => ({...reviewer, className: getPrevSlider(index, array.length-1, classes, array)}))
        }        
    }
});

export const {sliderReviewersFetched, nextSlide, prevSlide} = sliderSlice.actions;

export const sliderReducer = sliderSlice.reducer;