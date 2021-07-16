import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { useAuth } from '../hooks/auth';

import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

const Routes: React.FC = () => {
    const { logged } = useAuth();

    return (
        <BrowserRouter>
            { logged ? <PrivateRoutes/> : <PublicRoutes/> }
        </BrowserRouter>
    )
};

export default Routes;