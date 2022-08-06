import styled from 'styled-components';

export const Input = styled.input`
  padding: 0 6px;
  width: 100%;
  height: 24px;
  
  font-size: 16px;
  line-height: 24px;
  color: black;
  
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
  }
`