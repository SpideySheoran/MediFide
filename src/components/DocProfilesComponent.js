import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { Button,  Navbar, NavbarBrand } from 'reactstrap';
import Footer from './FooterComponent';

class DocProfiles extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
          <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <Card>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <CardImg top width="80%" src="/assets/images/1.png" alt="Doc1" />
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex align-items-center">
                                        <CardBody>
                                        <CardTitle tag="h3">Dr. Suresh Rana</CardTitle>
                                        <CardText>MD, M.B.B.S.</CardText>
                                        <a href="./Doc1"><Button className="font-weight-bold" color="info" size="lg" block>Book Appointment</Button></a>
                                        </CardBody>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <Card>
                                <div className="row">
                                    <div className="col-12 col-sm-6 d-flex align-items-center">
                                        <CardBody>
                                        <CardTitle tag="h3">Dr. Reshma Khan</CardTitle>
                                        <CardText>M.B.B.S (ENT Specialist)</CardText>
                                        <a href="./Doc2"><Button className="font-weight-bold" color="info" size="lg" block>Book Appointment</Button></a>
                                        </CardBody>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <CardImg top width="80%" src="/assets/images/2.jpg" alt="Doc1" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <Card>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <CardImg top width="80%" src="/assets/images/3.jpg" alt="Doc1" />
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex align-items-center">
                                        <CardBody>
                                        <CardTitle tag="h3">Dr. Harvinder Singh</CardTitle>
                                        <CardText>M/B.B.S. MD (Child Specialist)</CardText>
                                        <a href="./Doc3"><Button className="font-weight-bold" color="info" size="lg" block>Book Appointment</Button></a>
                                        </CardBody>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <Footer/>
          </React.Fragment>
        );
    }
}

export default DocProfiles;