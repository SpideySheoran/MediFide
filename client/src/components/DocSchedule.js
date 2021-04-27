//
import React, { Component, useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Button } from "reactstrap"
//=======
//import React, { useState, useEffect } from 'react';
//import { Button } from "reactstrap"
//>>>>>>> 5fedc29a1e7efb4b8bc050af02253eb91f21e400
import {
    Table

  } from 'reactstrap';

import Footer from './FooterComponent';
import axios from 'axios';
import Navbarr from "./DoctorsProfile/Navbar"



const Schedule = (props) => {
    const [currentUser, setCurrentUser] = useState({ email: "" });
    const [state, setState] = useState({ time: "" }); 
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

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

    const handleClickAvail = () => {
        axios.get("/doctors/getByDate/"+email+"/"+date).then(resp=>{
            console.log(resp.data);
            setData(resp.data);
        })
        
        let Sched = document.getElementById("Sched");
        Sched.removeAttribute("hidden");
      };

    return (
        
        <React.Fragment>
            <Navbarr/>
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
                                               Email
                                            <span class="asteriskField">
                                                *
                                            </span>
                                            </label>
                                            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                            </div>
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
                                        <Button onClick={handleClickAvail} className="mt-1" color="secondary">Go</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        <div id = "Sched" hidden = "true">
                            <h2 className="mt-5">Your Schedule</h2>
                            {data.msg || data.length===0 ? (<h2>No appointments for today</h2>) : (
                                <Table>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Time</th>
                                    <th>Name</th>
                                    
                                    </tr>
                                </thead>
                                    <tbody>
                                        {data.map((d,index)=><tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{d.slot}</td>
                                            <td>{d.name}</td>
                                            <th><a href="/"><Button color="secondary">View</Button></a></th>
                                        </tr>)}
                                </tbody>
                                </Table>
                            )}
                            
                        </div>
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

