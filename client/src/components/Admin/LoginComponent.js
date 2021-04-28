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
                        <CardTitle className=" mt-5">
                          <div className="text-center">
                            <h3>Admin Login</h3>
                          </div>
                        </CardTitle>
                        <CardBody>
                            <Form>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" name="password" id="examplePassword" placeholder="******" />
                            </FormGroup>
                            </Form>
                            <Button className="rounded-0 shadow-sm" onClick={handleClick}>Login</Button>
                        </CardBody>
            </Card>
            
                    </Col>
                </Row>
            </Container>
    </React.Fragment>
  );
};

export default Login;