import React, { useEffect, useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import OrderCard from '../../components/OrderCard';

import { Months } from '../../utils/helpers';
import { Order } from '../../types';

import { Container, Content, Filters } from './styles';
import { fetchOrders } from '../../api';


const Orders: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [newOrders, setNewOrders] = useState<Order[]>([]);
    const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());
    const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth()+1);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [selectedStatus, setSelectedStatus] = useState(['DELIVERED', 'PENDING']);


    const handleStatusClick = (status: string) => {
        const alreadySelected = selectedStatus.findIndex(item => item === status);
        if(alreadySelected >= 0){
            const filtered = selectedStatus.filter(item => item !== status);
            setSelectedStatus(filtered);
        } else {
            setSelectedStatus((prev) => [...prev, status]);
        }
    };


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


    useMemo(() => {
        const filteredOrders = orders.filter(item => {
            const date = new Date(item.moment);
            const day = date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();
            console.log("Orders=>"+orders)

            return day === selectedDay && month === selectedMonth && year === selectedYear && selectedStatus.includes(item.status);
        })

        setNewOrders(filteredOrders);
        console.log("FilteredOrders=>"+[filteredOrders]);
         
    },[orders, selectedDay, selectedMonth, selectedYear, selectedStatus]);


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

        
    const days = useMemo(() => {
        let daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        let newListOfDays: number[] = [];

        for(let i=1; i<=daysInMonth; i++) {
            newListOfDays.push(i)
        }

        return newListOfDays.map(day => {
            return {
                value: day,
                label: day
            }
        });
    },[selectedYear, selectedMonth]);



    return (
        <Container>
            <ContentHeader title="Pedidos">
                <SelectInput 
                    options={days}
                    defaultValue={selectedDay}
                    onChange={(event) => 
                        setSelectedDay(Number(event.target.value))
                    }
                />
                <SelectInput 
                    options={months}
                    defaultValue={selectedMonth}
                    onChange={(event) => 
                        setSelectedMonth(Number(event.target.value))
                    }
                />
                <SelectInput 
                    options={years}
                    defaultValue={selectedYear}
                    onChange={(event) => 
                        setSelectedYear(Number(event.target.value))
                    }
                />
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-delivered 
                    ${selectedStatus.includes('DELIVERED') && 'tag-selected'}`}
                    onClick={() => handleStatusClick('DELIVERED')}
                >
                    Entregues
                </button>

                <button 
                    type="button"
                    className={`tag-filter tag-filter-pending
                    ${selectedStatus.includes('PENDING') && 'tag-selected'}`}
                    onClick={() => handleStatusClick('PENDING')}
                >
                    Não entregues
                </button>
            </Filters>

            <Content>
                {newOrders.length === 0 ?
                    <p>Não há registros para os parâmetros selecionados</p>
                : newOrders.map(order => (
                    <OrderCard 
                        key={order.id}
                        order={order}
                    />
                ))}
            </Content>
        </Container>
    );
}

export default Orders;