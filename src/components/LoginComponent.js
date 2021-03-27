import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = (props) => {
  return (
    <div className="container">
    <div className="row">
        <div className="col mt-5">
        <h1>Login</h1>  
        </div>  
    </div>    
    <div className="row">
    <Form inline >
      <FormGroup className=" col-6 mt-5">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup  className="col-6 mt-5">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <div className="col-2 mt-5">
        <Button>Submit</Button>
      </div>
    </Form>
    </div>
    </div>

      );
}

export default LoginForm;