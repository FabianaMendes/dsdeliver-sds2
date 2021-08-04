import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
    > p {
        text-align: center;
        padding-top: 20px;
    }
`;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    .tag-filter {
        font-size: 18px;
        font-weight: bold;
        color: ${props => props.theme.colors.black};
        background: none;
        margin: 0 10px;
        opacity: 0.4;
        transition: all 0.3s;

        &:hover{
            opacity: 0.7;
        }
    }

    .tag-filter-delivered::after {
        content: '';
        display: block;
        width: 55px;
        margin: 5px auto;
        border-bottom: 10px solid ${props => props.theme.colors.gray};
    }

    .tag-filter-pending::after {
        content: '';
        display: block;
        width: 55px;
        margin: 5px auto;
        border-bottom: 10px solid ${props => props.theme.colors.primary};
    }

    .tag-selected {
        opacity: 1;
    }
`;