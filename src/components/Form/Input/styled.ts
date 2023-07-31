import styled from "styled-components";

export const StyledInput = styled.fieldset`
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        padding: 0;
        margin: 0;
        gap: 10px;
        
        label{
        display: block;
        width: 100%;
        max-width: 100px;
        }

        input{
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px; 
        height: 30px;
        }
        p{
        color: #ff0000;
        margin-top: 5px;
        }
`;
