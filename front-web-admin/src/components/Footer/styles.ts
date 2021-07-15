import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 65px;
    background-color: ${props => props.theme.colors.black};
`;

export const FooterText = styled.p`
    color: ${props => props.theme.colors.white};
    font-size: 12px;
    margin-bottom: 10px;
`;

export const MediaLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin: 0 3px;
    }
`;