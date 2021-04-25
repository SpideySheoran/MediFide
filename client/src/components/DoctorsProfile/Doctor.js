import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
// Don't Touch
import { Link, useHistory } from "react-router-dom";

function Doctor(doctor, key) {
    const history = useHistory();
    //const doctorId = doctor.doctor
    console.log(doctor.doctor._id);
    const handleClick = () => {
        history.push("/docProfile/"+ doctor.doctor._id);
    }
  return (
    <div className="row">
      <div className="col-12 col-sm-12">
        <Card>
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
                    className="font-weight-bold"
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
      </div>
    </div>
  );
}

export default Doctor;
