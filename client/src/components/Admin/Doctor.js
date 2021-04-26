import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col
  } from 'reactstrap';
function Doctor(doctor) {
  return (
    <div className="col-4 mb-5">
      <Card>
        <CardImg top width="100%" src={doctor.doctor.personal.photo} alt="Doc" />
        <CardBody>
          <CardTitle tag="h3">{doctor.doctor.personal.name}</CardTitle>
          <a href="./Doc1">
            <Button className="font-weight-bold" color="info" size="lg" block>
              Remove
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}

export default Doctor;
