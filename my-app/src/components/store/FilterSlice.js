import { createSlice } from "@reduxjs/toolkit";

const initialState = 'all';

const FilterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        toggleFilter: (state, action) => action.payload,             
        
    },

});


export const {toggleFilter} = FilterSlice.actions;

export default FilterSlice.reducer;