import React, { Component, useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col
  } from 'reactstrap';
import axios from "axios"
import Navbarr from "./Navbar.js"
import Footer from "./FooterComponent"
import Doctor from "./Doctor.js"
function ViewDoc(props) {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axios.get("/doctors").then((response) => {
          setDoctors(response.data);
          console.log(doctors);
        });
      }, []);
      return (
          <React.Fragment>
          <Navbarr/>
          <div className="container shadow-lg mt-3">
              <div className="row">
                  <Col sm={{ size: 4, offset: 5 }}>
                    <a href="./add"><Button  className="rounded-0 ml-5 mt-5 mb-5 shadow" style={{backgroundColor: '#ff4040'}}>Add a new Doctor</Button></a>
              </Col>
              </div>
              <div className="row">
              {doctors.map((doctor, index) => (
                <Doctor doctor={doctor} key={index} />
              ))}
            </div>
            </div>
            <Footer />
            </React.Fragment>
        );
  }


export default ViewDoc;