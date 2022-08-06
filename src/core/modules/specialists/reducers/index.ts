import { combineReducers } from '@reduxjs/toolkit';
import { specialistsReducer, InitialState } from './specialists.reducer';

interface Reducer {
    specialists: InitialState,
}

export default combineReducers<Reducer>({
    specialists: specialistsReducer,
})