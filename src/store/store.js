import {configureStore} from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

export const store = configureStore({

    reducer : {
        [apiSlice.reducer] : apiSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});