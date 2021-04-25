import React, { Component, useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

function RemoveDoc(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("/doctors/").then((resp)=>{
             console.log(resp.data);
      })
    },[])
      return (
          <div className="container">
              <div className="row">
                <div className="col-4">
                    <Card>
                            <CardImg top width="100%" src="/assets/images/1.png" alt="Doc" />
                            <CardBody>
                                <CardTitle tag="h3">Dr. Suresh Rana</CardTitle>
                                <a href="./Doc1">
                                    <Button
                                        className="font-weight-bold"
                                        color="info"
                                        size="lg"
                                        block>
                                
                                        Remove
                                    </Button>
                                </a>
                            </CardBody>
                    </Card>
                </div>
                <div className="col-4">
                    <Card>
                            <CardImg top width="100%" src="/assets/images/2.jpg" alt="Doc" />
                            <CardBody>
                                <CardTitle tag="h3">Dr. SMeena</CardTitle>
                                <a href="./Doc2">
                                    <Button
                                        className="font-weight-bold"
                                        color="info"
                                        size="lg"
                                        block>
                                
                                        Remove
                                    </Button>
                                </a>
                            </CardBody>
                    </Card>
                </div>
            </div>
            </div>
        );
  }


export default RemoveDoc;