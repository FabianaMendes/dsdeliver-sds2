import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import MainHeader from '../../components/MainHeader';

import { Container, Body, Title, MainBody, Form } from './styles';

import welcome from '../../assets/welcome.svg';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login } = useAuth();

    return(
        <Container>
            <MainHeader/>
            <Body>
                <Title>Administre seu negócio <br/> com praticidade!</Title>
                <MainBody>
                    <Form onSubmit={()=>login(user, password)}>

                        <Input 
                            id="user" 
                            type="text"
                            placeholder="usuário"
                            onChange={(e) => setUser(e.target.value)}
                        />

                        <Input 
                            id="password" 
                            type="password"
                            placeholder="senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button type="submit">ACESSAR</Button>

                    </Form>
                    <img src={welcome} alt="welcome.svg" />
                    
                </MainBody>
            </Body>
            <Footer/>
        </Container>
    );
}

export default Login;