import styled from "styled-components";

export const StyledRegistrationBackground = styled.div`
    width: 70%;
    height: 70%;
    background-color: #212529;
    opacity: 0.9;
    border: 0.01px solid #868e96;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 15px;
    padding: 20px;
    gap: 20px;

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;

        h1 {
            font-size: 30px;
        }
    }

   
`