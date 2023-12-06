import styled from "styled-components";

export const StyledContactList = styled.div`
  background-color: rgba(240, 240, 240, 0.6);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; 
  max-height: 500px; 

  h3 {
    margin-top: -45px;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  
  &::-webkit-scrollbar-thumb {
    background-color: #f76707; 
    border-radius: 6px;
  }

  
  &::-webkit-scrollbar-track {
    background-color: rgba(240, 240, 240, 0.6);
    border-radius: 6px;
  }
  padding: 10px;
  border-radius: 6px;
  color: white;
  margin-bottom: 30px;

  div {
    margin-bottom: 30px;
  }

  h3 {
    font-size: 50px;
    color: white;
    text-align: left;
  }
`;