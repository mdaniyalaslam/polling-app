import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import *as firebase from "firebase";


import './index.css';
// import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import MyRoutes from './Routes';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDQbQtFRvu5-W41ht-SdXHCph5sD5-sqY",
    authDomain: "fir-4c8f9.firebaseapp.com",
    databaseURL: "https://fir-4c8f9.firebaseio.com",
    projectId: "fir-4c8f9",
    storageBucket: "fir-4c8f9.appspot.com",
    messagingSenderId: "1092056266627"
  };
  firebase.initializeApp(config);


ReactDOM.render(<MyRoutes />, document.getElementById('root'));
registerServiceWorker();
