import styled from 'styled-components'


export const StyledHeaderToggleButton = styled.button`
  background-color:#d9480f;
  color: black;
  padding: 13px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  align-items: center;
  width: 150px;
  height: 50px;
  opacity: 1;

   &:hover {
    background-color: #f08c00; 
    transform: scale(1.05); 
  }

  &:focus {
    outline: none; 
  }

  &:active {
    transform: scale(0.95); 
  }
`