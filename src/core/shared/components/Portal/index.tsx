import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";

import { ContentBox } from './styled'

export interface Coordinates {
    x: number,
    y: number,
}

type calcCoordinate = () => Coordinates

interface PortalProps {
    noOverlay?: boolean;
    children: JSX.Element | JSX.Element[];
    calcCoordinates: calcCoordinate;
    fixedContent?: boolean;
}



export const Portal: React.FC<PortalProps> = ({ fixedContent, calcCoordinates, children }) => {
    const [coordinates, setCoordinates] = useState<Coordinates>(null);

    useEffect(() => {
        const updateCoordinates = () => setCoordinates(calcCoordinates)
        updateCoordinates();
        if(!fixedContent) window.addEventListener('resize', updateCoordinates)
        return () => fixedContent && window.removeEventListener('resize', updateCoordinates)
    }, [calcCoordinates, fixedContent])

    return coordinates && createPortal(
        <ContentBox fixed={fixedContent} { ...coordinates } >
            {children as any}
        </ContentBox>,
    document.body
)
}