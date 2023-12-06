import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  width: 30%;
  height: 70%;
  background-color: #212529;
  border: 0.01px solid #868e96;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  backdrop-filter: blur(50px);
`;
