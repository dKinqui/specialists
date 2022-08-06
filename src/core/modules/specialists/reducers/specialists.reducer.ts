import { createReducer, current } from '@reduxjs/toolkit';

import AllSpecialists from 'core/data/all';

import { SpecialistsActions } from '../actions';
import { Specialist } from "../models/specialists.model";

export type availableFiltersNames = keyof Pick<Specialist, 'insurances' | 'speciality'>
const availableFiltersNamesAsArray: availableFiltersNames[] = ['insurances', 'speciality']

export interface InitialState {
    data: Specialist[];
    filteredData: Specialist[];
    availableFilters: Record<availableFiltersNames, string[]>,
    activeFilters: Record<availableFiltersNames, string>
}

const initialState: InitialState = {
    data: null,
    filteredData: null,
    availableFilters: null,
    activeFilters: {
        speciality: null,
        insurances: null
    }
}

export const specialistsReducer = createReducer(initialState, (builder) => builder
    .addCase(SpecialistsActions.requestSpecialistsAction, (state) => ({
        ...state,
        data: AllSpecialists as Specialist[],
        filteredData: AllSpecialists as Specialist[],
        availableFilters: AllSpecialists.reduce<InitialState['availableFilters']>((filters, cur) => {
            availableFiltersNamesAsArray.forEach((name) => {
                const targetFilter = filters[name]
                const curFilter = cur[name]
                if (curFilter && !targetFilter.includes(curFilter)) targetFilter.push(curFilter)
            })
            return filters
        }, { insurances: [], speciality: [] })
    }))
    .addCase(SpecialistsActions.filterByName, (state, { payload }) => ({
        ...state,
        filteredData: state.data?.filter(specialists => specialists.name.includes(payload))
    }))
    .addCase(SpecialistsActions.filterByField, (state, { payload: { name, value } }) => {
        /**
         * Если переданный фильтр уже активен и доступен только один для единовременного выбора - сбрасываем переданный фильтр
         */
        const activeFilters = current(state.activeFilters);
        const isNewFilterAvailableOnlyAsSingle = !Array.isArray(activeFilters);
        const isNewFilterActive = activeFilters[name] === value;
        const newActiveFilter = {
            [name]: (isNewFilterAvailableOnlyAsSingle && isNewFilterActive) ? null : value
        }
        const dataToFiltering = activeFilters[name] ? state.data : state.filteredData;
        const newActiveFilters = { ...activeFilters, ...newActiveFilter }
        console.log(newActiveFilters)
        return {
            ...state,
            filteredData: dataToFiltering.filter((elem) => Object.entries(newActiveFilters)
                .reduce((isCorrect, [name, value]) => {
                    if (!value || !isCorrect) return isCorrect
                    return elem[name as availableFiltersNames] === value
                }, true)),
            activeFilters: newActiveFilters
        }
    })
)