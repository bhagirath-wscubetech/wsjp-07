import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from "./Demo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App></App>
    
    <Demo />
  </React.Fragment>
);

{/* Components -> Functional components */ }
// React Fragment