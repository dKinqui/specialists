import React, {SyntheticEvent, useState} from 'react';
import { Option as StyledOption, OptionProps as StyledOptionProps, Tooltip } from './styled';
import { Portal } from "../Portal";
import {useBooleanState} from "../../hooks/useBooleanState";

interface OptionProps extends StyledOptionProps {
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    children: string;
}

export const Option: React.FC<OptionProps> = ({ children, ...props }) => {
    const [optionRef, setOptionRef] = useState<HTMLButtonElement>()
    const { state: isTooltipVisible, setToFalse, setToTrue } = useBooleanState(false)

    const optionRect = optionRef?.getBoundingClientRect();
    const isTooltipNeeded = optionRef?.scrollWidth > optionRect?.width || null;
    const calcTooltipCoordinates = () => {
        const { y, right } = optionRect;
        return {
            x: right + 10,
            y
        }
    }

    return (
        <>
            <StyledOption
                onMouseEnter={isTooltipNeeded && setToTrue}
                onMouseLeave={isTooltipNeeded && setToFalse}
                {...props}
                ref={(e) => setOptionRef(e)}
            >
                {children}
            </StyledOption>
            {isTooltipNeeded && isTooltipVisible && <Portal calcCoordinates={calcTooltipCoordinates}>
                <Tooltip height={optionRect.height}>{children}</Tooltip>
            </Portal>}
        </>
    )
}