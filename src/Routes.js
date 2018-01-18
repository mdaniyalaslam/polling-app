import React from 'react';

import {
    BrowserRouter as Router,
    // Router,
    Route
} from 'react-router-dom'

import App from './App';



const MyRoutes = () => (
    <Router>
        <div>
            <Route path="/" component={App} />
        </div>
    </Router>

)
export default MyRoutes;