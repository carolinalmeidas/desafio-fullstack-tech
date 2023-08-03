import styled from "styled-components";


export const StyledRegister = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    min-height: 100vh; 
    gap: 20px;
    
    div{
        display: flex;
        gap: 30px;
        h2{
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        color: var(--color-blue-900);
        text-align: center;
        }
        button{
            height: 30px;
            max-width: 120px;
            background-color: var(--color-blue-900);
            border: 2px solid var(--color-blue-900);
            border-radius: 4px;
            text-decoration: none;
            text-align: center;
            font-weight: 500;
            font-size: 15px;
            color: var(--color-gray-100);

            cursor: pointer;

        &:hover {
            background-color: var(--color-blue-700);
            border: none;
        }
        }
    }


    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;  
    }

`