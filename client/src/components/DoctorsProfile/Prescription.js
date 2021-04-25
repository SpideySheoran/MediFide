import React, {useEffect, useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from "./FooterComponent.js"

import axios from "axios";

const Prescription = (props) => {
   
  return (
      <React.Fragment>
      <Container>
          <Row>
              <Col sm={{ size: 6, offset: 3 }}>
                  <Card className="mt-5" style={{backgroundColor: '#f1f1f1'}} >
                      <CardBody>
                          <h2>Patient's Prescription</h2>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Date</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="DD/MM/YYYY" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Primary Ailment</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Secondary Ailments</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Medicines Rx</Label>
        <Input type="medicine" name="medicine1" id="medicine1" placeholder="" />
        <Input type="medicine" name="medicine2" id="medicine2" placeholder="" />
        <Input type="medicine" name="medicine3" id="medicine3" placeholder="" />
        <Input type="medicine" name="medicine4" id="medicine4" placeholder="" />
        <Input type="medicine" name="medicine5" id="medicine5" placeholder="" />
      </FormGroup>
      
      <a href="./Details"><Button color="info">Submit</Button></a>
    </Form>
    </CardBody>
    </Card>
    </Col>
    </Row>
    </Container>
    <Footer/>
    </React.Fragment>
  );
}

export default Prescription;
