import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 100vh; 
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(255, 182, 193, 0.5);

  h1{
    font-size: 24px;
    font-weight: bold;
    color: var(--color-blue-900);
  }
  div{
    display: flex;
    justify-content: space-between;
    gap: 20px;

    button{
        height: 30px;
        width: 80vm;
        max-width: 120px;
        background-color: var(--color-blue-900);
        border: 2px solid var(--color-blue-900);
        border-radius: 4px;
        text-decoration: none;
        text-align: center;
        font-weight: 500;
        font-size: 1.5rem;
        color: var(--color-gray-100);

        cursor: pointer;

    &:hover {
    background-color: var(--color-blue-700);
    border: none;
  }
    }
    
  }
 
  @media(min-width: 768px){
    flex-direction: row;
  }
`;
