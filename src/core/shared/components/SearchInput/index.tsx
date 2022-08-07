import React, {SyntheticEvent, useMemo, useState} from 'react';
import {debounce} from "lodash";

import { Input } from "./styled";

interface SearchInputProps {
    onChange: (value: string) => void,
    placeholder?: string,
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, placeholder }) => {
    const [value, setValue] = useState('');
    const debouncedOnChange = useMemo(() => debounce((value) => onChange(value)), [])
    const inputHandler = ({ currentTarget: { value } }: SyntheticEvent<HTMLInputElement>) => {
        setValue(value);
        debouncedOnChange(value)
    }

    return <Input value={value} placeholder={placeholder || 'Введите текст'} onChange={inputHandler} />
}