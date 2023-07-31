import styled from 'styled-components';

export const StyledButton = styled.button`
      
        width: 60vw;
        height: 50px;
        max-width: 100px;

        background-color: var(--color-blue-900);

        border: 2px solid var(--color-blue-900);
        border-radius: 4px;

        text-decoration: none;
        text-align: center;
        padding: 10px;

        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        color: var(--color-gray-100);

        cursor: pointer;

    &:hover {
    background-color: var(--color-blue-700);
  }
  
`

export const StyledButtonLogout = styled.button`
        height: 30px;
        width: 100px;
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
  }
`


export const StyledButtonHeader = styled.button`
        height: 30px;
        max-width: 120px;
        background-color: var(--color-blue-700);
        border: 2px solid var(--color-blue-700);
        border-radius: 4px;
        text-decoration: none;
        text-align: center;
        font-weight: 500;
        font-size: 15px;
        color: var(--color-gray-100);

        cursor: pointer;

    &:hover {
    background-color: var(--color-blue-900);
  }
  
`
export const StyledButtonClose = styled.button`
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        background-color: var(--color-grey-2);
        border: none;
        text-decoration: none;
        color: var(--color-blue-900);
        cursor: pointer;
  
`