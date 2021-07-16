import React from 'react';

import { Grid } from './styles';

const Layout: React.FC = ({ children }) => (
    <Grid>
       {children} 
    </Grid>
);

export default Layout;