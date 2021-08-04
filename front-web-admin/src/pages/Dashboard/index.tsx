import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => (
    <Container>
        <ContentHeader title="Dashboard">
            <h1>Botões</h1>
        </ContentHeader>
        <Content>
            <h1> Conteúdo </h1>
        </Content>
    </Container>
);

export default Dashboard;