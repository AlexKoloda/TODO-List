import { createSlice } from "@reduxjs/toolkit";

const initialState = 'all';

const FilterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, action) => action.payload,             
        
    },

});


export const {changeFilter} = FilterSlice.actions;

export default FilterSlice.reducer;