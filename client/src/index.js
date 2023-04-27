import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';



import './components/CSS/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
// import { ThemeProvider } from '@material-ui/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <ThemeProvider theme={theme}>
  <App />
  // </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();