import React, { Component, useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

import Footer from './FooterComponent';
import axios from 'axios';



const Doc1 = (props) => {
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
                    <div className="col-12 col-sm-12">
                        
                        <div className="row">
                            <h2>Book Your Appointment With</h2>
                            <div className="col-12 col-sm-12">
                                <img top width="30%" src="/assets/images/1.png" class="img-rounded" alt="Doc1" />
                            </div>
                            <div className="col-12 col-sm-12 ">
                                    
                                <h3>Dr. Suresh Rana</h3>
                                <h5>MD, M.B.B.S.</h5>
                                <h5></h5>
                                <h5></h5>
                                <h4>
                                    Gold medalist from Government Medical College Bombay 
                                </h4>
                                        
                            </div>
                        </div>
                                
                    </div>
                </div>
                <div className="row mt-5">
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
                                        <div class="col-12">
                                            <div class="input-group col-6">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-calendar">
                                                    </i>
                                                </div>
                                                <input value={date} onChange={(e)=>setDate(e.target.value)} class="form-control" id="date" name="date" placeholder="M/DD/YYYY" type="date"/>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5" id="Slots">
                            <button class="btn btn-primary " onClick={() => setState({ time: "10-11am" })}>10-11am</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "11-12pm" })}>11-12pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "12-1pm" })}>12-1pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "1-2pm" })}>1-2pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "2-3pm" })}>2-3pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "3-4pm" })}>3-4pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "4-5pm" })}>4-5pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "5-6pm" })}>5-6pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "6-7pm" })}>6-7pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "7-8pm" })}>7-8pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "8-9pm" })}>8-9pm</button>
                            <button class="btn btn-primary " onClick={() => setState({ time: "9-10pm" })}>9-10pm</button>
                                                        
                        </div>

                        <div class="form-group mt-3">
                            <div class="col-sm-10 col-sm-offset-2">
                                <a href = "/"><button onClick={handleClick} class="btn btn-danger " name="submit" type="submit">
                                    Check Availiblity and Book
                                </button></a>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Doc1;