import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 50px;
`;

export const TitleContainer = styled.div`
    > h1 {
        color: ${props => props.theme.colors.black};
        font-size: 36px;

        ::after {
            content: '';
            display: block;
            width: 58px;
            border-bottom: 10px solid ${props => props.theme.colors.primary};
        }
    }
`;

export const Controllers = styled.div`
    display: flex;
    align-items: center;
`;