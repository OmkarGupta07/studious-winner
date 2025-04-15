import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './index';
import { Pizza } from './Pizza';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Pizza val={'something is going'} />
  </React.StrictMode>
);
 