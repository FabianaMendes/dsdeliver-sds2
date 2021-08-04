import React from 'react';
import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import standard from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={standard}>
    <GlobalStyles/>
    <Routes/>
  </ThemeProvider>
);

export default App;
