import {createSlice} from '@reduxjs/toolkit';
import classes from '../components/slider/Slider.module.css';
import { reviewer_roles, reviewer_reviews, getInitialClassnamesForSlider, getNextSlider, getPrevSlider, sublinks } from '../utils/utils';

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


export const textGeneratorSlice = createSlice({
    name: "textGenerator",
    initialState: {
        numberOfParagraphs: 0,
        paragraphs: []
    },
    reducers: {
        setParagraphs: (state, action) => {
            state.numberOfParagraphs = action.payload.number;
            state.paragraphs = action.payload.paragraphs;
        }
    }
});
export const {setParagraphs} = textGeneratorSlice.actions;
export const textGeneratorReducer = textGeneratorSlice.reducer;


export const groceryBudSlice = createSlice({
    name: "groceryBud", 
    initialState: {
        buds: [],
        buttonState: "submit",
        itemIndex: 0,
        itemValue: "",
        alertMessage: "",
        alertType: ""
    },
    reducers: {
        fetchItems: (state, action) => {
            state.buds = action.payload.buds;
            state.buttonState = "submit";
            state.alertMessage = action.payload.alertMessage;
            state.alertType = action.payload.alertType;
        },
        editItem: (state, action) => {
            state.buttonState = "edit";
            state.itemIndex = action.payload.index;
            state.itemValue = action.payload.value;
        }
    }
});
export const {fetchItems, editItem} = groceryBudSlice.actions;
export const groceryBudReducer = groceryBudSlice.reducer;


export const stripeSubmenusSlice = createSlice({
    name: "stripeSubmenu",
    initialState: {
        sidebar: "",
        submenu: {
            sublink: sublinks[0],
            visibility: "",
            coordinates: {}
        }
    },
    reducers: {
        toggleSidebar: (state, action) => {
            state.sidebar = action.payload.command;
        },
        toggleSubmenu: (state, action) => {
            state.submenu.sublink = action.payload.sublink;
            state.submenu.visibility = action.payload.visibility;
            state.submenu.coordinates = action.payload.coordinates;
        }
    } 
});
export const {toggleSidebar, toggleSubmenu} = stripeSubmenusSlice.actions;
export const stripeSubmenusReducer = stripeSubmenusSlice.reducer;

export const cocktailDBSlice = createSlice({
    name: "cocktailDB",
    initialState: {
        page: '/cocktailDB',
        cocktails: [],
        message: "",
        singleCocktail: {}
    },
    reducers: {
        searchCocktails: (state, action) => {
            state.cocktails = action.payload.cocktails;
            state.message = action.payload.message;
        },
        selectCocktail: (state, action) => {
            state.singleCocktail = action.payload.cocktail;
        }
    }
});
export const {searchCocktails, selectCocktail} = cocktailDBSlice.actions;
export const cocktailDBReducer = cocktailDBSlice.reducer;