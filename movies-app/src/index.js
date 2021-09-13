import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/header/Header';
import Home from './screens/home/Home';
import Details from './screens/details/Details';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  
   <Details image="https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
