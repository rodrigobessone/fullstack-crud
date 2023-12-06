import styled from 'styled-components';

export const StyledEditModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  background-color: #242529; 
  border-radius: 6px;
  width: 25%; 
  height: 60vh; 

  h2 {
    margin-top: -20px;
  }

  p {
    color: #e67700;
    margin-top: -20px;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }
`;