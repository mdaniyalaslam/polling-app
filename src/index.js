import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from './Routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyRoutes />, document.getElementById('root'));
registerServiceWorker();
