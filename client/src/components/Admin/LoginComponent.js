import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
  const [pass, setPass] = useState("");
  const password = "password";

  const handleClick = () => {
    if(pass===password){
      props.history.push("/admin/view");
    }
  }


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
                                <Input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" name="password" id="examplePassword" placeholder="******" />
                            </FormGroup>
                            </Form>
                        </CardBody>
            </Card>
            <Button onClick={handleClick}>Login</Button>
                    </Col>
                </Row>
            </Container>
    </React.Fragment>
  );
};

export default Login;