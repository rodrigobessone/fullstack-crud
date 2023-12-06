import styled from "styled-components";

export const StyledInputContainer = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: white;
    width: 100%;
    
   
   input{
    background-color: #343a40; 
    border: 0.05px solid white; 
    padding: 15px; 
    border-radius: 5px; 
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    color: white;
    transition: border-color 0.3s;
    font-size: 15px;

    &:hover {
      background-color: #e67700;
      opacity: 0.5;
    }

   }

   input::placeholder {
    color: white;
    font-size: 15px;
    }

    input::label {
      display: flex;
      align-items: start;
      justify-content: start;
    }

`