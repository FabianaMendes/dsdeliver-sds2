import React from 'react';

import { Grid } from './styles';

import Aside from '../Aside';
import MainHeader from '../MainHeader';
import Content from '../Content';

const Layout: React.FC = ({ children }) => (
    <Grid>
        <MainHeader />
        <Aside />
        <Content>
            {children} 
        </Content>
    </Grid>
);

export default Layout;