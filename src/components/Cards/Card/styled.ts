import styled from "styled-components";

export const StyledList = styled.li`
        list-style: none;
        width: 250px;
        height: 100px;
        border: 1px solid;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        align-items: center;

        h2{
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        color: var(--color-blue-900);
        text-align: center;
        }
        span{
            font-weight: 300;
            font-size: 15px;
            text-align: center;
        }
        p{
            font-weight: 300;
            font-size: 15px;
            text-align: center;
        }

        .buttons{
            display: flex;
            gap: 10px;

            button{               
                height: 20px;
                width: 100px;
                background-color: var(--color-blue-900);
                border: 2px solid var(--color-blue-900);
                border-radius: 4px;
                text-decoration: none;
                text-align: center;
                font-size: 12px;
                color: var(--color-gray-100);
                cursor: pointer;

            &:hover {
                background-color: var(--color-blue-700);
            }
        }
    }
`;
