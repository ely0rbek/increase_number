import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Counter from './Js/Counter';
import Deleted from './Js/delete_post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Deleted /> */}
    {/* <Counter /> */}
  </React.StrictMode>
);
