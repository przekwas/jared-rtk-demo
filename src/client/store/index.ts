import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import authReducer from '../features/auth/auth-slice';
import chirpsReducer from '../features/chirps/chirps-slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		chirps: chirpsReducer
	}
});

// RootState represents the globabl state from the Redux store
export type RootState = ReturnType<typeof store.getState>;

// since the dispatch in rtk is customized, ts won't know about it
export type AppDispatch = typeof store.dispatch;

// so we export a custom hook to use it so ts will know about em
export const useAppDispatch: () => AppDispatch = useDispatch;

// ts and useSelector also don't know what our RootState is
// so we make a custom hook to use that does
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
