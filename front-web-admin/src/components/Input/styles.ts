import styled from 'styled-components';

export const Container = styled.input`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};

    width: 100%;
    height: 55px;

    padding: 15px 20px;
    margin: 10px 0 20px;

    font-size: 20px;
    border-radius: 10px;

    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

    ::placeholder {
        color: ${props => props.theme.colors.gray};
    }
`;