import React, { Component } from 'react';
import Navbarr from './NavbarComponent';
import SignUp from './SignUpComponent';
import Login from './LoginComponent';

class LoginPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
          <React.Fragment>
                <Navbarr />
                <Login />
                <SignUp />
          </React.Fragment>
        );
    }
}

export default LoginPage;