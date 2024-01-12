import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App price={500}/>
    <App price={1000}/>
    <App price={200}/>
    <App price={700}/>
    <App price={1200}/>
  </React.StrictMode>
);