import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import { Provider } from 'react-redux';
import central_store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={central_store}>
    <Main>
      <App />
    </Main>
  </Provider >
);