import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import { SearchInput } from 'core/shared/components/SearchInput'
import { Select } from 'core/shared/components/Select'

import { SpecialistsActions } from '../../actions'

import { Nav, InputBox } from './styled';
import {selectAvailableFilters} from "../../selectors/specialists.selectors";
import { FilterByField } from "../../actions/specialists.actions";
import {AvailableFiltersNames} from "../../reducers/specialists.reducer";

export const SpecialistNav = () => {
    const dispatch = useDispatch();
    const searchHandler = (value: string) => dispatch(SpecialistsActions.filterByName(value));
    const filterHandler = (props: FilterByField) => dispatch(SpecialistsActions.filterByField(props));
    const availableFilters = useSelector(selectAvailableFilters)

    return (
        <Nav>
            {availableFilters && Object.entries(availableFilters).map(([key, value]) => (
                <Select key={key} name={key} options={value} onChange={(value) => filterHandler({ name: key as AvailableFiltersNames, value })} />
            ))}
            <InputBox>
                <SearchInput placeholder="Поиск по имени" onChange={searchHandler} />
            </InputBox>
        </Nav>
    )
}