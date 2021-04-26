import React, {useEffect, useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, Card, CardBody, CardTitle } from 'reactstrap';
import axios from "axios";
import Footer from "./FooterComponent.js"
import Navbarr from "./NavbarComponent.js"

const UserDetails = (props) => {
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

    const handleChange = (event) => {
    console.log(event.target.name);
    setInputFields((values) => ({
      ...values,
      [event.target.name]: event.target.value || event.target.checked,
    }));
    console.log(inputFields);
    };
    const handleClick = () => {
        console.log(inputFields);
        axios.post("/users/update", { email: currentUser.email, ...inputFields }).then(response => {
            console.log(response);
            window.location.reload();
        })
    }
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
  return (
    <React.Fragment>
        <Navbarr/>
            <Container>
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card className="mt-5 shadow-lg p-3 mb-5 rounded-0" style={{backgroundColor: '#ffaba6'}} >
                            <CardTitle className="mt-3">
                                <h2>Update Your Deatils</h2>
                            </CardTitle>
                                <CardBody>
                                <Form>
                                    {currentUser.email && (<input name="email" value={currentUser.email} hidden></input>)}
                                    
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleHeight">Height</Label>
                                        <Input onChange={handleChange} type="text" value={inputFields.height} name="height" id="exampleHeight" placeholder="ft/cm" />
                                    </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleWeight">Weight</Label>
                                        <Input onChange={handleChange} type="text" value={inputFields.weight} name="weight" id="exampleWeight" placeholder="Kg/lb" />
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleNumber">Contact number</Label>
                                        <Input onChange={handleChange} type="text" value={inputFields.number} name="number" id="exampleNumber" placeholder="94XXXXXXXX" />
                                    </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleANumber">Aternate Contact Number</Label>
                                        <Input onChange={handleChange} type="text" value={inputFields.anumber} name="anumber" id="exampleANumber" placeholder="94XXXXXXXX" />
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="exampleAddress">Address</Label>
                                    <Input onChange={handleChange} type="text" value={inputFields.address1} name="address1" id="exampleAddress" placeholder="1234 Main St"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress2">Address 2</Label>
                                    <Input onChange={handleChange} type="text" value={inputFields.address2} name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                                </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleCity">City</Label>
                                        <Input onChange={handleChange} type="text" value={inputFields.city} name="city" id="exampleCity"/>
                                    </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleState">State</Label>
                                        <Input onChange={handleChange} type="text" value={inputFields.state} name="state" id="exampleState"/>
                                    </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleZip">Zip</Label>
                                        <Input onChange={handleChange} type="text" value={inputFields.zip} name="zip" id="exampleZip"/>
                                    </FormGroup>  
                                    </Col>
                                </Row>
                                
                                <Button onClick={handleClick} id = "updatebutton" className="mt-3" color="primary">Update</Button>
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

export default UserDetails;
