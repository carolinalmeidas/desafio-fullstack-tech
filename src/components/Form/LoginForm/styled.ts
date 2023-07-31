import styled from "styled-components";


export const StyledLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    min-height: 100vh; 
    gap: 20px;
    
    h2{
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        color: var(--color-blue-900);
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 20px;  
    }

`