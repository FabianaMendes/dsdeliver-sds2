import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;

    background-color: ${props => props.theme.colors.black};
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.div`
    display: flex;
    padding: 21px 0 0 38px;

    img {
        margin-right: 10px;
    }
`;

export const LogoImg = styled.img`
`;

export const Title = styled.p`
    font-size: 22px;
    color: ${props => props.theme.colors.white};
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 75px 0 0 50px;
    flex: 1;
`;

export const MenuLink = styled.a`
    font-size: 22px;
    color: ${props => props.theme.colors.white};

    margin: 10px 0;

    transition: opacity .3s;

    &:hover {
        opacity: 0.6;
    }

    > svg {
        font-size: 18px;
        color: ${props => props.theme.colors.primary};

        margin-right: 13px;
    }
`;

export const MenuLinkButton = styled.button`
    background: none;
    font-size: 22px;
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover {
        opacity: 0.6;
    }

    > svg {
        font-size: 18px;
        color: ${props => props.theme.colors.primary};

        margin-right: 13px;
    }
`;