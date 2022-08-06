import React, { SyntheticEvent, useState } from 'react';
import { Input } from "./styled";

interface SearchInputProps {
    onChange: (value: string) => void,
    placeholder?: string,
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, placeholder }) => {
    const [value, setValue] = useState('');

    const inputHandler = ({ currentTarget: { value } }: SyntheticEvent<HTMLInputElement>) => {
        setValue(value);
        onChange(value)
    }

    return <Input value={value} placeholder={placeholder || 'Введите текст'} onChange={inputHandler} />
}