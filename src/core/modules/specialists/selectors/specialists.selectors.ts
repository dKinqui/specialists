import { createSelector } from '@reduxjs/toolkit';

import { selectStore } from 'core/store';

export const selectSpecialistsState = createSelector(selectStore, (state) => state.specialists);

export const selectSpecialists = createSelector(selectSpecialistsState, (specialistsState) => specialistsState.specialists)

export const selectSpecialistsData = createSelector(selectSpecialists, (specialists) => specialists.data)

export const selectFilteredSpecialistsData = createSelector(selectSpecialists, (specialists) => specialists.filteredData)

export const selectAvailableFilters = createSelector(selectSpecialists, (specialists) => specialists.availableFilters)