import React, { Component } from 'react';
import { Button,  Navbar, NavbarBrand } from 'reactstrap';
import Navbarr from './NavbarComponent';
import Appointment from './CurrentAppComponent';
import Emergency from './EmergencyComponent';
import Footer from './FooterComponent';
import BAButton from './BookAppointmentButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
          <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="col-11">
                                <Appointment />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <Emergency />
                        </div>
                    </div>
                </div>
                <BAButton/>
                
               
                <Footer />
          </React.Fragment>
        );
    }
}

export default Dashboard;