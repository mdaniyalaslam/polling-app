import React from 'react';

import {
    BrowserRouter as Router,
    // Router,
    Route
} from 'react-router-dom'

import App from './App';
import Creatingpoll from './Creatingpoll';
import Signup from './Signup';
import Header from './Header';

import CreateBrowserHistory from 'history/createBrowserHistory';
const customHistory = CreateBrowserHistory();




const MyRoutes = () => (
    <Router history = {customHistory}>
        <div>
            <Header/>
            <Route exact path="/" component={App} />
            <Route  path="/creatingpoll" component={Creatingpoll} />
            <Route  path="/signup" component={Signup} />


        </div>
    </Router>

)
export default MyRoutes;