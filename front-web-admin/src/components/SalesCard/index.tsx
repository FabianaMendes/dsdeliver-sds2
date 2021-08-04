import React from 'react';

import { Container } from './styles';

interface ISalesCard {
    month: string;
    year: number | string;
    total: number | string;
}


const SalesCard: React.FC<ISalesCard> = ({ month, year, total }) => {
    return (
        <Container>
            <h3>{month} {year}</h3>
            <h2>R$ {total}</h2>
        </Container>
    );
}

export default SalesCard;