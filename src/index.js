import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './styles/stars/stars.css';
import './styles/stars/stars-1.css';
import './styles/stars/stars-2.css';
import './styles/stars/stars-3.css';
import './i18n';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
    <App />
  </React.StrictMode>
);
