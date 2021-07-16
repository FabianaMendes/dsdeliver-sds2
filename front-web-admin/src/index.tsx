import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from './hooks/auth';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
