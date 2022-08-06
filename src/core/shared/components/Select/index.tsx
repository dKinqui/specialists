import React, {SyntheticEvent, useCallback, useState} from 'react';

import { useBooleanState } from "../../hooks/useBooleanState";

import { Container, Preview } from './styled';
import { Options } from './Options'

export interface SelectProps {
    name: string,
    options: string[],
    onChange: (value: string) => void;
}

export type OptionsChangeHandler = (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => void

export const Select: React.FC<SelectProps> = ({ name, options, onChange }) => {
    const { state: isOpen, reverseState, setToFalse } = useBooleanState(false)
    const [selected, setSelected] = useState(null);
    const previewRef = React.useRef<HTMLButtonElement>();

    const optionsChangeHandler = useCallback<OptionsChangeHandler>(({ currentTarget, target }) => {
        /**
         * Если клик произошел между элементами селекта - игнорируем клик
         * иначе textContent/innerText вернет текста всех детей и будет печально :(
         */
        if (target === currentTarget) return;
        const { textContent } = target as HTMLDivElement;
        setSelected(textContent)
        setToFalse() // Закрываем селект после выбора в случае, если возможно выбрать только одно значение
        onChange?.(textContent)
    },[setToFalse, onChange]);

    return (
        <Container>
            <Preview onClick={reverseState} ref={previewRef}>{selected || name}</Preview>
            {isOpen && <Options
                selected={selected}
                onChange={optionsChangeHandler}
                referenceElemRect={previewRef.current?.getBoundingClientRect()}
                options={options}
                onClose={setToFalse}
            />}
        </Container>
    )
}