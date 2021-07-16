import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 65px;
    background-color: ${props => props.theme.colors.black};
    padding: 5px;
`;

export const FooterText = styled.p`
    color: ${props => props.theme.colors.white};
    font-size: 12px;
    margin-bottom: 10px;
    text-align: center;
`;

export const MediaLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        margin: 0 3px;
        transition: opacity .3s;
    }

    a:hover{
        opacity: 0.6;
    }
`;