import React, { useState, useEffect } from 'react';
import { Button } from "reactstrap"
import {
    Table

  } from 'reactstrap';

import Footer from './FooterComponent';
import axios from 'axios';



const Schedule = (props) => {
    const [currentUser, setCurrentUser] = useState({ email: "" });
    const [state, setState] = useState({ time: "" }); 
    const [date, setDate] = useState("");

    useEffect(() => {
        let emailid=currentUser.email;
        axios.get("/api/current_user")
              .then(response => {
            
              setCurrentUser(response.data.user)
                  console.log(response.data.user.email);
                  emailid = response.data.user.email;

            axios.get("/users/patient/" + emailid).then(response => {
            console.log(response.data);
        })
          }).catch(function (error) {
              console.log("ERROR LOADING DATA");
              console.log(error);
          });
      
        
        
    }, [])

        const handleClick =()=>{
            axios.post("/doctors/appointment/605f89786ab3b02854353104", { appointments: { date: date, slots: { slot: state.time } }, docName: "Dr. Suresh Rana", email: currentUser.email }).then(response => console.log(response));
        }

    return (
        <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12">
                        <h3>Select your desired Date</h3>
                            
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-12 mt-3">
                                        <form class="form-horizontal" method="post">
                                        <div class="form-group ">
                                            <label class="control-label col-sm-2 requiredField" for="date">
                                                Date
                                            <span class="asteriskField">
                                                *
                                            </span>
                                            </label>
                                            <div class="col-10">
                                                <div class="input-group col-6">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-calendar">
                                                        </i>
                                                    </div>
                                                    <input value={date} onChange={(e)=>setDate(e.target.value)} class="form-control" id="date" name="date" placeholder="M/DD/YYYY" type="date"/>
                                                </div>
                                                
                                            </div>
                                             
                                        </div>
                                           <Button className="mt-1" color="secondary">Go</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mt-5">Your Schedule</h2>
                        <Table>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Time</th>
                                <th>Name</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <th><a href="/"><Button color="secondary">View</Button></a></th>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <th><a href="/"><Button color="secondary">View</Button></a></th>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <th><a href="/"><Button color="secondary">View</Button></a></th>
                                </tr>
                            </tbody>
                            </Table>
                        </div>
                        <div className="col-12 col-sm-6">
                            
                        </div>
                    </div>
                </div>
                
               
                <Footer />
          </React.Fragment>
    );
}

export default Schedule;

