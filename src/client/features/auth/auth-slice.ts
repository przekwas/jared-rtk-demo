import { createSlice } from '@reduxjs/toolkit';

// don't forget you can use interfaces just like you remember
const initialState: { loggedIn: boolean; token: string | null } = {
	loggedIn: false,
	token: null
};

const authSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		login: state => {
			state.loggedIn = true;
		},
		logout: state => {
			state.loggedIn = false;
		}
	}
});

const { actions, reducer } = authSlice;

export const { login, logout } = actions;

export default reducer;
