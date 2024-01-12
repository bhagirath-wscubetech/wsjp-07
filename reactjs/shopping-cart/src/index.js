import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductListing from './ProductListing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ProductListing/>
  </React.StrictMode>
);