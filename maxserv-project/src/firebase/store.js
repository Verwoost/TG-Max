import { configureStore, createReducer } from '@reduxjs/toolkit';
import signinReducer from '../Components/Login/signinSlice';


export const store = configureStore({
  reducer: {
    signin: signinReducer,
  },
});