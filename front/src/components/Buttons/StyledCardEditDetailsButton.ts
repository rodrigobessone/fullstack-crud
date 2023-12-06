import styled from 'styled-components';

export const StyledCardEditDetailsButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #3b5bdb; 
  color: white;
  border: 0.5px solid white;
  border-radius: 5px; 
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s; 

  &:hover {
    background-color: #5c7cfa; 
    transform: scale(1.02); 
  }

  &:focus {
    outline: none; 
  }

  &:active {
    transform: scale(0.95); 
  }
`;
