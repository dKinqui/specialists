import { createAction } from '@reduxjs/toolkit';
import {AvailableFiltersNames} from "../reducers/specialists.reducer";

export interface FilterByField {
    name: AvailableFiltersNames,
    value: string
}

export const requestSpecialistsAction = createAction('[SPECIALISTS] REQUEST_SPECIALISTS');

export const filterByName = createAction<string>('[SPECIALISTS] FILTER_BY_NAME');

export const filterByField = createAction<FilterByField>('[SPECIALISTS] FILTER_BY_FIELD');