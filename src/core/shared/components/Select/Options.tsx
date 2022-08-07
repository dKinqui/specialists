import React, { useCallback } from "react";
import { Overlay } from "../Overlay";
import { Portal } from "../Portal";
import {  Options as StyledOptions, ContentBox } from "./styled";
import { Option } from './Option'
import { OptionsChangeHandler, SelectProps } from '.'

interface OptionsProps extends Pick<SelectProps, 'options'> {
    referenceElemRect: DOMRect,
    onChange: OptionsChangeHandler;
    selected: string;
    onClose: () => void;
}

export const Options: React.FC<OptionsProps> = ({ options, referenceElemRect, onChange, selected, onClose }) => {

    const calcCoordinates = useCallback(() => {
        const { x, bottom } = referenceElemRect;
        return { x, y: bottom + 10 }
    }, [referenceElemRect])

    return (
        <>
            <Overlay onClose={onClose} />
            <Portal calcCoordinates={calcCoordinates}>
                <ContentBox>
                    <StyledOptions onClick={onChange}>
                        {options.map((option) => (
                            <Option
                                selected={selected === option}
                                key={option}
                            >
                                {option}
                            </Option>
                        ))}
                    </StyledOptions>
                </ContentBox>
            </Portal>
        </>
    )
}