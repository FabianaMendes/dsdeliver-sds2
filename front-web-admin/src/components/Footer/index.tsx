import React from 'react';

import { Container, FooterText, MediaLinks } from './styles';

import youtube from '../../assets/youtube.svg';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/instagram.svg';

const Footer: React.FC = () => {
    return(
        <Container>
            <FooterText>
                Desenvolvido por <strong>Fabiana Mendes </strong> para o projeto DS Delivery da 2ª Semana DevSuperior
            </FooterText>
            <MediaLinks>
                <a href="/"><img src={youtube} alt="youtube" /></a>
                <a href="/"><img src={linkedin} alt="linkedin" /></a>
                <a href="/"><img src={instagram} alt="instagram" /></a>
            </MediaLinks>
        </Container>
    );
}

export default Footer;