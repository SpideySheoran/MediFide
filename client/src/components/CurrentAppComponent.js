import React, { Component, useEffect, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import axios from "axios";

const Appointment = (props) => {
    const [currentUser, setCurrentUser] = useState({ email: "" });
    const [details, setDetails] = useState({date:"", time:"", doctor:""});

    useEffect(() => {
        let emailid=currentUser.email;
        axios.get("/api/current_user")
              .then(response => {
            
              setCurrentUser(response.data.user)
                  console.log(response.data.user.email);
                  emailid = response.data.user.email;

            axios.get("/users/patient/" + emailid).then(response => {
            console.log(response.data);
            setDetails(response.data.appointment);
        })
          }).catch(function (error) {
              console.log("ERROR LOADING DATA");
              console.log(error);
          });
        
        
        
    }, [])

    return (
      <React.Fragment>
                
                    <Card>
                        <CardImg top width="100%" src="/assets/images/Current.jpg" alt="Your Bookings" />
                        <CardBody>
                        <CardTitle tag="h3">Current Appointment</CardTitle>
                    {details ? <CardText>{details.date}, {details.time}, {details.doctor}</CardText> : <CardText>No Appointments</CardText>}
                        
                        <Button className="font-weight-bold" color="warning" size="lg" block>Cancel Appointment</Button>
                        </CardBody>
                    </Card>
                        
                
        </React.Fragment>
    );
}

export default Appointment;