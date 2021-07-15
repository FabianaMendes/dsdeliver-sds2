import styled from 'styled-components';

export const Container = styled.button`
    padding: 15px 40px;
    margin: 10px 0;

    border-radius: 10px;

    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }
`;