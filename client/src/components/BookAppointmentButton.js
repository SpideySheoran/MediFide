import React, { Component, useState, useEffect } from 'react';

import { Button} from 'reactstrap';
import {
    BrowserRouter as Router
  } from "react-router-dom";
  import "./styles.css";
  import axios from 'axios';
  import { useHistory } from "react-router-dom";

function BAButton(props)
 {
    const [currentUser, setCurrentUser] = useState({ email: "" });
    const [details, setDetails] = useState({ date: "", time: "", doctor: "" });
    const history = useHistory();
  
    useEffect(() => {
      let emailid = currentUser.email;
      axios
        .get("/api/current_user")
        .then((response) => {
          setCurrentUser(response.data.user);
          console.log(response.data.user.email);
          emailid = response.data.user.email;
  
          axios.get("/users/patient/" + emailid).then((response) => {
            setDetails(response.data.appointment);
            console.log(details);
          });
        })
        .catch(function (error) {
          console.log("ERROR LOADING DATA");
          console.log(error);
        });
    }, []);

    const handleClick = () => {
        if (details)
        {
            let h = document.getElementById("alreadyBooked");
            h.removeAttribute("hidden");
        }
        else
        {
            history.push("./BAApp");
        }
    }
    return(
        <Router>            
            <h4 className="text-center" id = "alreadyBooked" hidden = "true">Appointment Already Booked</h4>
            <Button onClick={handleClick} className=" mt-5 shadow-lg p-3 mb-5 rounded-0 container font-weight-bold mt-5 " color="danger" size="lg" block >
            <h3>Book Appointment Now!</h3>
            <i class="fa fa-plus-circle fa-2x ml-3" aria-hidden="true"></i>
            </Button>
        </Router>
    )
}
export default BAButton;