import React, { Component } from 'react';
import { Button,  Navbar, NavbarBrand } from 'reactstrap';
import Navbarr from './NavbarComponent';
import Appointment from './CurrentAppComponent';
import Emergency from './EmergencyComponent';
import Footer from './FooterComponent';

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
                
                
                <Button className="container font-weight-bold mt-5 " color="danger" size="lg" block>
                    <h3>Book Appointment Now!</h3>
                    <i class="fa fa-plus-circle fa-2x ml-3" aria-hidden="true"></i>
                </Button>
                <Footer />
          </React.Fragment>
        );
    }
}

export default Dashboard;