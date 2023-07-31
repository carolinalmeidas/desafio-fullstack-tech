import styled from "styled-components";


export const StyledEditUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    gap: 20px;
    
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 60px;
        h2{
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        color: var(--color-blue-900);
        text-align: center;
    }

    }


    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 20px;  
    }

`