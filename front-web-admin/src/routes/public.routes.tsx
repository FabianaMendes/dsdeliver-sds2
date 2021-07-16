import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

const PublicRoutes: React.FC = () => (
    <Switch>
        <Route path="/" component={Login} />
    </Switch>
);

export default PublicRoutes;