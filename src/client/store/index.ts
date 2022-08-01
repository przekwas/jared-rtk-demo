import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth-slice';
import chirpsReducer from '../features/chirps/chirps-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        chirps: chirpsReducer
    }
});

export default store;