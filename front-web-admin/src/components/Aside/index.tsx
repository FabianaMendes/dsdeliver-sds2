import React from 'react';
import Footer from '../Footer';

import { Container, Header, LogoImg, Title, MenuContainer, MenuLink, MenuLinkButton } from './styles';

import { MdDashboard, MdExitToApp } from 'react-icons/md';
import { IoReader, IoCartOutline } from 'react-icons/io5';
import { FaDollarSign } from 'react-icons/fa';

import logo from '../../assets/favicon.svg'
import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
    const { logout } = useAuth();
    const { user } = useAuth();

    return (
        <Container>
            <Header>
                <LogoImg src={logo} alt="favicon.svg" />
                <Title><strong>Olá, </strong>{user}!</Title>
            </Header>

            <MenuContainer>
                <MenuLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuLink>
                <MenuLink href="/cardapio">
                    <IoReader />
                    Cardápio
                </MenuLink>
                <MenuLink href="/">
                    <IoCartOutline />
                    Pedidos
                </MenuLink>
                <MenuLink href="/">
                    <FaDollarSign />
                    Faturamento
                </MenuLink>
                <MenuLinkButton onClick={logout}>
                    <MdExitToApp />
                    Sair
                </MenuLinkButton>
            </MenuContainer>
            
            <Footer />
        </Container>
    );
}

export default Aside;