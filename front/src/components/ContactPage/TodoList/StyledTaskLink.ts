import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTaskLink = styled(Link)`
  width: 100px;
  height: 50px;
  background-color: #d9480f; 
  color: black;
  border: none;
  border-radius: 5px; 
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s; 
  font-size: 15px;


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
`;