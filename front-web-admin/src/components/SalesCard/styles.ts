import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);

    margin-bottom: 15px;
    padding: 15px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
        font-size: 20px;
    }

`;