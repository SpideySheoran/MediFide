import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  const [doctors, setDoctors] = useState([]);

  return (
    <React.Fragment>
      <Container>
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card className="rounded-0 mt-5" >
                        <CardTitle className="ml-5 mt-3">Admin Login</CardTitle>
                        <CardBody>
                            <Form>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="******" />
                            </FormGroup>
                            </Form>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </React.Fragment>
  );
};

export default Login;