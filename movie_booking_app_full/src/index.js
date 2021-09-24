import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';
import Details from './screens/details/Details';

 ReactDOM.render(<Controller />, document.getElementById('root'));
 registerServiceWorker();
 


