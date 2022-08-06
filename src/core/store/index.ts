import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import specialistsReducer from "../modules/specialists/reducers";

const reducer = combineReducers({
    specialists: specialistsReducer,
})

export const store = configureStore({
    reducer,
})

export const selectStore = (state: ReturnType<typeof store.getState>) => state;