import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 60px;
    background-color: ${props => props.theme.colors.primary};

    top: 0;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoText = styled.h1`
    margin-left: 12px;
    color: ${props => props.theme.colors.white};
    font-size: 24px;
`;