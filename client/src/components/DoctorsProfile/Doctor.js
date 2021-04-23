import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import { Button} from 'reactstrap';
function Doctor(doctor,key) {
  console.log(doctor);
  return (
    <div className="row">
      <div className="col-12 col-sm-12">
        <Card>
          <div className="row">
            <div className="col-12 col-sm-6">
              <CardImg top width="80%" src={doctor.doctor.personal.photo} alt="Doc" />
            </div>
            <div className="col-12 col-sm-6 d-flex align-items-center">
              <CardBody>
                <CardTitle tag="h3">{doctor.doctor.personal.name}</CardTitle>
                <CardText>{doctor.doctor.personal.qualification}</CardText>
                <a href="./Doc1">
                  <Button
                    className="font-weight-bold"
                    color="info"
                    size="lg"
                    block
                    
                  >
            
                    Book Appointment
                  </Button>
                </a>
              </CardBody>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Doctor;
