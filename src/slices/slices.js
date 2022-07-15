import {createSlice} from '@reduxjs/toolkit';
import classes from '../components/slider/Slider.module.css';
import { reviewer_roles, reviewer_reviews, getRightClassnameForSlider } from '../utils/utils';

export const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        fetched: false,
        reviewers: []
    },
    reducers: {
        sliderReviewersFetched: (state, action) => {
            state.fetched = true;
            state.reviewers = action.payload.persons.map((person, index, array) => ({className: getRightClassnameForSlider(index, array.length-1, classes), imageSource: person.avatar, fullName: person.first_name + " " + person.last_name, role: reviewer_roles[index], review: reviewer_reviews[index] }));
        },
        slideIt: (state, action) => {
            state = state;
            // state = {fetched: true, imageSource: action.payload.imageSource ,fullName: action.payload.fullName, role: action.payload.role, review: action.payload.review};
        }
    }
});

export const {sliderReviewersFetched, slideIt} = sliderSlice.actions;

export const sliderReducer = sliderSlice.reducer;