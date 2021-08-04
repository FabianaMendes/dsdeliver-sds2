import React from 'react';

import { 
    Container,
    TitleContainer,
    Controllers 
} from './styles';

interface IContentHeaderProps {
    title: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, children }) => (
    <Container>
        <TitleContainer>
            <h1>{title}</h1>
        </TitleContainer>
        <Controllers>
            {children}
        </Controllers>
    </Container>
);

export default ContentHeader;