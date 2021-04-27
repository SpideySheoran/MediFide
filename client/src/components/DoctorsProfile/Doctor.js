import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  Container
} from "reactstrap";
// Don't Touch
import { useHistory } from "react-router-dom";

function Doctor(doctor, key) {
    const history = useHistory();
    //const doctorId = doctor.doctor
    console.log(doctor.doctor._id);
    const handleClick = () => {
        history.push("/docProfile/"+ doctor.doctor._id);
    }
  return (
    <Container>
        <Row>
          <Col sm={{ size: 6, offset:3}}>
            <Card className="mt-5 shadow-lg p-3 mb-5  rounded-0" style={{backgroundColor: '#f0afaf'}} >
              <div className="row">
                <div className="col-12 col-sm-6">
                  <CardImg
                    top
                    width="80%"
                    src={doctor.doctor.personal.photo}
                    alt="Doc"
                  />
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <CardBody>
                    <CardTitle tag="h3">{doctor.doctor.personal.name}</CardTitle>
                    <CardText>{doctor.doctor.personal.qualification}</CardText>
                      <Button
                        className="font-weight-bold rounded-0"
                        color="info"
                        size="lg"
                        block
                        onClick={handleClick}
                      >
                        Book Appointment
                      </Button>
                  </CardBody>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}

export default Doctor;
