import styled from 'styled-components';

export const StyledCardDiscardButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: red; 
  color: #fff; 
  border: 0.5px solid white;
  border-radius: 6px; 
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s; 
  padding: 10px;

  &:hover {
    background-color: #f03e3e; 
    transform: scale(1.02); 
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.95); 
  }
`;