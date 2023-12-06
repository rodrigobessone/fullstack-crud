import styled from "styled-components";

export const StyledEditForm = styled.form`
  background-color: #212529;
  padding: 10px;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 40%;

  .custom-input {
    width: 90%;
    background-color: #343a40;
    border: 0.05px solid white;
    padding: 15px;
    border-radius: 6px;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    color: grey;
    transition: border-color 0.3s;
    font-size: 15px;
  }

  label {
    color: white;
    display: flex;
    align-items: start;
    justify-content: start;
    width: 90%;
    margin-bottom: 17px;
  }
`;
