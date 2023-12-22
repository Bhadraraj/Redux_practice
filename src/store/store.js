import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'

// All the state will manage here 
export const store =configureStore({
    // reducer will be inside the store- accepts action -type  and old state 
    reducer:{
          counter:counterReducer,
    }
})