import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;

    color: ${props => props.theme.colors.black};

    padding: 30px 35px;

    height: calc(100vh - 60px);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.white};
        border-radius: 10px;
    } 
`;