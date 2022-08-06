import styled from 'styled-components';
import { glassmorphism } from "../../styled";

export interface OptionProps {
  selected: boolean;
}

const optionsWidth = 150;
const optionPadding = `
  padding: 6px 4px;
`


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  width: ${optionsWidth}px;
`

export const Preview = styled.button`
  padding: 4px 2px;
  ${glassmorphism()};
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ContentBox = styled.div`
  height: 200px;
  overflow-y: scroll;
  overflow-x: visible;
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4px 0;
  width: ${optionsWidth}px;
  
  ${glassmorphism()}
  
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Option = styled.button<OptionProps>`
  position: relative;
  ${optionPadding};
  width: 100%;
  border: none;
  
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;

  ${props => props.selected && glassmorphism({ opacity: .3 })}
  &:hover {
    ${glassmorphism({ opacity: .3 })}
  }
`

export const Tooltip = styled.div<{ height: number }>`
  height: ${props => props.height};
  font-size: 14px;
  background-color: white;
  ${optionPadding};
  box-sizing: border-box;
`