import styled from 'styled-components';

export const Container = styled.div``;

export const TotalSales = styled.div`
    > h5 {
        text-align: center;
        color: ${props => props.theme.colors.primary};
        font-size: 14px;
        margin-bottom: 7px;
    }
`;

export const TotalBox = styled.div`
    background-color: ${props => props.theme.colors.primary};
    padding: 5px 18px;
    border-radius: 10px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div``;