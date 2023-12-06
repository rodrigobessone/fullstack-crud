import styled from 'styled-components';
import backgroundImage from '../../../assets/Bessone-logo-black.jpg'; // Ajuste do caminho

export const StyledHomePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; /* Centraliza a imagem */
  height: 100vh;
  padding: 20px;
  border-radius: 6px;
  margin: auto;
  width: 100vw%;
`;
