import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Jumbotron, Button, Card } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    // Router,
    Route
} from 'react-router-dom'

class Creatingpoll extends Component {
    render() {
        return (

            <div>
                <h1 className=''>hello Creatingpoll</h1>

                <div className="card text-center">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>



            </div>
        )
    }
}
export default Creatingpoll;
