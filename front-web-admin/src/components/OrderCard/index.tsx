import React from 'react';

import { Container, Tag } from './styles';
import { Order } from '../../types';
import { formatPrice, dateFromNow } from '../../utils/helpers';


interface IOrderCard {
  order: Order;
}


const OrderCard: React.FC<IOrderCard> = ({ order }) => (
  <Container>
    <Tag color={order.status==='DELIVERED' ? "#9E9E9E" : "#DA5C5C"} />
    <div>
      <strong>Pedido n° {order.id}</strong>
      <small>{dateFromNow(order.moment)}</small>
    </div>
    <h3>{formatPrice(order.total)}</h3>
  </Container>
);

export default OrderCard;