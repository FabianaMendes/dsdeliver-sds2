import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

import Dashboard from '../pages/Dashboard';
import Cardapio from '../pages/Cardapio';

const PrivateRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/cardapio" component={Cardapio} />
        </Switch>
    </Layout>
);

export default PrivateRoutes;