import { createSlice } from '@reduxjs/toolkit';

export const sliderSlice = createSlice({
	name: 'slice',
	initialState: {
		name: "",
		role: "",
		review: ""
	},
	reducers: {
		toSlide: (state, action) => {
			state.name = action.payload.name;
			state.role = action.payload.role;
			state.review = action.payload.review;
		},
	},
});

export const {toSlide} = sliderSlice.actions;
export const sliderReducer = sliderSlice.reducer;