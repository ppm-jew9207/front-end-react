import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppContextProvider } from './helpers/AppContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
