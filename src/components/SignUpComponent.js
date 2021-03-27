import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignUp = (props) => {
  return (
    <div className="container">
    <div className="row">
        <div className="col mt-5">
        <h1>Sign-Up</h1>  
        </div>  
    </div>    
    <div className="row">
    <Form inline >
      <FormGroup className=" col-12 mt-5">
        <Label for="exampleFName" className="col-6 mr-sm-2">First Name</Label>
        <Input type="fname" name="fname" id="fname" placeholder="" />
      </FormGroup>
      <FormGroup className=" col-12 mt-5">
        <Label for="exampleLName" className="col-6 mr-sm-2">Last Name</Label>
        <Input type="lname" name="lname" id="lname" placeholder="" />
      </FormGroup>
      <FormGroup className=" col-12 mt-5">
        <Label for="exampleEmail" className="col-6 mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup  className="col-12 mt-5">
        <Label for="examplePassword" className="col-6 mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <FormGroup  className="col-12 mt-5">
        <Label for="examplePassword" className="col-6 mr-sm-2"> Confirm Password</Label>
        <Input type="password" name="cpassword" id="confirmPassword" placeholder="don't tell!" />
      </FormGroup>
      <div className="col-2 mt-5">
        <Button color="danger">Submit</Button>
      </div>
    </Form>
    </div>
    
    </div>

      );
}

export default SignUp;