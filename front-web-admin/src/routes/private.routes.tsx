import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

import Dashboard from '../pages/Dashboard';

const PrivateRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Dashboard} />
        </Switch>
    </Layout>
);

export default PrivateRoutes;