import styled from "styled-components";

export const StyledCardList = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center; 
  height: 100px;

   div{
     display: flex;
     flex-direction: column;
     gap: 10px;
     background-color: #242529;
     border: 2px solid #868e96;
   }

  p {
    font-size: 20px;
    color: black;
  }


`