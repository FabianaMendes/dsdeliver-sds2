import styled from 'styled-components';

export const Container = styled.div`
`;

export const Products = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`;

export const InputBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.25);

    height: 40px;
    width: 340px;

    padding: 0 15px 0 30px;
    margin-right: 21px;

    border-radius: 10px;
    
    > svg {
        font-size: 12px;
        color: ${props => props.theme.colors.gray};
    }
`;

export const Input = styled.input`
    flex: 1;
    font-size: 14px;
    color: ${props => props.theme.colors.black};

    ::placeholder{
        color: ${props => props.theme.colors.gray};
    }
`;

export const Button = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    
    font-size: 14px;
    font-weight: bold;

    height: 40px;
    width: 78px;
    border-radius: 10px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s;

    &:hover {
        filter: brightness(1.1);
    }

    > svg {
        font-size: 15px;
    }
`;

