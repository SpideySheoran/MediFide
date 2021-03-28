import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserDetails = (props) => {
  return (
    <div className="container mt-5">
        <Form  method="POST" action="/users/update">
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleHeight">Height</Label>
                <Input type="text" name="height" id="exampleHeight" placeholder="ft/cm" />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleWeight">Weight</Label>
                <Input type="text" name="weight" id="exampleWeight" placeholder="Kg/lb" />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleNumber">Contact number</Label>
                <Input type="text" name="number" id="exampleNumber" placeholder="94XXXXXXXX" />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleANumber">Aternate Contact Number</Label>
                <Input type="text" name="anumber" id="exampleANumber" placeholder="94XXXXXXXX" />
            </FormGroup>
            </Col>
        </Row>
        <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
            </Col>
        </Row>
        <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <a href="/view-feedbacks"><Button id = "updatebutton" className="mt-3" color="primary">Update</Button></a>
        </Form>
    </div>
  );
}

export default UserDetails;
