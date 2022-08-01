//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    list: [
        {
            name: 'Luke',
            msg: 'wtf'
        }
    ]
};

const chirpsSlice = createSlice({
    initialState,
    name: 'chirps',
    reducers: {
        addChirp: (state, action) => {
            state.list.push(action.payload);
        }
    }
});

const { actions, reducer } = chirpsSlice;

export const { addChirp } = actions;

export default reducer;