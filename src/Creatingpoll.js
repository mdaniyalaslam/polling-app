import React, { Component } from 'react';
import firebase from "firebase";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Jumbotron, Button, Card } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    // Router,
    Route
} from 'react-router-dom'

class Creatingpoll extends Component {
    constructor(props){
        super(props)
        this.state = {
            pollname : '',
            question : '',
            a: '',
            b: '',
            c: '',
            d: ''
        }
    }

    updateFormState(ev){

        // let currentState = {}
        // currentState[formLabel] = ev.target.value;
        this.setState({[ev.target.name]:ev.target.value});
        // console.log(currentState)

    }
    saveToFirebase() {
        console.log(this.state, 'states');
        let db = firebase.database();
        let that = this;
        db.ref('/polls/' + this.state.pollName + '/').once('value', function (snapshot) {
            if (snapshot.val() === null) {
                // console.log(this,'this',that.state.a, 'that');
                that.setState({
                    a: { option: that.state.a, vote: 0 },
                    b: { option: that.state.b, vote: 0 },
                    c: { option: that.state.c, vote: 0 },
                    d: { option: that.state.d, vote: 0 }
                })
                // console.log(that.state);
                let thatIs = that;
                db.ref('/polls/' + that.state.pollName + '/').set(that.state)
                    .then((success) => {
                        console.log(success, 'success');
                        thatIs.setState({
                            pollName: '',
                            question: '',
                            a: '',
                            b: '',
                            c: '',
                            d: ''
                        })
                    })
                    .catch((error) => {
                        console.log(error, 'error');
                    })
            }
            else {
                alert('This poll name is already exist, kindly change the poll name.');
            }
        })


    }

    render() {
        return (
            <div>
                <div className="container">
                    <form className="form-horizontal" role="form">
                        <fieldset>
                            <legend>Creating Poll</legend>
                            <div className="form-group">
                                <label className="col-sm-3 control-label" htmlFor="poll-name">Poll Name</label>
                                <div className="col-sm-6">
                                    <input type="text" name='pollname' className="form-control" value={this.state.pollname} onChange={this.updateFormState.bind(this)} id="pollname" placeholder="Write Poll Name" />
                                </div> 
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label" htmlFor="poll">Question:</label>
                                <div className="col-sm-6">
                                    <textarea className="form-control" name='question' value={this.state.question} onChange={this.updateFormState.bind(this)} rows='3' placeholder='Write Poll Here...' />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label" htmlFor="">Options:</label>
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <input type="text" className="form-control" name="a" onChange={this.updateFormState.bind(this)} id="a" placeholder="Option-1" />
                                        </div>
                                        <div className="col-xs-4">
                                            <input type="text" className="form-control" name="b" onChange={this.updateFormState.bind(this)} id="b" placeholder="Option-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label" htmlFor="expiry-month"></label>
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <input type="text" className="form-control" name="c" onChange={this.updateFormState.bind(this)} id="c" placeholder="Option-3" />
                                        </div>
                                        <div className="col-xs-4">
                                            <input type="text" className="form-control" name="d" onChange={this.updateFormState.bind(this)} id="d" placeholder="Option-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                    <button type="submit" onClick={this.saveToFirebase.bind(this)} className="btn btn-success">Create</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>



            </div>
        )
    }
}
export default Creatingpoll;
