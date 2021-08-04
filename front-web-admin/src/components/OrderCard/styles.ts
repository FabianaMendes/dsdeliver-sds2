import styled from 'styled-components';

interface ITagProps {
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);

    list-style: none;

    margin-bottom: 15px;
    padding: 8px 15px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        opacity: 0.7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 15px;
    }

    > div strong {
        font-size: 20px;
        color: ${props => props.theme.colors.black};
    }

    > div small {
        font-size: 14px;
        color: ${props => props.theme.colors.gray};
    }

    > h3 {
        font-size: 24px;
        color: ${props => props.theme.colors.black};
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 14px;
    height: 31px;

    background-color: ${props => props.color};
    position: absolute;
    left: 0;
`;