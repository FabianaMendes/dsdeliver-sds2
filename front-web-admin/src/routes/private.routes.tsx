import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

import Dashboard from '../pages/Dashboard';
import Menu from '../pages/Menu';
import Orders from '../pages/Orders';
import Sales from '../pages/Sales';

const PrivateRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/cardapio" component={Menu} />
            <Route exact path="/pedidos" component={Orders} />
            <Route exact path="/faturamento" component={Sales} />
        </Switch>
    </Layout>
);

export default PrivateRoutes;