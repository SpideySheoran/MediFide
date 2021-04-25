import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

class Emergency extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
          <React.Fragment>
                
                        <Card className="mt-5 shadow-lg p-3 mb-5 rounded-0">
                            <CardImg top width="100%" src="/assets/images/ambulance.jpg" alt="Ambulance Contact Number" />
                            <CardBody>
                                
                            <CardTitle tag="h3">Emergency Contact No:</CardTitle>
                            <CardText tag="h2"><i className="fa fa-phone fa-lg mr-2"></i>+91-98XXX-XXXX5</CardText>
                            </CardBody>
                        </Card>
                        
                
          </React.Fragment>
        );
    }
}

export default Emergency;