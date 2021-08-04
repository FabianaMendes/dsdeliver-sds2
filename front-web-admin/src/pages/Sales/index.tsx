import React, { useEffect, useMemo, useState } from 'react';
import { isTemplateTail } from 'typescript';
import { fetchOrders } from '../../api';

import ContentHeader from '../../components/ContentHeader';
import SalesCard from '../../components/SalesCard';

import { Order } from '../../types';
import { Months } from '../../utils/helpers';

import { Container, TotalSales, TotalBox, Content } from './styles';


const Sales: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const data = await fetchOrders();
                const response = await data;
                setOrders(response.data);
                console.log("RESPONSE.DATA=>"+response.data);
            } catch(error) {
                console.log("Erro" + error.message);
            }
        }
        getOrders();
    }, []);


    const months = useMemo(() => {
        return Months.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        });
    },[]);

    
    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        orders.forEach(item => {
            const date = new Date(item.moment);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        });
    },[orders]);

  



    return (
        <Container>
            <ContentHeader title="Faturamento">
                <TotalSales>
                    <h5>TOTAL DAS VENDAS</h5>
                    <TotalBox>R$ 40.152,45</TotalBox>
                </TotalSales>
            </ContentHeader>

            <Content>
                <SalesCard 
                    month="Julho"
                    year="2021"
                    total="1.170,30"
                />
            </Content>
        </Container>
    );
}

export default Sales;