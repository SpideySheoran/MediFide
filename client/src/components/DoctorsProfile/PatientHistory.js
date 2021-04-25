import React, { useState, useEffect } from "react";
import Footer from "./FooterComponent";
import axios from "axios";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

const History = (props) => {
  const [doctors, setDoctors] = useState([]);

  return (
    <React.Fragment>
      <Container>
                <Row>
                    <Col sm={{ size: 12 }}>
                        <Card className="mt-5 shadow-lg p-3 mb-5  rounded-0" >
      
                          <CardBody>
                                
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