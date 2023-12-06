import styled from "styled-components";

export const StyledFormModal = styled.form`
  background-color: #212529;
  padding: 10px;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  .custom-input {
    width: 100%;
    background-color: #343a40;
    border: 0.05px solid white;
    padding: 15px;
    border-radius: 5px;
    height: 70%;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 15px;
  }

  label {
    color: white;
    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    margin-bottom: 15px;
  }
`;
