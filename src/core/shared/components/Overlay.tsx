import React from 'react';
import styled from "styled-components";

import { Portal } from "./Portal";

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.46);
`

interface OverlayProps {
    onClose: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ onClose }) => (
    <Portal fixedContent calcCoordinates={() => ({ x: 0, y: 0 })}>
        <StyledOverlay onClick={onClose} />
    </Portal>
)