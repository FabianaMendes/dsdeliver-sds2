import React from 'react';

import { 
    Container, 
    ProductImg,
    Content,
    ProductInfos,
    Title,
    DescriptionTitle,
    Description,
    ButtonsContainer,
    Button
} from './styles';

import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { Product } from '../../types';
import { formatPrice } from '../../utils/helpers';

interface IProductCard {
    product: Product;
}


const ProductCard: React.FC<IProductCard> = ({ product }) => (
    <Container>
        <ProductImg src={product.imageUri}/>

        <Content>
            <ProductInfos>
                <Title>{product.name} - {formatPrice(product.price)}</Title>
                <DescriptionTitle>Descrição</DescriptionTitle>
                <Description>{product.description}</Description>
            </ProductInfos>
            <ButtonsContainer>
                <Button><FaPencilAlt/>Editar</Button>
                <Button><FaRegTrashAlt/>Excluir</Button>
            </ButtonsContainer>
        </Content>

    </Container>
);

export default ProductCard;