import React, { useState, useEffect } from "react";
import Footer from "./FooterComponent";
import axios from "axios";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Navbarr from "./Navbar.js"

const History = (props) => {
  const [doctors, setDoctors] = useState([]);

  return (
    <React.Fragment>
      <Navbarr/>
      <Container>
                <Row>
                    <Col sm={{ size: 3 }}>
                        <Card className="mt-5 shadow p-3 mb-5  rounded-0" >
      
                          <CardBody>
                                25-02-2021<br/>
                                Cold and flu<br/>
                                Azee-500, Paracetamol, Cetrezine
                          </CardBody>
                        </Card>
                    </Col>
                    <Col sm={{ size: 3 }}>
                        <Card className="mt-5 shadow p-3 mb-5  rounded-0" >
      
                          <CardBody>
                                18-07-2020<br/>
                                Stomach Ache and diarrhea<br/>
                                Loperamide, Electral, Drink plenty fluids
                          </CardBody>
                        </Card>
                    </Col>
                    <Col sm={{ size: 3 }}>
                        <Card className="mt-5 shadow p-3 mb-5  rounded-0" >
      
                          <CardBody>
                                08-04-2020<br/>
                                Common Cold<br/>
                                Cetrezine
                          </CardBody>
                        </Card>
                    </Col>
                    <Col sm={{ size: 3 }}>
                        <Card className="mt-5 shadow p-3 mb-5  rounded-0" >
      
                          <CardBody>
                                14-03-2020<br/>
                                Phyzical Injury<br/>
                                Anticeptic cream and lotion, Azee-250
                          </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                <Col sm={{ size: 3 }}>
                        <Card className="mt-5 shadow p-3 mb-5  rounded-0" >
      
                          <CardBody>
                                23-11-2019<br/>
                                Rash<br/>
                                Anti fungal cream, Azee-250
                          </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
      <Footer />
    </React.Fragment>
  );
};

export default History;