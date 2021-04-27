import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardBody } from 'reactstrap';
import axios from "axios";
import Navbarr from "./Navbar.js"
import Footer from "./FooterComponent"

const AddDoc = (props) => {
    const [inputFields, setInputFields] = useState({name:"", gender:"", email:"", dob:"", phone:"", photo:"", qualification:"", college:""})

    const handleChange = (event) => {
    console.log(event.target.name);
    setInputFields((values) => ({
      ...values,
      [event.target.name]: event.target.value || event.target.checked,
    }));
    };

    const handleClick = () => {
        console.log(inputFields);
        axios.post("/doctors/add", inputFields).then(response => {
            console.log(response);
        })
    }
  return (
      <React.Fragment>
          <Navbarr />
    <div className="container mt-5">
        <Card className="shadow-lg" style={{backgroundColor: '#f0afaf'}}> 
        <CardTitle className="mt-5 ml-5"><h1>Add a new Doctor</h1></CardTitle>
        <CardBody>
          <Form >
              
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="DocName">Doctor's Name</Label>
                <Input onChange={handleChange} type="text" value={inputFields.name} name="name" id="exampleName" placeholder="Name " />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleGender">Gender</Label>
                <Input onChange={handleChange} type="text" value={inputFields.gender} name="gender" id="exampleGender" placeholder="M/F" />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleEmail">Email ID</Label>
                <Input onChange={handleChange} type="text" value={inputFields.email} name="email" id="exampleEmail" placeholder="abc@xyz.com" />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="examplePhone">Contact Number</Label>
                <Input onChange={handleChange} type="text" value={inputFields.phone} name="phone" id="examplePhone" placeholder="94XXXXXXXX" />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleDob">Date of Birth</Label>
                <Input onChange={handleChange} type="text" value={inputFields.dob} name="dob" id="exampleDob" placeholder="DD/MM/YYYY" />
            </FormGroup>
            </Col>
        </Row>
        <FormGroup>
            <Label for="exampleQualification">Qualification</Label>
            <Input onChange={handleChange} type="text" value={inputFields.qualification} name="qualification" id="exampleQualification" placeholder="Qualification"/>
        </FormGroup>
        <FormGroup>
            <Label for="exampleCollege">College</Label>
            <Input onChange={handleChange} type="text" value={inputFields.college} name="college" id="exampleCollege" placeholder="College"/>
        </FormGroup>
        <FormGroup>
            <Label for="examplePhoto">Photo</Label>
            <Input onChange={handleChange} type="text" value={inputFields.photo} name="photo" id="examplePhoto" placeholder="Image URL"/>
        </FormGroup>
        
        <FormGroup check>
            
        </FormGroup>
        <a href = "./view">
            <Button onClick={handleClick} id = "updatebutton" className="mt-3" color="primary">Add Doctor</Button>
        </a>    
        </Form>
        </CardBody>
        </Card>
    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default AddDoc;
