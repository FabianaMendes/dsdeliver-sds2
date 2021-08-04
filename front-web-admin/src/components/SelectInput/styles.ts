import styled from 'styled-components';

export const Container = styled.div`
    > select {
        padding: 7px 10px;
        margin-left: 13px;
        border-radius: 5px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
        font-size: 16px;
        color: ${props => props.theme.colors.black};
    }
`;