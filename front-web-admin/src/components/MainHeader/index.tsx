import React from 'react';

import { Container, Logo, LogoText } from './styles';

import logo from '../../assets/logo.svg';

const MainHeader: React.FC = () => {
    return(
        <Container>
            <Logo>
                <img src={logo} alt="DS Delivery" />
                <LogoText>DS Delivery</LogoText>
            </Logo>
        </Container>
    );
}

export default MainHeader;