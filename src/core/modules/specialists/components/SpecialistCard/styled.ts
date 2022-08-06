import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  padding: 10px 20px;
  width: 100%;
  height: 140px;
  
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, .4);
  
  background-color: rgba(255, 255, 255, .3);
  backdrop-filter: blur(7px);
  box-sizing: border-box;
`

export const AvatarPlug = styled.div`
  width: 80px;
  height: 80px;
  
  border: none;
  border-radius: 8px;
  background-color: #c1c1c1;
`

export const RowBlock = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 30px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`

export const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
`