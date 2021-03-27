import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Navbarr from './NavbarComponent';

class Appointment extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
          <React.Fragment>
                
                        <Card>
                            <CardImg top width="100%" src="/assets/images/Current.jpg" alt="Your Bookings" />
                            <CardBody>
                            <CardTitle tag="h3">Current Appointment</CardTitle>
                            <CardText>...(Date, Time, Day, Doctors Name from Backend)...</CardText>
                            <Button className="font-weight-bold" color="warning" size="lg" block>Cancel Appointment</Button>
                            </CardBody>
                        </Card>
                        
                
          </React.Fragment>
        );
    }
}

export default Appointment;