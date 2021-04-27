import React, { useState, useEffect } from "react";
import Footer from "./FooterComponent";
import axios from "axios";
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import Navbarr from "../NavbarComponent"
import { useParams, useHistory } from "react-router-dom";

const History = (props) => {
    
    const {id} = useParams();
    const [data, setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get("/users/" + id).then(res => {
            setData(res.data.history)
            console.log(res.data)
        })
    }, [])
    
    const handleClick = (id) => {
        history.push("/Prescription/"+ id);
    }

    return (
        <React.Fragment>
          <Navbarr/>
          <Container>
                <Button className="col-md-3 mt-5 justify-content-center" onClick = {()=> handleClick(id)} color="secondary">Write Prescription</Button>
                    {data.map((d,index)=>
                        <Card className="mt-5 shadow p-3 mb-5  rounded-0" >
                          <CardBody>
                            {d.doctor}<br/>
                            {d.date}<br/>
                            <p>Diagnosed with</p>
                            {d.pAilment}<br/>
                            {d.sAilment}<br/>
                            <h6>Rx</h6>
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