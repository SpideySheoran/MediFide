import React, { useState, useEffect } from "react";
import Footer from "./FooterComponent";
import axios from "axios";
import Doctor from "./DoctorsProfile/Doctor";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

const DocProfiles = (props) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("/doctors").then((response) => {
      setDoctors(response.data);
      console.log(doctors);
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
                <Row>
                    <Col sm={{ size: 12 }}>
                        <Card className="mt-5 shadow-lg p-3 mb-5  rounded-0" >
      
                          {doctors.map((doctor, index) => (
                            <Doctor doctor={doctor} key={index} />
                          ))}
      </Card>
                    </Col>
                </Row>
            </Container>
      <Footer />
    </React.Fragment>
  );
};

export default DocProfiles;
