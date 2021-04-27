import React, { useState, useEffect } from "react";
import Footer from "./FooterComponent";
import axios from "axios";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Navbarr from "../NavbarComponent"

const History = (props) => {
  const [currentUser, setCurrentUser] = useState({ email: "" });
  const [data, setData] = useState([]);

  useEffect(() => {
    let emailid = currentUser.email;
    axios
      .get("/api/current_user")
      .then((response) => {
        setCurrentUser(response.data.user);
        console.log(response.data.user.email);
        emailid = response.data.user.email;
        axios.get("/users/history/" + emailid).then(res => {
          setData(res.data)
          console.log(res.data);
          console.log(data)
        });
      })
      .catch(function (error) {
        console.log("ERROR LOADING DATA");
        console.log(error);
      });
  }, [])

  return (
    <React.Fragment>
      <Navbarr/>
      <Container>
                        {data.map((d,index)=>
                            <Card className="mt-5 shadow p-3 mb-5  rounded-0" >
                              <CardBody>
                                {d.doctor}<br/>
                                {d.date}<br/>
                                <h5>Diagnosed with</h5>
                                {d.pAilment}<br/>
                                {d.sAilment}<br/>
                                <h5>Rx</h5>
                                {d.medicine1}<br/>
                                {d.medicine2}<br/>
                                {d.medicine3}<br/>
                                {d.medicine4}<br/>
                                {d.medicine5}
                              </CardBody>
                            </Card>
                        )}
            </Container>
      <Footer />
    </React.Fragment>
  );
};

export default History;