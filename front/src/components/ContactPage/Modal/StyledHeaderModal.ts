import styled from 'styled-components'


export const StyledHeaderModal = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 8px;
    padding-right: 20px;
    width: 100%;
    height: 80px;
    background-color: #212529;;
    border-top-left-radius: 8px; 
    border-top-right-radius: 8px; 
    margin-bottom: 20px;
    
    h2{
        font-size: 30px;
        color: white;
    }

    p {
        font-size: 25px;
        color: #e67700;
        cursor: pointer;
    }
`