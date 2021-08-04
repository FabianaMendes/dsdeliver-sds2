import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import ContentHeader from '../../components/ContentHeader';

import { Container, Products, InputBlock, Input, Button } from './styles';

import { MdAdd } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { fetchProducts } from '../../api';
import { Product } from '../../types';

const Menu: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
    }, [])


    return (
        <Container>
            <ContentHeader title="Cardápio" >
                <InputBlock>
                    <Input type="text" placeholder="buscar..."/>
                    <FaSearch />
                </InputBlock>
                <Button type="submit">
                    <MdAdd />
                    NOVO
                </Button>
            </ContentHeader>
            
           
            <Products>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </Products>
           
        </Container>
    );
}

export default Menu;