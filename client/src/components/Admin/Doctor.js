import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col
  } from 'reactstrap';
import axios from 'axios';

function Doctor(doctor) {
  const handleClick = () => {
    console.log(doctor.doctor._id)
    axios
      .post("doctors/remove/" + doctor.doctor._id, {})
      .then((response) => console.log(response));
  };
  return (
    <div className="col-4 mb-5">
      <Card>
        <CardImg top width="100%" src={doctor.doctor.personal.photo} alt="Doc" />
        <CardBody>
          <CardTitle tag="h3">{doctor.doctor.personal.name}</CardTitle>
          <a href="./view">
            <Button onClick={handleClick} className="font-weight-bold" color="info" size="lg" block>
              Remove
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}

export default Doctor;
