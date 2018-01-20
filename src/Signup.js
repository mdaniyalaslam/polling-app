import React, { Component } from 'react';
import firebase from "firebase";

class Signup extends Component {

    mainContainer = {
        width: '30%',
        margin: '0 auto',
        border: '2px solid',
        padding: '15px',
        borderRadius: '10px',
        marginTop: '10px'
    }

    routeToCreate() {
        this.props.history.push('/creatingpoll')
    }
    render() {
        return (
            <div style={this.mainContainer} className="field-set container form-signin">
                {/* <img class="s-heading login-img" src="img/login.png" alt="" /> */}

                <h2 className="form-signin-heading s-heading">Please signUp Here</h2>

                <label for="inputFirstName" className="sr-only">First Name</label>
                <input type="text" id="studentFirstName" className="form-control" placeholder="First Name" required autofocus />

                <label for="inputLastName" className="sr-only">Last Name</label>
                <input type="text" id="studentLastName" className="form-control" placeholder="Last Name" required autofocus />

                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="studentEmail" className="form-control" placeholder="Email address" required autofocus />

                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="studentPass" className="form-control" placeholder="Password" required />

                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <div>
                    Already have an account ?
                    <a href="studentsLogin.html">Click Here</a>
                </div>
                <button className="background btn-background btn btn-lg btn-primary btn-block" onclick="signup()" type="submit">Sign up</button>

            </div>

        );
    }
}

export default Signup;




