import styled from "styled-components";

import { Coordinates } from '.'

interface ContentBoxProps extends Coordinates{
    fixed: boolean
}

export const ContentBox = styled.div<ContentBoxProps>`
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  
  width: fit-content;
`