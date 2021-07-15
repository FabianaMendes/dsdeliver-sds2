import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import MainHeader from '../../components/MainHeader';

import { Container, Body, Title, MainBody, Form } from './styles';

import welcome from '../../assets/welcome.svg';
import Button from '../../components/Button';

const Login: React.FC = () => {

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        <Container>
            <MainHeader/>
            <Body>
                <Title>Administre seu negócio <br/> com praticidade!</Title>
                <MainBody>
                    <Form onSubmit={()=>{}}>

                        <Input 
                            id="user" 
                            type="text"
                            placeholder="usuário"
                            onChange={() => {}}
                        />

                        <Input 
                            id="password" 
                            type="password"
                            placeholder="senha"
                            onChange={() => {}}
                        />

                        <Button>ACESSAR</Button>

                    </Form>
                    <img src={welcome} alt="welcome.svg" />
                    
                </MainBody>
            </Body>
            <Footer/>
        </Container>
    );
}

export default Login;