import React, {useEffect, useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from "./FooterComponent.js"
import Navbarr from './Navbar'
import axios from "axios";
import { useParams } from "react-router-dom";

const Prescription = (props) => {

    const {id} = useParams();
    const [inputFields, setInputFields] = useState({date: "", doctor: "", time:"", pAilment:"", sAilment:"", medicine1: "", medicine2:"", medicine3: "", medicine4:"", medicine5:""});

    useEffect(() => {
        axios.get("/users/" + id).then(res => {
            setInputFields({date: res.data.appointment.date, doctor: res.data.appointment.doctor, time:res.data.appointment.time});
        })
    }, [])

    const handleChange = (event) => {
        console.log(event.target.name);
        setInputFields((values) => ({
          ...values,
          [event.target.name]: event.target.value || event.target.checked,
        }));
    };

    const handleClick = () => {
        axios.post("/users/prescription/"+id, inputFields).then(response => {
            console.log(response);
        })
    }
   
  return (
        <React.Fragment>
							<Navbarr/>
            <Container>
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card className="mt-5 shadow-lg p-3 mb-5  rounded-0" style={{backgroundColor: '#f0afaf'}} >
                            <CardBody>
                                <h2>Patient's Prescription</h2>
                                <Form>
                                <FormGroup>
                                    <Label for="exampleDate">Date</Label>
                                    <Input type="text" name="date" id="exampleDate" placeholder="DD/MM/YYYY" value={inputFields.date}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAilment">Primary Ailment</Label>
                                    <Input onChange={handleChange} type="text" name="pAilment" id="exampleAilment" placeholder="" value={inputFields.pAilment}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSAilment">Secondary Ailments</Label>
                                    <Input onChange={handleChange} type="text" name="sAilment" id="exampleSAilment" placeholder="" value={inputFields.sAilment}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Medicines Rx</Label>
                                    <Input onChange={handleChange} type="medicine" name="medicine1" id="medicine1" placeholder="" value={inputFields.medicine1}/>
                                    <Input onChange={handleChange} type="medicine" name="medicine2" id="medicine2" placeholder="" value={inputFields.medicine2}/>
                                    <Input onChange={handleChange} type="medicine" name="medicine3" id="medicine3" placeholder="" value={inputFields.medicine3}/>
                                    <Input onChange={handleChange} type="medicine" name="medicine4" id="medicine4" placeholder="" value={inputFields.medicine4}/>
                                    <Input onChange={handleChange} type="medicine" name="medicine5" id="medicine5" placeholder="" value={inputFields.medicine5}/>
                                </FormGroup>
                                
                                <a href = "/Schedule"><Button color="info" onClick={handleClick}>Submit</Button></a>
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
