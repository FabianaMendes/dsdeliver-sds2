import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: row;
    width: 100%;
    
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
`;

export const ProductImg = styled.img`
    margin-right: 45px;
    height: 109px;
    width: 162px;
    border-radius: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    flex: 1;
`;

export const ProductInfos = styled.div`
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 14px;
`;

export const DescriptionTitle = styled.h2`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.gray};
    margin-bottom: 5px;
`;

export const Description = styled.p`
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
`;

export const ButtonsContainer = styled.div`
    display: flex;
    position: absolute;
    right: 15px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    background: none;

    transition: all 0.3s;

    &:hover {
        filter: brightness(1.3);
    }

    :first-child {
        margin-right: 25px;
    }

    > svg {
        margin-right: 5px;
    }
`;
