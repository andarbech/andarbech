import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import reportWebVitals from './reportWebVitals';
const baseUrl = document.getElementsByTagName('base')[0]?.getAttribute('href');
const rootElement = document.getElementById('root');
rootElement.style ="#45c2cc"
const root = createRoot(rootElement);
root.render(
  <BrowserRouter basename={baseUrl}>
        <FluentProvider theme={teamsLightTheme}>
      <App />
    </FluentProvider>
  </BrowserRouter>
);
reportWebVitals();
