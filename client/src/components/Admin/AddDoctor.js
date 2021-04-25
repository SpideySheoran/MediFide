import React, {useEffect, useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

const AddDoc = (props) => {
<<<<<<< HEAD
    const [inputFields, setInputFields] = useState({name:"", gender:"", email:"", dob:"", phone:"", address:"", photo:"", qualification:"", college:""})
=======
    const [currentUser, setCurrentUser] = useState({ email: "" });
    const [inputFields, setInputFields] = useState({height:"", weight:"", number:"", anumber:"", address1:"", address2:"", city:"", state:"", zip:""})

    useEffect(() => {
        let emailid=currentUser.email;
        axios.get("/api/current_user")
              .then(response => {
            
              setCurrentUser(response.data.user)
                  console.log(response.data.user.email);
                  emailid = response.data.user.email;

            axios.get("/users/patient/" + emailid).then(response => {
            console.log(response.data);
            setInputFields(response.data);
        })
          }).catch(function (error) {
              console.log("ERROR LOADING DATA");
              console.log(error);
          });
        
        
        
    }, [])
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3

    const handleChange = (event) => {
    console.log(event.target.name);
    setInputFields((values) => ({
      ...values,
      [event.target.name]: event.target.value || event.target.checked,
    }));
<<<<<<< HEAD
    };

    const handleClick = () => {
        console.log(inputFields);
        axios.post("/doctors/add", { email: currentUser.email, ...inputFields }).then(response => {
=======
    console.log(inputFields);
    };
    const handleClick = () => {
        console.log(inputFields);
        axios.post("/users/update", { email: currentUser.email, ...inputFields }).then(response => {
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3
            console.log(response);
            window.location.reload();
        })
    }
<<<<<<< HEAD

=======
    // state = {
    //     current_user: [],
    //     error: false,
    //     loginStatus: false,
    //     loadStatus: false
    //   }
    //   componentDidMount(){
    //       axios.get("/api/current_user")
    //           .then(response => {
            
    //           this.setState({error:false,loadStatus:true,loginStatus:response.data.loggedIn, current_user: response.data.user});
    //           console.log(this.state.current_user,this.state.loginStatus);
    //       }).catch(function (error) {
    //           console.log("ERROR LOADING DATA");
    //           console.log(error);
    //         });
    //     }
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3
  return (
    <div className="container mt-5">
        <h2>Add a new Dcotor</h2>
          <Form className="mt-5">
              {currentUser.email && (<input name="email" value={currentUser.email} hidden></input>)}
              
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="DocName">Doctor's Name</Label>
<<<<<<< HEAD
                <Input onChange={handleChange} type="text" value={inputFields.name} name="name" id="exampleName" placeholder="Name " />
=======
                <Input onChange={handleChange} type="text" value={inputFields.height} name="height" id="exampleHeight" placeholder="FIRSTNAME " />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleWeight" className="text-white"> .</Label>
                <Input onChange={handleChange} type="text" value={inputFields.weight} name="weight" id="exampleWeight" placeholder="LASTNAME" />
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
<<<<<<< HEAD
                <Label for="exampleGender">Gender</Label>
                <Input onChange={handleChange} type="text" value={inputFields.gender} name="gender" id="exampleGender" placeholder="M/F" />
=======
                <Label for="exampleNumber">Gender</Label>
                <Input onChange={handleChange} type="text" value={inputFields.number} name="number" id="exampleNumber" placeholder="M/F" />
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
<<<<<<< HEAD
                <Label for="exampleEmail">Email ID</Label>
                <Input onChange={handleChange} type="text" value={inputFields.email} name="email" id="exampleEmail" placeholder="abc@xyz.com" />
=======
                <Label for="exampleANumber">Email ID</Label>
                <Input onChange={handleChange} type="text" value={inputFields.anumber} name="anumber" id="exampleANumber" placeholder="abc@xyz.com" />
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
<<<<<<< HEAD
                <Label for="examplePhone">Contact Number</Label>
                <Input onChange={handleChange} type="text" value={inputFields.phone} name="phone" id="examplePhone" placeholder="94XXXXXXXX" />
=======
                <Label for="exampleNumber">Contact Number</Label>
                <Input onChange={handleChange} type="text" value={inputFields.number} name="number" id="exampleNumber" placeholder="94XXXXXXXX" />
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
<<<<<<< HEAD
                <Label for="exampleDob">Date of Birth</Label>
                <Input onChange={handleChange} type="text" value={inputFields.dob} name="dob" id="exampleDob" placeholder="DD/MM/YYYY" />
=======
                <Label for="exampleANumber">Date of Birth</Label>
                <Input onChange={handleChange} type="text" value={inputFields.anumber} name="anumber" id="exampleANumber" placeholder="DD/MM/YYYY" />
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3
            </FormGroup>
            </Col>
        </Row>
        <FormGroup>
<<<<<<< HEAD
            <Label for="exampleQualification">Qualification</Label>
            <Input onChange={handleChange} type="text" value={inputFields.qualification} name="qualification" id="exampleQualification" placeholder="Qualification"/>
        </FormGroup>
        <FormGroup>
            <Label for="exampleCollege">College</Label>
            <Input onChange={handleChange} type="text" value={inputFields.college} name="college" id="exampleCollege" placeholder="College"/>
        </FormGroup>
        <FormGroup>
            <Label for="examplePhoto">Photo</Label>
            <Input onChange={handleChange} type="text" value={inputFields.photo} name="photo" id="examplePhoto" placeholder="Photo"/>
=======
            <Label for="exampleAddress">Qualification</Label>
            <Input onChange={handleChange} type="text" value={inputFields.address1} name="address1" id="exampleAddress" placeholder="M.B.B.S."/>
        </FormGroup>
        <FormGroup>
            <Label for="exampleAddress2">College</Label>
            <Input onChange={handleChange} type="text" value={inputFields.address2} name="address2" id="exampleAddress2" placeholder="Medical College Delhi"/>
>>>>>>> 85795cdd7b43121e6b2d76eeb5f5322a7fb276c3
        </FormGroup>
        
        <FormGroup check>
            
        </FormGroup>
        <Button onClick={handleClick} id = "updatebutton" className="mt-3" color="primary">Add Doctor</Button>
        </Form>
    </div>

  );
}

export default AddDoc;
