import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Login from './components/Login';
import SignUp from './components/SignUpPage';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/"><h1>MediFide</h1></NavbarBrand>
        </div>
      </Navbar>
      <Login />
      <SignUp />
    </div>
    ); 
  }
}

export default App;
